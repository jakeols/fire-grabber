'use strict';
var expect = require('chai').expect;
var fireGrabber = require('../index');
var firebase = require('firebase');

// test config
var config = {
  apiKey: "AIzaSyCpeVYacp1MC_k59n3QNxOdyh_ataXmvbY",
  authDomain: "test-app-47d63.firebaseapp.com",
  databaseURL: "https://test-app-47d63.firebaseio.com",
      }
var testArray = [10,20,30];
var testNode = '/users';
var secondTestNode = '/teams';

// test setup
describe('fireGrabber', function() {
  it('firegrabber should be an object', function() {
    expect(fireGrabber).to.be.a('object');
  });

  // test initializer
  it('initialize should return a firebase app', function() {
    fireGrabber.initialize(config);
    expect(firebase.app()).to.be.a('object');
  });


  // test array retrieval
  it('returns data when an array is passed', function() {
    // expect(fireGrabber.retrieveWithArr(testNode, testArray)).to.be.a('promise');
    fireGrabber.retrieveWithArr(testNode, testArray).then((data) => {
      expect(data).to.be.a('array');
    });
  });

  // test retrieve with nodes
  it('returns data when nodes are passed', function() {
    fireGrabber.retrieve(testNode, secondTestNode).then((data) => {
      expect(data).to.be.a('array');
    })
  })
});
