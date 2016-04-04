module.exports = {
  entry: './src.js',
  output: {
    filename: 'dist.js',
    path: './'
  },
  alias: {
    'enzyme': 'enzyme/src',
    'react-compat': __dirname + '/react-compat-conditional.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json'},
    ]
  }
}
