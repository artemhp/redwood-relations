export const schema = gql`
  type Product {
    id: Int!
    title: String!
    desc: String!
    tags: [ProductsOnTag]!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    title: String!
    desc: String!
  }

  input UpdateProductInput {
    title: String
    desc: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
