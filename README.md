# Simple Wiki REST API

This is express project to implement REST API for simple wiki

# Run Script

- Open terminal/cmd, go to the project directory and install all dependencies

```
npm install
```

- Setup MongoDB server on your device, you can use [this](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) as reference
- Create a database with name "express", create a collection with name "articles" and add the following document

```
{
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}
```

- Run this command to run the server:

```
nodemon server.js
```

# API Collections

Access postman collections [here](https://www.postman.com/grey-astronaut-140944/workspace/simple-wiki-rest-api)
