import { AppContext } from "..";
import { languages, continents } from "../db";

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

//   Country: {
//     continent: (parent, args, context, info) => {
//       return context.db.continents.find(
//         (continent) => continent.name === parent.continentName
//       ); // This would be your database query
//     },
//     languages: (parent, args, context, info) => {
//       return parent.languageNames.map((languageName) =>
//         context.db.languages.find((language) => language.name === languageName)
//       ); // This would be your database query
//     },
//   },

//   Language: {
//     countries: (parent, args, context, info) => {
//       return context.db.countries.filter((country) =>
//         country.languageNames.includes(parent.name)
//       ); // This would be your database query
//     },
//   },
// };
