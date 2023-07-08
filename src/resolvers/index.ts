import { AppContext } from "../index";

export const resolvers = {
  Query: {
    languages: async (parent, args, contextValue: AppContext, info) => {
      const languages = await contextValue.prisma.language.findMany();
      return languages;
    },

    language: async (parent, args, contextValue: AppContext, info) => {
      const language = await contextValue.prisma.language.findUnique({
        where: {
          id: args.id,
        },
      });
      return language;
    },

    continent: (parent, args, contextValue: AppContext, info) => {
      const continent = contextValue.prisma.continent.findUnique({
        where: {
          id: args.id,
        },
      });

      return continent;
    },

    continents: async (parent, args, contextValue: AppContext, info) => {
      const continents = await contextValue.prisma.continent.findMany();
      return continents;
    },

    country: (parent, args, contextValue: AppContext, info) => {
      const country = contextValue.prisma.country.findUnique({
        where: {
          id: args.id,
        },
      });
      return country;
    },

    countries: async (parent, args, contextValue: AppContext, info) => {
      const country = await contextValue.prisma.country.findMany();
      return country;
    },
  },
  Country: {
    continent: async (parent, args, context: AppContext, info) => {
      const continent = await context.prisma.continent.findUnique({
        where: {
          id: parent.continentId,
        },
      });

      return continent;
    },
  },
  Continent: {
    countries: async (parent, args, context: AppContext, info) => {
      const countries = await context.prisma.country.findMany({
        where: {
          continentId: parent.id,
        },
      });

      return countries;
    },
  },
};
