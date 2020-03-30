const schema = `
  type Post {
    id: ID!
    title: String!
    description: String!
    likes: [Like!]!
  }

  extend type Query {
    posts: [Post!]!
    likes: [Like!]!
  }
`;

export default schema