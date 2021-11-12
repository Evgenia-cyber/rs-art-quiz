const path = require('path'); // подключаем системную библиотеку path

// по дефолту webpack умеет обрабатывать js файлы. Для html, сss нужны плагины
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // стартовая точка, где хранится код приложения
  output: {
    // при выполнении команды "npm run build" сюда webpack будет складывать файлы
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  mode: 'development',
  module: {
    // описываем, какими правилами должен пользоваться webpack,чтобы прочитать файл
    // с указанным расширением
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: false } }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // create `style` nodes from JS strings
          'style-loader',
          // translate CSS into CommonJS
          'css-loader',
          // compiles Sass to CSS
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // этот scss файл будет общим для всех других scss
              resources: ['src/styles/vars.scss', 'src/styles/mixins.scss'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // местонахождение шаблона
      filename: './index.html', // куда положить build-версию
    }),
  ],
  optimization: {
    minimize: true, // минимизирует js код в main.js
  },
  devServer: {
    // настройки для webpack-dev-server
    compress: true,
    port: 3000,
  },
};
