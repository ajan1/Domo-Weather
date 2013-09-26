var request = require('request');
var saa = ("");
var response = request.get('http://api.openweathermap.org/data/2.5/weather?q=Helsinki,FI&units=metric&lang=fi', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var response = JSON.parse(body);
    var saa = (response.main.temp);
  }
});
