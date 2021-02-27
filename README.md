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

=>  npm run compile   

> babel src --presets react --out-dir static
src\App.jsx -> static\App.js

=> node server.js  (check server port for static files)






