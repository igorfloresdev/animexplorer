import { NextFunction, Request, Response } from 'express'
import CategoryService from '../services/CategoryService'

class CategoryController {
  static async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit = 40, offset = 0 } = req.query
      const categories = await CategoryService.getCategories(Number(limit), Number(offset))

      return res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  }

  static async getCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const category = await CategoryService.getCategory(id)

      return res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
}

export default CategoryController
