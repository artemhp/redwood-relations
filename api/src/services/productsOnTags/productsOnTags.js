import { db } from 'src/lib/db'

export const productsOnTags = () => {
  return db.productsOnTag.findMany()
}

export const productsOnTag = ({ id }) => {
  return db.productsOnTag.findUnique({
    where: { id },
  })
}

export const createProductsOnTag = ({ input }) => {
  return db.productsOnTag.create({
    data: input,
  })
}

export const updateProductsOnTag = ({ id, input }) => {
  return db.productsOnTag.update({
    data: input,
    where: { id },
  })
}

export const deleteProductsOnTag = ({ id }) => {
  return db.productsOnTag.delete({
    where: { id },
  })
}

export const ProductsOnTag = {
  tag: (_obj, { root }) =>
    db.productsOnTag.findUnique({ where: { id: root.id } }).tag(),
  product: (_obj, { root }) =>
    db.productsOnTag.findUnique({ where: { id: root.id } }).product(),
}
