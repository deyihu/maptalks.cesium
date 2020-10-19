// Rollup plugins
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
const uglify = require('rollup-plugin-uglify').uglify;
import pkg from './package.json';


const product = process.env.NODE_ENV.trim() === 'prd';
const FILEMANE = (product ? 'yymap-cesium.min' : 'yymap-cesium');
// eslint-disable-next-line no-unneeded-ternary
const sourceMap = (product ? false : true);

const banner = `/*!\n * ${pkg.name} v${pkg.version}\n  * this is extends yymap(require yy.js) \n * build by Iverson.hu, more info concat me:hudy@yeyoo.cn\n */`;

const plugins = [
    json(),
    nodeResolve(),
    commonjs(),
    babel({
        // exclude: ['node_modules/**']
    })
];
if (product) {
    plugins.push(uglify());
}

export default {
    // eslint-disable-next-line no-path-concat
    input: __dirname + '/index.js',
    plugins: plugins,
    // sourceMap: true,
    external: ['yymap', 'cesium'],
    output: [
        {
            'format': 'umd',
            'name': 'YY',
            'file': `dist/${FILEMANE}.js`,
            'sourcemap': sourceMap,
            'extend': true,
            'banner': banner,
            'globals': {
                'yymap': 'YY',
                'cesium': 'Cesium'
            }
        },
        {
            'sourcemap': false,
            'format': 'es',
            // banner,
            'file': `dist/${FILEMANE}.es.js`,
            'extend': true,
            'banner': banner,
            'globals': {
                'yymap': 'YY',
                'cesium': 'Cesium'
            }
        }
    ]

};
