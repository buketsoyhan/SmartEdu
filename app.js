const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require('./routes/userRoute')

const app = express();
const port = 3000;

//DB bağlantısı
mongoose
  .connect("mongodb://localhost/smartedu-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.error("Connect failure");
  });

//EJS template engine kullanılcağı belirtildi.
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
//Middlewares -Statik dosyaların nerde olduğu gösterildi.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Router dosyasında gerekli yönlendirmeler eklendi.
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
