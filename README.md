Fire Grabber
=========
[![Build Status](https://travis-ci.org/jakeols/fire-grabber.svg?branch=master)](https://travis-ci.org/jakeols/fire-grabber)

Simple wrapper / helper method for getting data from a different node in Firebase

## Installation

  `npm install fire-grabber`

## Usage
The retrieve method accepts two arguments that should be valid firebase paths. 
Say you have a team node `/teams/{teamid}/members` with a list of uids, but would like to get the associated user
information for all team members stored under `/Users/{uid}`. You would pass `/teams/{teamid}/members` as the first argument and `/Users` as the second argument. <br><br>
<b>Example:</b><br>

    // import
    var fireGrabber = require('fire-grabber');
    
    // Firebase config
    var config = {...}
    
    // initialize
    fireGrabber.initialize(config);
    
    // example usage
    var teamMemberInfo = fireGrabber.retrieve('/teams/12345/members', '/Users').then(data => {
    // returns all the user info from the list of member keys
    console.log(data);
    });
    
The `retrieveWithArr` method also accepts two arguments, one being an array of firebase keys, and the second being a valid firebase path. This is useful if you already have an array of keys that correspond to data stored in another path. <br><br>
<b>Example:</b><br>

    fireGrabber.retrieveWithArr('/teams/12345/members', [10,20,30,40]).then((data) => {
      // returns all the user info from the array of user keys
      console.log(data);
    });


## Tests

  `npm test`

## Contributing

Feel free to add/change anything you feel is needed. 
