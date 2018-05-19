// main LIRI javascript file

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