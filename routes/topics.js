var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');




router.get('/', function(req, res, next) {
    Models.Topic.findAll().then(function(topics) {
        res.json(topics);
    })
});


router.get('/:id', function(req, res, next) {
  var topicId = req.params.id;
  Models.Topic.findOne(topicId)
            .then(function(topic) {
                res.json(topic);
              })
});


router.post('/', function(req, res, next) {
  var topicToAdd = req.body;
  Models.Topic.create({name:topicToAdd.name,description:topicToAdd.description})
            .then(function(topic) {
                res.json(topic);
            })
});


router.post('/:id/message', function(req, res, next) {
  var topicId = req.params.id;
  // ...tämä viesti (Vinkki: lisää ensin messageToAdd-objektiin kenttä TopicId, jonka arvo on topicId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
  var messageToAdd = req.body;
  messageToAdd.topicId = topicId;
  console.log(messageToAdd)
    Models.Topic.create(messageToAdd)
                .then(function(message) {
                    res.json(message)
                })
});

module.exports = router;
