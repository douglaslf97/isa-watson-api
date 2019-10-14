const imageRecognition = require("ibm-watson/visual-recognition/v4");
const url = "https://gateway.watsonplatform.net/visual-recognition/api";
const { IamAuthenticator } = require('ibm-watson/auth');
const visualRecognition = new imageRecognition({
  version: "2019-09-17",
  authenticator: new IamAuthenticator({
    apikey: "KZr3YqhhYzxaRStsv66t1srTpJ0s7MccoK4LYksFbe-L"
  }), 
  url
});
var classifier_ids = ["9ed7eddc-9308-47d0-9394-446f67cdacfe"];


module.exports = {visualRecognition, classifier_ids, url} 

