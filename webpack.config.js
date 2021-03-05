const path = require('path');
mode: 'development',
module.exports = {
  entry: './static/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

};