import expressGraphQL from 'express-graphql';
import express from 'express';
import schema from './data/schema';
import { port } from './config';

const app = express();

app.use('/graphql', expressGraphQL({schema: schema, pretty: true}))
	.listen(port);

console.log('graphql server running on http://localhost:3000/graphql');