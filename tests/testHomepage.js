const server = require('../index.js');

module.exports = {
  'It show correct content': (browser) => {
  	browser
  	  .url('http://localhost:3001')
  	  .waitForElementVisible('body', 1000)
  	  .assert.containsText('#app', 'Hello')
  	  .pause(1000)
  	  .end(() => {
  	  	server.close();
  	  });
  }
};