require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
//set up socket server 
const http = require('http').createServer(app);
//to initialize a new socket server instance
const io = require('socket.io')(http);

//db connection
require('./config/db')();

const PORT = process.env.PORT;

//use express middlewaree
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//For heroku deployment - this block of codes will only run in production env
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

//server listener on connection
io.on('connection', socket => {
    console.log('a user connected, socket.id is: ', socket.id);

    socket.emit("your id", socket.id);

	socket.on('save book', title => {
		io.emit('saved book title', title);
	});
});


http.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}. http://localhost:${PORT}`);
});
