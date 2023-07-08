export const typedefs = `#graphql

    type Query{

        continent(id:ID!):Continent
        continents: [Continent!]!

        language(id:ID!):Language
        languages: [Language!]!
    }

    type Language {

        id: ID!
        name: String!

    }

    type Continent {
    id: ID!
    name: String!
    # countries: [Country]
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

// type Language {
//     code: String
//     name: String
//     countries: [Country]
// }`;
