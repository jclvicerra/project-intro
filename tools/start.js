import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../config/webpack.config.js';
import cp from 'child_process';

let nodeServer;
async function start() {
    await new Promise(resolve => {

        //we will run the webpack dev server in our entry client.js
        const bundler = Webpack(webpackConfig);
        const serverBundler = Webpack(webpackConfig[1]);
        
        const devServer = new WebpackDevServer(bundler, {
            publicPath: webpackConfig[0].output.publicPath,
            //hot: true,
            inline: true,
            stats: {
                colors: true
            },
        });

        devServer.listen(8080, 'localhost', ()=> {
             console.log("Webpack Dev Server is Listening in port 8080");
        });

        bundler.plugin('done', () => {
            serverBundler.run((err, status)=>{
                console.log("Bundling Server files");

                if (err) {
                    console.log(err);
                }
             });
        });
        serverBundler.plugin('done', () => handleServerBundleComplete());
    })
}

function handleServerBundleComplete() {
    console.log("Done Bundling Server Files");
    console.log("Starting Server");

    if (nodeServer) {
        nodeServer.kill('SIGTERM');
    }
    nodeServer = cp.spawn('node', ['./build/server.js']);

    nodeServer.stdout.on('data', (data) => {
        console.log("out: " + data);
    });

    nodeServer.stderr.on('data', (data) => {
        console.log("error: " + data);
    });
}
export default start;
