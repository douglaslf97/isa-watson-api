const Router = require("express").Router;
const multer = require('../config/multerConfig');
const vsc = require("../visual-recognition");
const routes = Router();
const api = require("../services/api");
routes.post("/", multer.single('file'), (req, res) => {
  const file = req.file; 
  if (file) {
    const params = {
      collectionIds: vsc.classifier_ids,
      imagesFile: [{
        data: file.buffer,
        contentType: file.encoding
      }],
      features: ['objects']
    };
    vsc.visualRecognition.analyze(params).then(response=>{
      const { result } = response;
      res.send({result})
    }).catch(error=>{
      res.send({error})
    })
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
