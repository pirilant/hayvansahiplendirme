const express = require('express');
const router = express.Router();
const Hayvansever = require("../models/hayvansever")
const Hayvan = require("../models/hayvan")
const Sahip = require("../models/sahip")
const hsController = require("../controllers/hsController")
const hyController = require("../controllers/hyController")
const sahipController = require("../controllers/sahipController")


router.get('/', async(req, res, next) => {
  let hayvan = await Hayvan.find({"durum":0})
  let hayvansever = await Hayvansever.find({ })
  let sahip = await Sahip.find({ })
  res.render('index', {
  	hy:hayvan,
  	hs:hayvansever,
  	sahip:sahip
  });
});

router.get('/hayvansever',hsController.list)
router.post('/hayvansever/ekle',hsController.insert)
router.get('/hayvanseversil/:id',hsController.delete)

router.get('/hayvan',hyController.list)
router.post('/hayvan/ekle',hyController.insert)
router.get('/hayvansil/:id',hyController.delete)

router.post('/sahiplendir',sahipController.sahiplendir)
router.get("/limitdisi",sahipController.limitdisi)


module.exports = router;
