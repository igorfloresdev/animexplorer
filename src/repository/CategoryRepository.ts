import API from '../lib/api'

class CategoryRepository {
  static async getCategories(limit: number, offset: number) {
    const categories = await API.get(`/categories`, {
      params: {
        sort: 'title',
        'page[limit]': limit,
        'page[offset]': offset,
      },
    })

    return categories.data
  }

  static async getCategory(id: string) {
    const category = await API.get(`/categories/${id}`)

    return category.data
  }
}

export default CategoryRepository
