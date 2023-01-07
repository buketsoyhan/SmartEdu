const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");

const app = express();
const port = 3000;

//DB bağlantısı
mongoose
  .connect("mongodb://localhost/smartedu-db")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.error("Connect failure");
  });

//EJS template engine kullanılcağı belirtildi.
app.set("view engine", "ejs");

//Middlewares -Statik dosyaların nerde olduğu gösterildi.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//Router dosyasında gerekli yönlendirmeler eklendi.
app.use("/", pageRoute);
app.use("/courses", courseRoute);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
