const Router = require("express").Router;
const multer = require("./config/multerConfig");
const fs = require("fs");
const vsc = require("./visual-recognition");
require("dotenv").config();
const routes = Router();
const path = require("path");

routes.post("/", (req, res) => {
  const { image_url } = req.body.image_url;
  if (image_url) {
    const params = {
      classifier_ids
    };
    params.url = image_url;
    vsc.classify(vsc.params, (error, response) => {
      if (error) res.send({ error });
      res.send({ response });
    });
  } else {
    res.json({ msg: "Nenhuma imagem processada!" });
  }
});

module.exports = routes;
