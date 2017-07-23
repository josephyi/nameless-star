import Alexa from 'alexa-sdk';

const launchRequestHandler = function() {
  this.emit(':tell', 'Hello. This is a template. Make something cool!');
}

const handlers = {
  "LaunchRequest" : launchRequestHandler
}

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
}
