const express = require("express");
const app = express();
const hbs = require("hbs");
const publicPath = `C:/Users/neran/Desktop/WebDevelopment/Nodejs/Project2/public`;
const port = process.env.PORT || 3000;
const viewsPath = `C:/Users/neran/Desktop/WebDevelopment/Nodejs/Project2/templates/views`;
const partialsPath = `C:/Users/neran/Desktop/WebDevelopment/Nodejs/Project2/templates/partials`;
//public static path
app.use(express.static(publicPath));

//template engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

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
