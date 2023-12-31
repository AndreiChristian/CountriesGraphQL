export const typedefs = `#graphql

    type Query{

        continent(id:ID!):Continent
        continents: [Continent!]!

        language(id:ID!):Language
        languages: [Language!]!

        countries: [Country!]!
        country(id:ID): Country
    }

    type Language {

        id: ID!
        name: String!

    }

    type Country {
        id: String
        name: String
        capital: String
        population: Int
        continent: Continent
    }

    type Continent {
    id: ID!
    name: String!
    countries: [Country]
    }

`;
