const User = require("../models/User");
//Giriş yapmadan link üzerinden dashboard gibi sayfalara gitmek isterse bu middleware sayesinde erişimini engelledik ve login sayfasına yönlendirildi.
module.exports = (req, res, next) => {
  User.findById(req.session.userID, (err, user) => {
    if (err || !user) return res.redirect("/login");
    next();
  });
};
