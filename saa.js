var Domo, domo;
Domo = require('domo-kun')
var request = require('request');

domo = new Domo({
  nick: 'Domotus',
  userName: 'Domotus',
  realName: 'Domotus',
  address: 'irc.quakenet.org',
  channels: ['#lauritus'],
  users: [
    {
      username: 'lauri',
      password: 'lol'
    }
  ],
  debug: true
});


var saa;

var response = request.get('http://api.openweathermap.org/data/2.5/weather?q=Helsinki,FI&units=metric&lang=fi', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var response = JSON.parse(body);
    var saa = (response.main.temp);
  }
});



domo.route('!weather', function(res) {
	this.say(res.channel, 'Sää helsingissä: ' + saa);
});

domo.connect();