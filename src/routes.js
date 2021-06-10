const routes = [
  {
    path: '/',
    component: 'pages/Home/Home',
  },
  {
    path: '/work/:id',
    component: 'pages/Work/Work',
  },
  {
    path: '/contact',
    component: 'pages/Contact/Contact',
  },
  {
    path: '/about',
    component: 'pages/About/About',
  },
];

const generateRoutes = function () {
  let generatedRoutes = routes;

  // Add the wildcard route at the end to redirect to 404 page.
  generatedRoutes.push({
    path: '*',
    component: 'pages/NotFound',
  });

  return generatedRoutes;
};

module.exports = generateRoutes();
