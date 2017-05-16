//to be removed upon webpack fix
const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve('./app/temp/scripts'),
    filename: "App.js"
  },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                  presets: ['es2015']  
                },
                test:/\.js$/,
                exclude: /node_modules/ 
            }
        ]
    }
}
