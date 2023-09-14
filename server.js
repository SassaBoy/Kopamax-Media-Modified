const express = require("express");
const app = express();
const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");
const partnersRoutes = require("./routes/partners");
const useWorkRoutes = require('./routes/useWorkRoutes');
app.use(express.json());


app.set("view engine", "ejs");
//Static Folder
app.use(express.static('public'));

app.use("/", mainRoutes);
app.use('/partners', partnersRoutes);
app.use('/work', useWorkRoutes);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/settings', (req, res) => {
  // Render the "partners.ejs" file
  res.render('settings');
});


app.get('/individual', (req, res)=>{
res.render('individual');
});

app.get('/admin', (req, res) => {
  res.render('admin'); // Render your dashboard.ejs template here
});

// GET route for managing partners
app.get('/partnersmanagement', (req, res) => {
  res.render('Manage'); // Render your Manage.ejs template here
});

// router.post('/partnersmanagement', (res, res)=>{

// });

// GET route for managing work
app.get('/workmanagement', (req, res) => {
  res.render('Work'); // Render your Work.ejs template here
});


app.get('/blog', (req, res)=>{
  res.render('Blog');
});

app.get('/privacy', (req, res)=>{
  res.render('privacy');
});
app.get('/terms', (req, res)=>{
  res.render('Terms');
});
app.get('/about', (req, res)=>{
  res.render('about');
})




//Server Running
app.listen(3000, () => {
  console.log("Server is running, you better catch it! ");

});
