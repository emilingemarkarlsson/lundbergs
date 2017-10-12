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
exports.stationara = (req, res) => {
  res.render('stationara', {
    title: 'Stationara'
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
exports.Vakuumsystemmedlagringstank = (req, res) => {
  res.render('Vakuumsystemmedlagringstank', {
    title: 'Vaccumsystem med lagringstank'
  });
};
exports.vataavfall = (req, res) => {
  res.render('vataavfall', {
    title: 'Våta avfall'
  });
};
exports.karlvandare = (req, res) => {
  res.render('karlvandare', {
    title: 'Kärlvandare'
  });
};
exports.mobila = (req, res) => {
  res.render('mobila', {
    title: 'Mobila'
  });
};
exports.containers = (req, res) => {
  res.render('containers', {
    title: 'Containers'
  });
};
exports.balpressar = (req, res) => {
  res.render('balpressar', {
    title: 'Balpressar'
  });
};
