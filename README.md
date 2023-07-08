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

1. Clone the repository: `git clone https://https://github.com/AndreiChristian/CountriesGraphQL.git`
2. Navigate to the project directory: `cd yourrepository`
3. Install the dependencies: `npm install`
4. Run the server: `npm start`

After these steps, the GraphQL API will be up and running at `http://localhost:4000`.

> **NOTE: Data Accuracy and Disclaimer**
>
> _While every effort is made to ensure that the data provided by this API is accurate and up-to-date, it should be noted that the actual data may vary. This can be due to a variety of reasons, including changes in country demographics, official languages, and continent classification._
>
> _The data provided by the API is intended to serve as a general reference and may not be suitable for applications that require precise or real-time data. For the most accurate data, we recommend using an official or government source where possible._
>
> _Please use this API at your own discretion, and feel free to contribute if you find any inaccuracies or issues. Contributions to improve the data accuracy are always welcome._
>
> **Disclaimer:** _This API, its data, and its maintainers are not responsible for any damages or issues that may arise from the use of the data provided. All data is provided "as is" and without any warranty of any kind._

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

### Get All Countries

This query retrieves information about all countries stored in the database.

```graphql
query {
  countries {
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

### Get a Single Language

Fetches information about a single language. Replace "your_language_id" with the ID of the language you want to query.

```graphql
query {
  language(id: "your_language_id") {
    id
    name
  }
}
```

### Get All Languages

This query retrieves information about all languages in the database.

```graphql
query {
  languages {
    id
    name
  }
}
```

### Get One Continent

Fetches information about a single continent and its related countries. Replace "your_continent_id" with the ID of the continent you want to query.

```graphql
query {
  continent(id: "your_continent_id") {
    id
    name
    countries {
      id
      name
    }
  }
}
```

### Get One Continent

This query retrieves information about all continents and their related countries in the database.

```graphql
query {
  continents {
    id
    name
    countries {
      id
      name
    }
  }
}
```

### Contributing

Contributions are welcome! Feel free to submit issues and/or pull requests to help improve the project.
