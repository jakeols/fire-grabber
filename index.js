'use strict';
var firebase = require('firebase');

var fireGrabber = {
   initialize: function(config) {
    firebase.initializeApp(config);
  }
};

fireGrabber.retrieve = function (firstNode, secondNode) {
  var database = firebase.database();
  var info = [];
  return firebase.database().ref(firstNode).once('value').then(function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
      firebase.database().ref(secondNode).child(key).once('value').then(function(snapshot) {
       var infoObject = snapshot.val();
       if (infoObject) {
         info.push(infoObject);
       }
    });
  });
  return info;
});
};

module.exports = fireGrabber;
