const MediaQueryPlugin = require('media-query-plugin');
module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            MediaQueryPlugin.loader,
            'postcss-loader',             
             "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ["file-loader"]
        }
      ]
    }
  };


  const MediaQueryPlugin = require('./plugins/media-query-plugin');

module.exports = {
    plugins: [
        new MediaQueryPlugin({
            include: [
                'example'
            ],
            queries: {
                'print, screen and (min-width: 75em)': 'desktop'
            }
        })
    ]
};

import './banner.css';

if (window.innerWidth >= 960) {
    import(/* webpackChunkName: 'example-desktop' */ './banner.css');
}