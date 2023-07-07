import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typedefs } from "./schema";
import { books } from "./db";

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  return url;
};

startServer().then((url) => console.log(`🚀  Server ready at: ${url}`));
