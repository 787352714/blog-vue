let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCss = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    devServer:{
        port:3000,
        progress:true,
        contentBase:'./dist'
    },
    mode:'development',
    entry:'./src/main/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/main/index.html',
            filename:'index.html'
        }),
        new MiniCss({
            filename:'main.css'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
                {
                    test: /\.css$/,
                    use:[MiniCss.loader,'css-loader']
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                  },
                  {
                    test: /\.js$/,
                    use:{
                        loader:'babel-loader',
                    } ,
                    exclude:/node_modules/,
                  },
                  {
                      test:/\.(png|svg|jpg|gif|woff|woff2|svg|eot|ttf)$/,
                      use:'url-loader'
                  },
                  {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                  }
            
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
}