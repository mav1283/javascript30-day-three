const path = require('path');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
       
      },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    // {loader: 'file-loader'},
                    {loader:'url-loader',
                    options: {
                        mimetype: 'image/jpg',
                        fallback: 'file-loader',
                        quality: 65
                    }}
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //       mozjpeg: {
                    //         progressive: true,
                    //         quality: 65
                    //       },
                    //       // optipng.enabled: false will disable optipng
                    //       optipng: {
                    //         enabled: false,
                    //       },
                    //       pngquant: {
                    //         quality: '65-90',
                    //         speed: 4
                    //       },
                    //       gifsicle: {
                    //         interlaced: false,
                    //       },
                    //       // the webp option will enable WEBP
                    //       webp: {
                    //         quality: 75
                    //       }
                    //     }
                    // } 
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "styles.css"
        })
      ]
}