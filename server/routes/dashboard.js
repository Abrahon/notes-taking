const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard',dashboardController.dashboard);
// router.get('/dashboard', (req, res) => {
//     res.status(dashboard).render("index")
//   });

module.exports = router;