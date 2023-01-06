const express = require("express");
const pageRoute = require("./routes/pageRoute");

const app = express();
const port = 3000;

//EJS template engine kullanılcağı belirtildi.
app.set("view engine", "ejs");

//Middlewares -Statik dosyaların nerde olduğu gösterildi.
app.use(express.static("public"));
//Router dosyasında gerekli yönlendirmeler eklendi.
app.use("/", pageRoute);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
