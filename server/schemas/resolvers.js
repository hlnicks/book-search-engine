const { User, Book } = require("../models");
const { AuthenticationError } = require("apollo-server-express");


const resolvers = {
    Query: {
        me: 
    }

    // mutation: save/remove books, add user, login/logout
}

module.exports = resolvers;