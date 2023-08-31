import ICategory from '../interfaces/ICategory'
import CategoryRepository from '../repository/CategoryRepository'

class CategoryService {
  static async getCategories(limit: number, offset: number) {
    const categories = await CategoryRepository.getCategories(limit, offset)

    const data: ICategory[] = []

    categories.data.forEach((category: any) => {
      data.push({
        id: category.id,
        title: category.attributes.title,
        description: category.attributes.description,
        slug: category.attributes.slug,
      })
    })

    const links = {
      first: `/categories?limit=${limit}&offset=${0}`,
      next: offset + limit < categories.meta.count ? `/categories?limit=${limit}&offset=${offset + limit}` : '',
      previous: offset - limit >= 0 ? `/categories?limit=${limit}&offset=${offset - limit}` : '',
      last: `/categories?limit=${limit}&offset=${categories.meta.count - limit}`,
    }

    const categoriesData = {
      data,
      meta: categories.meta,
      links,
    }

    return categoriesData
  }

  static async getCategory(id: string) {
    const category = await CategoryRepository.getCategory(id)

    const categoryData: ICategory = {
      id: category.data.id,
      title: category.data.attributes.title,
      description: category.data.attributes.description,
      slug: category.data.attributes.slug,
    }

    return categoryData
  }
}

export default CategoryService
