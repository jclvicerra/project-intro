import path from 'path';
import extend from 'extend';

//Our base config for client and server
const baseConfig = {
    context: path.resolve(__dirname, '..', 'app'),
    output: {
        path: '/build',
        publicPath: '/build'
    },
     module: {   
        loaders: [{
            test: /.js?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'stage-2']
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }] 
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
};

const clientConfig = extend(true, {}, baseConfig, {
    entry: [
        //For hot style updates
        'webpack/hot/dev-server',
        // The script refreshing the browser on none hot updates
        'webpack-dev-server/client?http://localhost:8080',
        //Our application
        './client.js'
    ],
    output: {
        filename: 'client.js'
    },
    target: 'web'
});

const serverConfig = extend(true, {}, baseConfig, {
    entry: './server.js',
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
    },
    target: 'node'
})

export default [clientConfig, serverConfig];
