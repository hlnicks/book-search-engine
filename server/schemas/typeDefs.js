const { gql } = require('apollo-server-express');

// user, book, mutation
const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        image: String!
        title: String!
        link: String!
        authors: [String]
        description: String!
    }

    type Mutation {
    }

`;

module.exports = typeDefs;