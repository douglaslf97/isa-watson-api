const Router = require("express").Router;
const multer = require('./config/multerConfig');
const vsc = require("./visual-recognition");
const routes = Router();
const api = require("./services/api");
routes.post("/", multer.single('file'), (req, res) => {
  const file = req.file; 
  if (file) {
    const params = {
      classifier_ids: vsc.classifier_ids,
      images_file: file.buffer
    };
    vsc.visualRecognition.classify(params, (error, response) => {
      if (error) res.send({ error });
      res.send({ response });
    });
  } else {
    res.json({ msg: "Nenhuma imagem processada!" });
  }
});
routes.get("/tester", (req, res) => {
 
  api
    .post(
      "/",
      {
        classifier_ids: vsc.classifier_ids,
        url: "https://previews.123rf.com/images/dionisvera/dionisvera1401/dionisvera140100013/25407148-ripe-apple-with-leaf.jpg"
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Basic " + "KZr3YqhhYzxaRStsv66t1srTpJ0s7MccoK4LYksFbe-L"
        }
      }
    )
    .then(response => {
      res.send({ response });
    })
    .catch(error => {
      res.send({ error });
    });
});
module.exports = app => app.use("/visual-recognition", routes);
