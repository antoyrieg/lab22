var express = require('express');
var app = express();
var lyrics = ["9-5 just to stay alive", "I don\'t bother with these girls, don\'t let these girls bother me", "A diva is a female version of a hustler", "What\'s worse: looking jealous or crazy?", "I am the dragon breathing fire", "Imma keep running \'cause a winner don't quit on themselves", "Some call it arrogant, I call it confident", "I sneezed on the beat and the beat got sicker"];

// app.use(express.static(__dirname + "/public"));

app.get('/api/random-lyric', function (req, res) {
  res.send(lyrics[Math.floor(Math.random()*8)]);
});

app.get('/api/lyrics', function (req, res) {
  res.json(lyrics);
});

// Start the server.
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
