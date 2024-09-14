// sitemap-generator.js

const Sitemap = require('react-router-sitemap').default;
const router = require('./src/App.js').default;

const generateSitemap = () => (
  new Sitemap(router)
    .build('https://amoghphadnis.github.io/Amogh-Phadnis-Portfolio/#')
    .save('./public/sitemap.xml')
);

generateSitemap();
