const path = require('path');
mode: 'development',
module.exports = {
  entry: './static/App.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};