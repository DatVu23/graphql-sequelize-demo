const User = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    posts: [Post!]!
    likes: [Like!]!
  }

  type Mutation {
    
  }

  extend type Query {
    users: [User!]!
    user(id: Int!): User
  }
`

export default User
