# Country-Language GraphQL API

This project is a GraphQL API that provides detailed information about countries, languages, and continents. It leverages the power of [Prisma](https://www.prisma.io/), a next-generation Object-Relational Mapping (ORM) tool for Node.js and TypeScript, [SQLite](https://www.sqlite.org/index.html), a self-contained, high-reliability, embedded, full-featured, public-domain, SQL database engine, and [GraphQL](https://graphql.org/), a powerful query language for APIs.

## Features

- Query comprehensive details about continents, countries, and languages.
- Strong relational data structure, with support for many-to-many relationships between countries and languages.
- Built on robust and reliable SQLite database.
- Fully operational and live GraphQL API that can be queried in real time.
- Employs Prisma as an ORM for simplified database management.

## Live API

You can test and use the live API at the following URL:

[Live API Link](#) <-- Replace this placeholder with the actual live API URL.

## How to Run Locally

1. Clone the repository: `git clone https://github.com/yourusername/yourrepository.git`
2. Navigate to the project directory: `cd yourrepository`
3. Install the dependencies: `npm install`
4. Run the server: `npm start`

After these steps, the GraphQL API will be up and running at `http://localhost:4000`.

## Available Queries

### Get a Single Country

```graphql
query {
  country(id: "your_country_id") {
    id
    name
    capital
    population
    continent {
      id
      name
    }
  }
}
```
