const express = require('express');
const router = express.Router();

// GET route for the admin dashboard
router.get('/', (req, res) => {
  res.render('admin'); // Render your dashboard.ejs template here
});

// GET route for managing partners
router.get('/partnersmanagement', (req, res) => {
  res.render('Manage'); // Render your Manage.ejs template here
});

// router.post('/partnersmanagement', (res, res)=>{

// });

// GET route for managing work
router.get('/workmanagement', (req, res) => {
  res.render('Work'); // Render your Work.ejs template here
});
// router.post('/workmanagement', (res, res)=>{

// });

// Add more routes for other admin functionalities as needed

module.exports = router;
