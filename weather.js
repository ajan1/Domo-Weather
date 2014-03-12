  var Domo, domo;
  Domo = require('domo-kun')
  var request = require('request');

  domo = new Domo({
    nick: 'Saamies',
    userName: 'Saamies',
    realName: 'Saamies',
    address: 'irc.quakenet.org',
    channels: ['#h4x3d'],
    users: [
    {
      username: 'lauri',
      password: 'lol'
    }
    ],
    debug: true
  });

  domo.route('!weather :city', function(res) {
    var kaupunki = res.params.city;

    var response = request.get('http://api.openweathermap.org/data/2.5/weather?q=' + kaupunki + ',FI&units=metric&lang=fi', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        response = JSON.parse(body);
        var saa = (response.main.temp);
      }
    });

    this.say(res.channel, 'Sää ' + kaupunki  + ': ' + saa + 'c');
  });

  domo.connect();