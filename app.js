const express = require("express");

const app = express();
const port = 3000;

//EJS template engine kullanılcağı belirtildi.
app.set("view engine", "ejs");

//Middlewares -Statik dosyaların nerde olduğu gösterildi.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
});

app.get("/courses", (req, res) => {
  res.status(200).render("courses", {
    page_name: "courses",
  });
});

app.get("/dashboard", (req, res) => {
  res.status(200).render("dashboard", {
    page_name: "dashboard",
  });
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
