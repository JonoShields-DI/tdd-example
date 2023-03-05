const {makeApp} = require('./app')
const request = require('supertest')

const createProduct = jest.fn()

const mockRepository = {
  createProduct
}

const app = makeApp(mockRepository)

describe(" POST /product", () => {
  describe("when given a name and description", () => {
    beforeEach(() => {
      createProduct.mockReset()
    });

    const requestData  = {
      name: 'name 1',
      description: 'description 1'
    }

    test("should pass name and description to createProduct function", async () => {
      const response = await request(app).post('/product').send(requestData)
      expect(createProduct.mock.calls.length).toBe(1)
      expect(createProduct.mock.calls[0][0]).toBe(requestData.name)
      expect(createProduct.mock.calls[0][1]).toBe(requestData.description)
    })

    test("should return the name, description, id", async () => {
      createProduct.mockResolvedValue({
        name: requestData.name,
        description: requestData.description,
        id: 2
      })
      const response = await request(app).post('/product').send(requestData)
      expect(response.status).toBe(201)
      expect(response.body.name).toBe(requestData.name)
      expect(response.body.description).toBe(requestData.description)
      expect(response.body.id).toBe(2)
    })
  })
})