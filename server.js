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


app.use('/settings', (req, res) => {
  // Render the "partners.ejs" file
  res.render('settings');
});


app.use('/individual', (req, res)=>{
res.render('individual');
});

app.use('/admin', (req, res) => {
  res.render('admin'); // Render your dashboard.ejs template here
});

// GET route for managing partners
app.use('/partnersmanagement', (req, res) => {
  res.render('Manage'); // Render your Manage.ejs template here
});

// router.post('/partnersmanagement', (res, res)=>{

// });

// GET route for managing work
app.use('/workmanagement', (req, res) => {
  res.render('Work'); // Render your Work.ejs template here
});


app.use('/blog', (req, res)=>{
  res.render('Blog');
});

app.use('/privacy', (req, res)=>{
  res.render('Privacy');
});
app.use('/terms', (req, res)=>{
  res.render('Terms');
});
app.use('/about', (req, res)=>{
  res.render('about');
})




//Server Running
app.listen(3000, () => {
  console.log("Server is running, you better catch it! ");

});
