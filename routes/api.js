var express = require('express');
var router = express.Router();
var scoresCtrl = require('../controllers/scores');

router.post('/scores', scoresCtrl.create);
// use 'limit' querystring to limit num scores (20 is default)
router.get('/highscores', scoresCtrl.highScores);

module.exports = router;