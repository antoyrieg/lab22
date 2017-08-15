var express = require('express');
var app = express();
var lyrics = [
  {
    quote:"Working a 9-5 just to stay alive",
    img: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif"
  },
  {
    quote: "I don't bother with these girls, don't let these girls bother me",
    img: "https://media.giphy.com/media/l2Sq5ljS1tjmw6xOg/giphy.gif"
  },
  {
    quote:  "A diva is a female version of a hustler",
    img: "https://media.giphy.com/media/xThuWhoaNyNBjTGERa/giphy.gif"
  },
  {
    quote: "What's worse: looking jealous or crazy?",
    img: "https://media.giphy.com/media/5rrkafIbeVs5y/giphy.gif"
  },
  {
    quote: "I am the dragon breathing fire",
    img: "https://media.giphy.com/media/3o7abB4gocBRFZoZdS/giphy.gif"
  },
  {
    quote: "Imma keep running 'cause a winner don't quit on themselves",
    img: "https://media.giphy.com/media/l4JyJUhL2X9a2dV7O/giphy.gif"
  },
  {
    quote:"Some call it arrogant, I call it confident",
    img: "https://media.giphy.com/media/JAsKtsJvzpd8k/giphy.gif"
  },
  {
    quote: "I sneezed on the beat and the beat got sicker",
    img: "https://media.giphy.com/media/3rqFQ8BGVw9hK/giphy.gif"
  },
  {
    quote: "Mad cause I'm cuter than the girl that's with ya",
    img: "https://media.giphy.com/media/lys30FNPl7vBm/giphy.gif"
  },
  {
    quote: "Don't hate me cause I'm beautiful",
    img:"https://media.giphy.com/media/141QB2JnsW5WbS/giphy.gif"
  }
];

app.use(express.static(__dirname + "/public"));

app.get('/api/random-lyric', function (req, res) {
  res.send(lyrics[Math.floor(Math.random()*10)]);
});

app.get('/api/lyrics', function (req, res) {
  res.json(lyrics);
});

// Start the server.
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
