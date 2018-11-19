var express = require('express');
var router = express.Router();
var scoresCtrl = require('../../controllers/scores');

// TODO: Protect these routes with custom middleware
router.get('/', scoresCtrl.highScores);
router.post('/', scoresCtrl.create);

module.exports = router;