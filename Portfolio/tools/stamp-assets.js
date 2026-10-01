// Adds ?v=<content hash> to local CSS/JS links in the HTML pages,
// so browsers download a file again only after it has changed.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.join(__dirname, '..');
const pages = ['index.html', 'works.html'];
const assetLink = /((?:href|src)=")((?:css|js)\/[^"?\s]+)(?:\?v=[0-9a-f]+)?\s*(")/g;

for (const page of pages) {
    const file = path.join(root, page);
    const html = fs.readFileSync(file, 'utf8');
    const stamped = html.replace(assetLink, (match, before, asset, after) => {
        const content = fs.readFileSync(path.join(root, asset));
        const hash = crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
        return `${before}${asset}?v=${hash}${after}`;
    });
    if (stamped !== html) {
        fs.writeFileSync(file, stamped);
        console.log(`Updated asset versions in ${page}`);
    }
}
