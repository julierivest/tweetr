"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

//MONGO--DONE RIGHT??
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  //console.log(db);

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);


  app.use("/tweets", tweetsRoutes);

  //db.close();
});








app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static('/scripts', express.static(__dirname + '/node_modules/flash-message/')));
// The in-memory database of tweets. It's a basic object with an array in it.

//REMOVED IN MEMORY DB -- REPLACED W MONGO DB^^^
//const db = require("./lib/in-memory-db");







// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
