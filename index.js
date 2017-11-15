'use strict';
var firebase = require('firebase');

var fireGrabber = {
   initialize: function(config) {
    firebase.initializeApp(config);
  }
};

fireGrabber.retrieve = function (firstNode, secondNode) {
  return new Promise((resolve, reject) => {
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
     resolve(info);
  });
});
};

fireGrabber.retrieveWithArr = function(node, arr) {
  return new Promise((resolve, reject) => {
    this.node = node;
    this.arr = arr;
    var database = firebase.database();
    var info = [];
    this.arr.map(function(item) {
      database.ref(this.node).child(item).once('value').then(function(snapshot) {
        var infoObject = snapshot.val();
        if (infoObject) {
          info.push(infoObject);
        }
      });
    }, this);
    resolve(info);
  });


}

module.exports = fireGrabber;
