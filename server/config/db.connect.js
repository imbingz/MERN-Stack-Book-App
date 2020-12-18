const mongoose = require('mongoose');
async function db() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('successfuly connected to db');
    } catch (error) {
        console.log('error connecting to db: ');
        console.log(error);
    }
}
module.exports = db;
