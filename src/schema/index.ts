export const typedefs = `#graphql

    type Book {
        title: String
        author:String
    }

    type Query{
    books: [Book]
    }

`;
