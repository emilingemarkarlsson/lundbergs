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
exports.produktemil = (req, res) => {
  res.render('produktemil', {
    title: 'produktemil'
  });
};
exports.inkastbank = (req, res) => {
  res.render('inkastbank', {
    title: 'Inkastbank med kvarn'
  });
};
exports.mindreverksamheter = (req, res) => {
  res.render('mindreverksamheter', {
    title: 'mindreverksamheter'
  });
};
exports.vaccumsystemmedlagringstank = (req, res) => {
  res.render('vaccumsystemmedlagringstank', {
    title: 'Vaccumsystem med lagringstank'
  });
};
