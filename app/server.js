import expressGraphQL from 'express-graphql';
import express from 'express';
import schema from './data/schema';
import { PORT } from './config';
import httpProxy from 'http-proxy';
import path from 'path';
import firebase from 'firebase';

const app = express();
const proxy = httpProxy.createProxyServer();
const publicPath = path.resolve(__dirname, 'public');

app.use('/graphql', expressGraphQL({ schema: schema, pretty: true }))
    .listen(PORT);

const config = {
  apiKey: "AIzaSyDHauaFKx8tcOaNQedd75SRFSepPYiFEu0",
  authDomain: "https://sample-react-redux-firebase.firebaseapp.com",
  databaseURL: "https://sample-react-redux-firebase.firebaseio.com",
  storageBucket: "sample-react-redux-firebase.appspot.com",
};

firebase.initializeApp(config);

const rootRef = firebase.database().ref();
const Posts = firebase.database().ref().child('posts');

//app.set('view engine', 'html');

app.get('/*', function(req, res) {
     res.send("Hello World");
 });

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
//      console.log("Server running on port " + PORT);
// })

console.log('graphql server running on http://localhost:'+ PORT+'/graphql');

// Posts.on('value', snap => {
// 	console.log(snap.val());
// });

