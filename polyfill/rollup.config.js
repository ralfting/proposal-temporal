import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { env } from 'process';

const libName = 'temporal';

const config = {
  input: 'lib/index.mjs',
  output: [
    { name: libName, file: './dist/index.js', format: 'cjs', sourcemap: true },
    { name: libName, file: './dist/index.umd.js', format: 'umd', sourcemap: true }
  ],
  plugins: [
    commonjs(),
    resolve({ preferBuiltins: false }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            corejs: 3,
            useBuiltIns: 'entry',
            targets: '> 0.25%, not dead'
          }
        ]
      ]
    })
  ]
};

if (env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;
