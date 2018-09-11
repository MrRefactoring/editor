const path = require('path');

module.exports = env => {
  const ENV = process.env.NODE_ENV || 'development';
  const PORT = (env && env.port) || 9000;

  const config = {
    devServer: {
      port: PORT
    },
    entry: {
      app: './app/scripts/app.js'
    },
    context: path.resolve(__dirname, '.'),
    target: 'web',
    output: {
      path: path.resolve(path.join(__dirname, '/dist')),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: '/'
    },
    resolve: {
      extensions: [".js", ".coffee", ".scss", ".css", ".ttf"],
      alias: {
        assets: path.resolve(path.join(__dirname, './app/assets'))
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        },
        {
          test: /\.png/,
          use: ["url-loader?mimetype=image/png"]
        },
        {
          test: /\.ttf/,
          use: ["url-loader?mimetype=font/ttf"]
        }
      ]
    },
    plugins: []
  };

  return config;
};
