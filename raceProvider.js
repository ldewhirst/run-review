// var db = require('mongodb').db;
// var Connection = require('mongodb').Connection;
// var Server = require('mongodb').Server;
// var BSON = require('mongodb').BSON;
// var ObjectID = require('mongodb').ObjectID;
//
// RaceProvider = function(host, port) {
//   this.db = new db('node-mongo-races', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
//   this.db.open(function(){});
// };
//
// RaceProvider.prototype.getCollection = function(callback) {
//   this.db.collection('races', function(error, race_collection) {
//     if(error) {
//       callback(error);
//     } else {
//       callback(null, race_collection);
//     }
//   });
// };
//
// //find all races
// RaceProvider.prototype.findAll = function(callback) {
//   this.getCollection(function(error, race_collection) {
//     if(error) {
//       callback(error);
//     } else {
//       race_collection.find().toArray(function(error, results) {
//         if(error) {
//           callback(error);
//         } else {
//           callback(null, results);
//         }
//       });
//     }
//   });
// };
//
// //save new race
// RaceProvider.prototype.save = function(races, callback) {
//   this.getCollection(function(error, race_collection) {
//     if(error) {
//       callback(error);
//     } else {
//       if(typeof(races.length) == 'undefined') {
//         races = [races];
//       }
//
//       for(var i = 0; i < races.length; i++) {
//         race = races[i];
//         race.created_at = new Date();
//       }
//
//       race_collection.insert(races, function() {
//         callback(null, races);
//       });
//     }
//   });
// };
//
// exports.RaceProvider = RaceProvider;
