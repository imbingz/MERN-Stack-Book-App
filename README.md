# Book-Search-Full-Stack
 A React-based Single-Page-App (SPA) with helper/util functions and React Hooks to query and display books based on user searches. It also uses Node, Express, MongoDB, and socket.io. 

<hr>

  [![github-follow](https://img.shields.io/github/followers/imbingz?label=Follow&logoColor=purple&style=social)](https://github.com/imbingz)
  [![project-languages-used](https://img.shields.io/github/languages/count/imbingz/Book-Search-Full-Stack?color=important)](https://github.com/imbingz/Book-Search-Full-Stack)
  [![project-top-language](https://img.shields.io/github/languages/top/imbingz/Book-Search-Full-Stack?color=blueviolet)](https://github.com/imbingz/Book-Search-Full-Stack)
  [![license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)
  [![node.js](https://img.shields.io/node/v/c?color=pink)](https://nodejs.org/en/)
  [![npm](https://img.shields.io/npm/v/npm?color=blue&logo=npm)](https://www.npmjs.com/package/inquirer)

  ## Table of Content
  * [ Project Links ](#Project-Links)
  * [ Screenshots-Demo ](#Screenshots-Demo)
  * [ Project Objective ](#Project-Objective)
  * [ User Story ](#User-Story)
  * [ Technologies ](#Technologies)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Credits and Reference ](#Credits-and-Reference)
  * [ Tests ](#Tests)
  * [ Author Contact ](#Author-Contact)
  * [ License ](#License)
  #

  ##  Project Links
   ##### Deployed Link on Heroku:  https://whispering-brushlands-26885.herokuapp.com/
  ##### GitHub Repo link: https://github.com/imbingz/Book-Search-Full-Stack



  ## Screenshots-Demo
  <kbd>![screenshot-demo1](./client/public/assets/demo-1.gif)</kbd>
  <kbd>![screenshot-demo](./client/public/assets/demo.gif)</kbd>
  ## Project Objective
  * This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show React components without changing the route within Express.
  * User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.
  * Use socket.io to create a notification of the saved-book title that triggers whenever a user saves an book. 
  * Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.
  * At a minimum, books should have each of the following fields:
      * `title` - Title of the book from the Google Books API

      * `authors` - The books's author(s) as returned from the Google Books API

      * `description` - The book's description as returned from the Google Books API

      * `image` - The Book's thumbnail image as returned from the Google Books API

      * `link` - The Book's information link as returned from the Google Books API

  ## User Story
  As a user, I want to be able to search for books, view details of a book on Google Books, and "Save" as well as 'Delete" a book. 

  ## Technologies 
  ```
  Reactjs node.js, Mongodb, Mongoose, Express js, socket.io/socket.io-client
  
  React-Bootstrap, React-Router-Dom,  React-Icons, React-Tostify
  ```
  
  ## Installation
  Access to GitHub.com and a code editor such as vscode is necessary. Click the GitHub link provided above to the APP REPO. Click on the green button that says Clone or Download and Choose how you would like to download: using the SSH/HTTPS keys or download the zip file. If using SSH/HTTPS Key: You will copy the link shown and open up either terminal (mac: pre-installed) or gitbash (pc: must be installed). Once the application is open, you will type git clone paste url here. If using Download ZIP: Click on Download Zip. Locate the file and double click it to unzip the file. Locate the unzipped folder and open it. 

  ## Usage 
  In order to use this APP, you need terminal (mac: pre-installed) or gitbash (pc: must be installed). You also need to download and install [node.js](https://nodejs.org/en/) and [npm](www.npmjs.com) or [yarn](https://yarnpkg.com/) package manager. Open the cloned REPO in your favorite code editor, and then in terminal, enter the command “npm i“ or “yarn add”  to install the dependencies. You will also need to signup for a free account at [mongodb.com](https://www.mongodb.com/). In addition, make sure to create a .env file on the project root, and input your own mongodb Atals config information (see .env_example for samples). You also need to obtain a Google Book API Key [link here](https://developers.google.com/books/docs/v1/getting_started) and replace process.env.REACT_APP_BOOK_API_KEY in src/Search/Search.js file with you own API KEY. Now you are ready to start using  the app by entering “npm start” on your terminal or gitbash. If you just want to try how the app works, you can go to the link [here](https://whispering-brushlands-26885.herokuapp.com/)

  
  ## Credits and Reference
  The following links have helped me with this project. <br> [React Icons](https://react-icons.github.io/react-icons/) <br>  [mongodb.com](https://www.mongodb.com/)<br>  [Heroku](https://heroku.com) <br>   [Reaect Tostify](https://www.npmjs.com/package/react-toastify)<br>  [React Boootstrap](https://react-bootstrap.github.io/getting-started/introduction) <br>  [Photo by Susan Yin on Unsplash](https://unsplash.com/photos/YLSwjSy7stw)<br>  [How do I hide API key in create-react-app](https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app) <br>


  ## Tests
  npm test

  ## Author Contact
  Contact the author with any questions!<br>
  Github link: [imbingz](https://github.com/imbingz)<br>
  Email: contact.bingz@gmail.com

  ## License
  This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.<br />

  Copyright © 2020 [BING Z](https://imbingz.github.io/Responsive-Website-Portfolio/)

  <hr>
  <p align='center'><i>
  This README was built with ❤️ by <a href="https://imbingz.github.io/Responsive-Website-Portfolio/"> BING Z</a>
</i></p>
