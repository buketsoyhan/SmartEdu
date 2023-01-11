//Giriş yapan kullanıcının login ve register sayfasına gitmek istediğinde engellenir ve ana sayfaya yönlendirilir.
module.exports = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect("/");
  }
  next();
};
