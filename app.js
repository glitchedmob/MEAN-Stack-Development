
require ("./instantHello");
var goodbye = require ("./talk/goodbye.js");
var talk = require("./talk");
var question = require('./talk/question');

talk.intro();
talk.hello("Levi");

var answer = question.ask("What is the meaning of life?");
console.log(answer);

goodbye();