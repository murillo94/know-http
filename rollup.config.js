import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

const outputDir = './public/js/';
const watchDir = './src/**';
const env = process.env.BUILD;

const plugins = [
  clear({
    targets: [`${outputDir}esm`, `${outputDir}system`],
    watch: true
  }),
  nodeResolve({
    jsnext: true,
    browser: true,
    preferBuiltins: false
  }),
  replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
  url(),
  json(),
  commonjs({ include: 'node_modules/**' }),
  postcss({
    minimize: env === 'production',
    plugins: [autoprefixer]
  }),
  babel({ exclude: 'node_modules/**' })
];

if (env === 'development') {
  plugins.push(serve());
  plugins.push(livereload(watchDir));
}

if (env === 'production') {
  plugins.push(terser());
}

export default {
  input: ['./src/js/index.js'],
  output: [
    {
      dir: `${outputDir}system/`,
      format: 'system'
    },
    {
      dir: `${outputDir}esm/`,
      format: 'esm'
    }
  ],
  watch: {
    include: [watchDir]
  },
  plugins
};
