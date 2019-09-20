const imageRecognition = require("ibm-watson/visual-recognition/v3");
const visualRecognition = new imageRecognition({
  version: "2019-09-17",
  iam_apikey: "KZr3YqhhYzxaRStsv66t1srTpJ0s7MccoK4LYksFbe-L",
  url: "https://gateway.watsonplatform.net/visual-recognition/api"
});
var classifier_ids = ["DefaultCustomModel_1782870859"];


module.exports = {visualRecognition, classifier_ids} 

