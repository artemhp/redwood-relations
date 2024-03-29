import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('products', () => {
  scenario('returns all products', async (scenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })

  scenario('returns a single product', async (scenario) => {
    const result = await product({ id: scenario.product.one.id })

    expect(result).toEqual(scenario.product.one)
  })

  scenario('creates a product', async () => {
    const result = await createProduct({
      input: { title: 'String', desc: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.desc).toEqual('String')
  })

  scenario('updates a product', async (scenario) => {
    const original = await product({ id: scenario.product.one.id })
    const result = await updateProduct({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a product', async (scenario) => {
    const original = await deleteProduct({ id: scenario.product.one.id })
    const result = await product({ id: original.id })

    expect(result).toEqual(null)
  })
})
