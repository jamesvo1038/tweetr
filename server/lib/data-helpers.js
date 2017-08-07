"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

     // Saves a tweet to `db`
     saveTweet: function(newTweet, callback) {
       db.collection("tweets").save(newTweet);
       callback(null,true);
     },

     // Get all tweets in `db`
     getTweets: function(callback) {
       db.collection("tweets").find().toArray((err,tweets) => {
         if (err)
           throw err;
         callback(null,tweets);
       });
     },

     // Save user in `db`
     saveUser: function(user, callback) {
       db.collection("users").save(user);
       callback(null, true);
     },

     // Lookup user in `db`
     getUser: function(handle, callback) {
       db.collection("users").findOne({ "handle": handle }, callback);
     }

   };
 }
