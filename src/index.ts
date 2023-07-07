import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const typedefs = `#graphql

    type Book {
        title: String
        author:String
    }

    type Query{
    books: [Book]
    }

`;

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
