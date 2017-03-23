'use strict';
var expect = require('chai').expect;
var fireGrabber = require('../index');
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyCpeVYacp1MC_k59n3QNxOdyh_ataXmvbY",
  authDomain: "test-app-47d63.firebaseapp.com",
  databaseURL: "https://test-app-47d63.firebaseio.com",
      }
describe('fireGrabber', function() {
  it('initialize should return a firebase app', function() {
    fireGrabber.initialize(config);
    expect(firebase.app()).to.be.a('object');
  });
});
