const express = require("express");
const path=require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

//public static path
app.use(express.static(path.join(__dirname, '../public')));

//template engine
app.set("views", path.join(__dirname, '../templates/views'));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
    res.statusCode=404;
    res.render("404", {
    errorMsg:"Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`i am listening.....${port}`);
});
