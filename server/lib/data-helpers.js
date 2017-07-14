"use strict";

// simulate delay function not used but told to keep
const simulateDelay = require("./util/simulate-delay");

// Helper functions for saving and getting tweets, using the mongo 'db'
module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to 'db'
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet, callback);
    },
    getTweets: function(callback) {
        db.collection("tweets").find().toArray(callback);
    }
  };
};
