import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: './build/main.js',
  format: 'cjs',
  plugins: [ json(), babel(), uglify() ],
  dest: './build/bundle.js'
}
