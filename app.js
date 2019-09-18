const express = require('express');

const imageRecognition = require('ibm-watson/visual-recognition/v3')
const visualRecognition = new imageRecognition({
  version: '2019-09-17',
  iam_apikey: "KZr3YqhhYzxaRStsv66t1srTpJ0s7MccoK4LYksFbe-L",
  url: "https://gateway.watsonplatform.net/visual-recognition/api",
})
const app = express();
/*
{
  "apikey": "KZr3YqhhYzxaRStsv66t1srTpJ0s7MccoK4LYksFbe-L",
  "iam_apikey_description": "Auto-generated for key 5ae7f74e-e5e2-4c32-b642-ae5b55791b4f",
  "iam_apikey_name": "e0d14ae0-b140-4000-a177-bf4179e559ad",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Writer",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c4957bbe94ef4eee8a4e2f2d39aa6190::serviceid:ServiceId-c4895632-787e-4bc8-8d1d-08c37413567f",
  "url": "https://gateway.watsonplatform.net/visual-recognition/api"
}
9ed7eddc-9308-47d0-9394-446f67cdacfe
DefaultCustomModel_1782870859
*/

app.use(express.json({}))
app.use(express.urlencoded({
  extended: true
}))
var classifier_ids = ["DefaultCustomModel_1782870859"];
var threshold = 0.6;
const params = {
  url: 'https://c8.alamy.com/comp/B2B900/an-unripe-apple-growing-on-an-apple-tree-B2B900.jpg',
  classifier_ids,
  threshold
}
app.get('/', (req, res)=>{
  const file= req.file;
  console.log(req.body);
  visualRecognition.classify(params, (error, response)=>{
    if(error)
      res.send({error})
    res.send({response})
  }) 
  
})
app.listen(process.env.PORT || 3000, ()=>{
  console.log('Running!');
})