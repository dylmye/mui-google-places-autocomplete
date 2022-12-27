const fs = require('fs');
const pkg = require('../package.json');

(async () => {
  fs.copyFileSync('LICENSE', './lib/LICENSE');
  fs.copyFileSync('README.md', './lib/README.md');
  fs.writeFileSync('./lib/package.json', JSON.stringify({ ...pkg }, null, 2));
})();
