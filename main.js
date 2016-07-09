import expressGraphQL from 'express-graphql';
import express from 'express';
import schema from './data/schema';

const app = express();

app.use('/graphql', expressGraphQL({schema: schema, pretty: true}))
	.listen(3000);

console.log('graphql server running on http://localhost:3000/graphql');