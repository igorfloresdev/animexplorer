import { Request, Response, NextFunction } from 'express'
import PostService from '../services/PostService'
import { z } from 'zod'

class PostController {
  static async getPostersByAnimeId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const posters = await PostService.getPostersByAnimeId(id)

      return res.status(200).json(posters)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body)
      const dataSchema = z.object({
        name: z.string(),
        post: z.string(),
        animeId: z.string(),
      })

      const post = dataSchema.parse(req.body)

      await PostService.createPoster(post)

      return res.status(200).json('Post successfully created !')
    } catch (error) {
      next(error)
    }
  }
}

export default PostController
