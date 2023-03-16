export const typeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    author: Author!
  }
  
  type Query {
    posts: [Post!]!
  }

  input PostInput {
    title: String!
    content: String!
    authorId: ID!
  }

  type Mutation {
    createPosts(posts: [PostInput!]!): [Post!]!
  }
`;
