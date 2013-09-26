var Domo, domo;

Domo = require('domo-kun');

domo = new Domo({
  nick: 'Domotus',
  userName: 'Domotus',
  realName: 'Domotus',
  address: 'irc.freenode.org',
  channels: ['#domo-kun'],
  users: [
    {
      username: 'riku',
      password: 'admin'
    }
  ],
  debug: true
});

domo.connect();