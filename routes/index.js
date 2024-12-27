const express = require('express');
const router = express.Router();
const Link = require('../models/link')

router.get('/', (req, res, next) => {
  res.render('index', { title: 'summarize' });
});

function generateCode() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
router.post('/new', async (req, res, next) => {
  const url = req.body.url;
  const code = generateCode();

  const resultado = await Link.create({
    url,
    code
  })
 
  res.render('stats',resultado.dataValues);
})
 

module.exports = router;
