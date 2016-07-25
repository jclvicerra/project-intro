import expressGraphQL from 'express-graphql';
import express from 'express';
import schema from './data/schema';
import { PORT } from './config';
import httpProxy from 'http-proxy';
import path from 'path';

const app = express();
const proxy = httpProxy.createProxyServer();
const publicPath = path.resolve(__dirname, 'public');

app.use('/graphql', expressGraphQL({ schema: schema, pretty: true }))
    .listen(PORT);

// app.get('/*', function(req, res) {
//     res.render("Jessie");

// });

app.use(express.static(publicPath));

// app.all('/build/*', (req, res) => {
//     proxy.web(req, res, {
//         target: 'http://localhost:8080'
//     });
// });

// proxy.on('error', (e) => {
//     console.log("Could not connect to proxy");
// });


// app.listen(PORT, function(argument) {
//     console.log("Server running on port " + PORT);
// })

console.log('graphql server running on http://localhost:3000/graphql');
