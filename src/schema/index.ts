export const typedefs = `#graphql

    type Language {

        id: ID!
        name: String!

    }

    type Query{
        language(id:ID!):Language
        languages: [Language!]!
    }

`;

// `#graphql
// type Query {
//     allCountries: [Country]
//     country(code: String!): Country
//     allContinents: [Continent]
//     continent(name: String!): Continent
//     allLanguages: [Language]
//     language(name: String!): Language
// }

// type Country {
//     code: String
//     name: String
//     capital: String
//     population: Int
//     continent: Continent
//     languages: [Language]
// }

// type Continent {
//     code: String
//     name: String
//     countries: [Country]
// }

// type Language {
//     code: String
//     name: String
//     countries: [Country]
// }`;
