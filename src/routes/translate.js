const Router = require("express").Router;
const routes = Router();
const translate = require('translate-google');
routes.post('/', (req, res)=>{
  const {text} = req.body;
  console.log(text)
  translate(text, {from: 'en', to: 'pt'}).then(response=>{
    res.status(200).json({text: response});
  }).catch(error=>{
    res.status(400).send({error})
  })
});

module.exports = app => app.use('/translate', routes);