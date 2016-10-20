import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../config/webpack.config.js';

function bundle() {
    return new Promise((resolve, reject) => {
        Webpack(webpackConfig).run((err, status) => {
            console.log("Bundling files");

            if (err) {
            	console.log(err);
                return reject(err);
            }
            resolve();
        });
    });
}

export default bundle;
