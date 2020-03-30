import { makeExecutableSchema } from "graphql-tools"

import resolvers from "#root/graphql/resolvers"
import User from "./users/schema"
import Post from "./posts/schema"
import Like from "./likes/schema"

const BaseSchema = `
  type Query {
    base: Boolean
  }

  type Mutation {
    base: Boolean
  }
`

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [BaseSchema, User, Post, Like],
})

export default schema
