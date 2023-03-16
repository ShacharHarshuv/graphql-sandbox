import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import { startStandaloneServer } from '@apollo/server/standalone';

console.log('Hello, world!'); // todo

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
})();
