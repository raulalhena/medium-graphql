
export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    draft: Boolean!
    publishedDate: String!
    userId: ID!
  }

  type Query {
    users: [User]!
    posts: [Post]!
    findUser(option: String!, value: String!): User
    findUserPosts(userId: ID!): [Post]
  }

  type Mutation {
    addUser (
      name: String!
      email: String!
      password: String!
    ): User

    addPost (
      title: String!
      content: String!
      draft: Boolean!
      userId: ID!
    ): Post
  }
`;