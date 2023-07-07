import { languages } from "../db";

export const resolvers = {
  Query: {
    language: (parent, args, contextValue, info) => {
      return languages.find((l) => (l.id = args.id));
    },

    languages: () => {
      return languages;
    },
  },
};

// const resolver = {
//   Query: {
//     allCountries: (parent, args, context, info) => {
//       return context.db.countries; // This would be your database query
//     },
//     country: (parent, args, context, info) => {
//       return context.db.countries.find((country) => country.code === args.code); // This would be your database query
//     },
//     allContinents: (parent, args, context, info) => {
//       return context.db.continents; // This would be your database query
//     },
//     continent: (parent, args, context, info) => {
//       return context.db.continents.find(
//         (continent) => continent.name === args.name
//       ); // This would be your database query
//     },
//     allLanguages: (parent, args, context, info) => {
//       return context.db.languages; // This would be your database query
//     },
//     language: (parent, args, context, info) => {
//       return context.db.languages.find(
//         (language) => language.name === args.name
//       ); // This would be your database query
//     },
//   },
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
//   Continent: {
//     countries: (parent, args, context, info) => {
//       return context.db.countries.filter(
//         (country) => country.continentName === parent.name
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
