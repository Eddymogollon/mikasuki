const express = require('express');
const router = express.Router();

// Index
router.get('/', function(req, res) {
	console.log(`It is alive!`);
    res.render('index');
});

router.get('/presentation', function(req, res) {
	res.redirect('https://docs.google.com/presentation/d/1Gb4APUw2QSmSP9Fu8L2g8jS0Iyw46FMABwIdOBGL18g/');
});

// Handle 404 - Keep this as a last route
router.use(function(req, res, next) {
    res.status(400);
    res.send('404: Page Not Found');
});

module.exports = router;