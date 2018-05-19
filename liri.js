// main LIRI javascript file

// dotenv package 
require("dotenv").config();

// Core node package for reading and writing files
var fs = require("fs");

// Request npm package
var request = require("request");

//  API Keys reqired 
var apiKeys = require("./keys.js");

// Sample 
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

//console.log(client);
//console.log(spotify);

// get command line arguments
var action = process.argv[2];    // action value 
var num1 = process.argv[3];      // first parameter
var num2 = process.argv[4];      // second parameter

// LIRI case statement
switch(action) {
    case "my-tweets":
        console.log("My Tweets!");
        break;
    case "spotify-this-song":
        console.log("Spotify this Song!");
        break;
    case "movie-this":
        console.log("Movie This!");
        break;
    case "do-what-it-says":
        console.log("Do what it says!");
        break;
    default:
        console.log("LIRI doesn't like that!");
}