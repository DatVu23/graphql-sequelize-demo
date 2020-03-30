import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    users: [User!]!
  }
`;