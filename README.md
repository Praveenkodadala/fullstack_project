# fullstack_project



$ npm install --save-dev babel-cli babel-preset-react
    > Now we’re ready to transform App.jsx into pure JavaScript. Do this:
$ node_modules/.bin/babel src --presets react --out-dir static

src -> App.jsx    static->App.js(eampty), index.html

 node server uses static folder   app.use(express.static('static'))

 "scripts": {
    "compile": "babel src --presets react --out-dir static",
     "start":"nodemon server.js"
  },

=>  **npm run compile** 

> babel src --presets react --out-dir static
src\App.jsx -> static\App.js

=> node server.js  (check server port for static files)

webpack:
npm install webpack webpack-cli --save-dev
https://webpack.js.org/guides/getting-started/

create "distribution" code (./dist)
iput file : static/App.js
output file : dist/app.bundle.js

./dist/app.bundle.js(app.bundle.js automatic generated file after inserting <script src="app.bundle.js"></script> in html)
.dist/index.html

=> run $ npx webpack      
[webpack-cli] Compilation finished

create webpack.config.js
const path = require('path');

module.exports = {
  entry: './static/App.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

=> run $ npx webpack --config webpack.config.js

set package.json  -- "build": "webpack"

=> run **npm run build**
 
 And then npm start  (node /server/server.js);











