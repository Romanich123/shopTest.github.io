const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
    return{
        mode: env.mode ?? 'development',
        entry: path.join(__dirname, 'src', 'main.js'),
        output: {
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'scss': [
                                'vue-style-loader',
                                'css-loader',
                                'sass-loader'
                            ],
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        ]
    }

}