import {
  productsOnTags,
  productsOnTag,
  createProductsOnTag,
  updateProductsOnTag,
  deleteProductsOnTag,
} from './productsOnTags'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('productsOnTags', () => {
  scenario('returns all productsOnTags', async (scenario) => {
    const result = await productsOnTags()

    expect(result.length).toEqual(Object.keys(scenario.productsOnTag).length)
  })

  scenario('returns a single productsOnTag', async (scenario) => {
    const result = await productsOnTag({ id: scenario.productsOnTag.one.id })

    expect(result).toEqual(scenario.productsOnTag.one)
  })

  scenario('creates a productsOnTag', async (scenario) => {
    const result = await createProductsOnTag({
      input: {
        tagId: scenario.productsOnTag.two.tagId,
        productId: scenario.productsOnTag.two.productId,
      },
    })

    expect(result.tagId).toEqual(scenario.productsOnTag.two.tagId)
    expect(result.productId).toEqual(scenario.productsOnTag.two.productId)
  })

  scenario('updates a productsOnTag', async (scenario) => {
    const original = await productsOnTag({ id: scenario.productsOnTag.one.id })
    const result = await updateProductsOnTag({
      id: original.id,
      input: { tagId: scenario.productsOnTag.two.tagId },
    })

    expect(result.tagId).toEqual(scenario.productsOnTag.two.tagId)
  })

  scenario('deletes a productsOnTag', async (scenario) => {
    const original = await deleteProductsOnTag({
      id: scenario.productsOnTag.one.id,
    })

    const result = await productsOnTag({ id: original.id })

    expect(result).toEqual(null)
  })
})
