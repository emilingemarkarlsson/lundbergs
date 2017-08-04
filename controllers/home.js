/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
exports.produkter = (req, res) => {
  res.render('produkter', {
    title: 'produkter'
  });
};
