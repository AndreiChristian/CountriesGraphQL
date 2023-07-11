import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typedefs } from "./schema";
import { resolvers } from "./resolvers";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";

const prisma = new PrismaClient();
export interface AppContext {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation,
    DefaultArgs
  >;
}

const server = new ApolloServer<AppContext>({
  typeDefs: typedefs,
  resolvers: resolvers,
  plugins: [
    ApolloServerPluginLandingPageProductionDefault({
      graphRef: "my-graph-id@my-graph-variant",
      footer: false,
    }),
  ],
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async () => ({
      prisma: prisma,
    }),
    listen: {
      port: +process.env.PORT || 3000,
      host: "0.0.0.0",
    },
  });
  return url;
};

startServer()
  .then((url) => console.log(`🚀  Server ready at: ${url}`))
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
