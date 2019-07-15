const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');





module.exports = {
  entry: "./src/assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "assets/js/bundle.js",
    publicPath: ""
},

// in the configuration -> optimization
    devtool: 'source-map',
      optimization: {
        minimizer: [
          new UglifyJsPlugin(),
          new OptimizeCSSAssetsPlugin()
        ]
      },

//in the configuration -> plugins

// in the configuration -> module -> rules

module:{
    rules:[
        //babel
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
    


/* ], */




//style and css loader



{
    test: [/.css$|.scss$/],
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", {
      loader: 'postcss-loader',
      options: {
        plugins: () => [require('autoprefixer')({
          'browsers': ['> 1%', 'last 2 versions']
        })],
      }
    }]
  },


  {
        //file loader
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/'
        }
      }
    ]
},



//fonts
{
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts/',
        publicPath: '../fonts'
      }
    }]
  }
]},

  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/assets/scss'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@': path.resolve(__dirname, 'src')
    }
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: "Setting up webpack 4",
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
        filename: "assets/css/styles.css"
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['dist'] }
      })

    ],





};




   




