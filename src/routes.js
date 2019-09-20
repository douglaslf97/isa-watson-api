const Router = require("express").Router;
const multer = require("./config/multerConfig");
const fs = require("fs");
const vsc = require("./visual-recognition");
require("dotenv").config();
const routes = Router();
const path = require("path");

routes.post("/", (req, res) => {
  const { image_url } = req.body;
  if (image_url) {
    const params = {
      classifier_ids: vsc.classifier_ids,
      url: image_url
    };  
    vsc.visualRecognition.classify(params, (error, response) => {
      if (error) res.send({ error });
      res.send({ response });
    });
  } else {
    res.json({ msg: "Nenhuma imagem processada!" });
  }
});

module.exports = routes;
