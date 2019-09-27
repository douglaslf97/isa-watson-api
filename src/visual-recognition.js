const imageRecognition = require("ibm-watson/visual-recognition/v3");
const url = "https://gateway.watsonplatform.net/visual-recognition/api"
const visualRecognition = new imageRecognition({
  version: "2019-09-17",
  iam_apikey: "KZr3YqhhYzxaRStsv66t1srTpJ0s7MccoK4LYksFbe-L",
  url
});
var classifier_ids = ["DefaultCustomModel_610979111"];


module.exports = {visualRecognition, classifier_ids, url} 

