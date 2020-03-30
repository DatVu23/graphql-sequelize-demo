import { ApolloServer } from "apollo-server-express"
import { accessEnv } from "#root/helpers"
import express from "express"

// import resolvers from "#root/graphql/resolvers"
// import { typeDefs } from "#root/graphql"

import schema from "#root/graphql/rootSchema"

const PORT = accessEnv("PORT", 7000)

const app = express()

const apolloServer = new ApolloServer({ schema })

apolloServer.applyMiddleware({ app, path: "/graphql" })

app.listen(PORT, () => {
  console.info(`Server is runnning on port: ${PORT}`)
})
