import { NextFunction, Request, Response } from 'express'
import AnimeService from '../services/AnimeService'

class AnimeController {
  static async getAnimes(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit = 10, offset = 0 } = req.query

      const animes = await AnimeService.getAnimes(Number(limit), Number(offset))

      return res.status(200).json(animes)
    } catch (error) {
      next(error)
    }
  }

  static async getAnimesByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit = 10, offset = 0 } = req.query
      const { id } = req.params

      const animes = await AnimeService.getAnimesByCategory(Number(limit), Number(offset), id)

      return res.status(200).json(animes)
    } catch (error) {
      next(error)
    }
  }

  static async getAnimesByText(req: Request, res: Response, next: NextFunction) {
    try {
      const { text } = req.query

      const animes = await AnimeService.findAnimesByText(String(text))

      return res.status(200).json(animes)
    } catch (error) {
      next(error)
    }
  }

  static async getAnime(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const anime = await AnimeService.getAnime(id)

      return res.status(200).json(anime)
    } catch (error) {
      next(error)
    }
  }

  static async getAnimeEpisodes(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit = 10, offset = 0 } = req.query
      const { id } = req.params

      const episodes = await AnimeService.getAnimeEpisodes(id, Number(limit), Number(offset))

      return res.status(200).json(episodes)
    } catch (error) {
      next(error)
    }
  }
}

export default AnimeController
