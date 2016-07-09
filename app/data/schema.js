import {
	GraphQLSchema as Schema,
	GraphQLObjectType as ObjectType,
	GraphQLID as ID,
	GraphQLString as StringType,
	GraphQLNonNull as NonNull
} from 'graphql';

const data = require('./data.json');

const userType = new ObjectType({
	name : 'User',
	fields: {
		id : {type: new NonNull(ID)},
		name : {type: StringType}
	}
});

const schema = new Schema({
	query : new ObjectType({
		name : 'Query',
		fields: {
			user: {
				type: userType,
				args: {
					id: {type: StringType}
				},
				resolve : function (_, args) {
					return data[args.id];
				}
			}
		}
	})
});

export default schema;