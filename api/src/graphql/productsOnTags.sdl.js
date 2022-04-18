export const schema = gql`
  type ProductsOnTag {
    id: Int!
    tagId: Int!
    tag: Tag!
    productId: Int!
    product: Product!
  }

  type Query {
    productsOnTags: [ProductsOnTag!]! @requireAuth
    productsOnTag(id: Int!): ProductsOnTag @requireAuth
  }

  input CreateProductsOnTagInput {
    tagId: Int!
    productId: Int!
  }

  input UpdateProductsOnTagInput {
    tagId: Int
    productId: Int
  }

  type Mutation {
    createProductsOnTag(input: CreateProductsOnTagInput!): ProductsOnTag!
      @requireAuth
    updateProductsOnTag(
      id: Int!
      input: UpdateProductsOnTagInput!
    ): ProductsOnTag! @requireAuth
    deleteProductsOnTag(id: Int!): ProductsOnTag! @requireAuth
  }
`
