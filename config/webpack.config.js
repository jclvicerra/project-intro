import path from 'path';
import extend from 'extend';
import nodeExternals from 'webpack-node-externals';

//Our base config for client and server
const baseConfig = {
    context: path.resolve(__dirname, '..', 'app'),
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        publicPath: '/build/'
    },
     module: {   
        loaders: [{
            test: /.js?$/,
            loader: 'babel',
            include: [
                path.resolve(__dirname, '../app'),
            ],
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
        root: path.resolve(__dirname, '..', 'app'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
    }
};

const clientConfig = extend(true, {}, baseConfig, {
    entry:  './client.js',
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
    target: 'node',
    externals: [nodeExternals()],
})

export default [clientConfig, serverConfig];
