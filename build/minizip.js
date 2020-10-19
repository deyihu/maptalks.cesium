const fs = require('fs');
const uglify = require('uglify-js').minify;
const name = 'yymap-cesium';
const dest = `dist/${name}.js`;
const code = fs.readFileSync(dest).toString('utf-8');
const u = uglify(code, {
    'output': {
        'ascii_only': true,
        'comments': /^!/
    }
});
const minified = u.code;
fs.writeFileSync('dist/' + name + '.min.js', minified);
