const User = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    posts: [Post!]!
  }

  type Query {
    users: [User!]!
  }
`;

export default User;