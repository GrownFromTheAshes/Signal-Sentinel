import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push(
  {
  test: /\.s[ac]ss$/i,
  use: [{ loader: 'style-loader',
          options: {
            attributes: {
              nonce: 'devModeOnly' // Sets a fixed nonce for development mode. Not used in production.
            }
          }
         }, { loader: 'css-loader' }, {loader: 'sass-loader'}],
  },
  {
    // CSS Testing included to handle css files from @fontsource.
    test: /\.css$/,
    use: [{ loader: 'style-loader'}, { loader: 'css-loader' }]
  }
);

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.css',
      '.scss',
      '.sass',
      '.json'
  ],
  },
  // Slowest option for build and rebuild times, but gives us easy to read source maps. 
  // Also, we can't use 'eval' because although it's the fastest, 'eval' is blocked by the Content Security Policy.
  devtool: 'source-map' 
};
