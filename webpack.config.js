var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); 
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, './public'),    
       publicPath: '/public/',
       filename: "[name].js"       
   },
   devServer: {
     historyApiFallback: true,
   },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   
           {
               test: /\.ts$/, 
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            },
            {
              test: /\.html$/,
              use: [ "html-loader" ]
            },
            {
                test:/\.css$/,
                use:['to-string-loader','style-loader','css-loader']
            }
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), 
      {} 
    ),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'polyfills']
      }),
    new UglifyJSPlugin()
  ]
}