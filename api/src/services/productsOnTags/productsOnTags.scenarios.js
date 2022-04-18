export const standard = defineScenario({
  productsOnTag: {
    one: {
      data: {
        tag: { create: { name: 'String' } },
        product: { create: { title: 'String', desc: 'String' } },
      },
    },

    two: {
      data: {
        tag: { create: { name: 'String' } },
        product: { create: { title: 'String', desc: 'String' } },
      },
    },
  },
})
