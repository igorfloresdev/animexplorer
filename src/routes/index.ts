import express, { Application, Request, Response } from 'express'
import CategoryController from '../controllers/CategoryController'
import AnimeController from '../controllers/AnimeController'
import PostController from '../controllers/PostController'

const routes = (app: Application) => {
  app.route('/api').get((req: Request, res: Response) => {
    res.status(200).send('ANIMEXPLORER API')
  })

  app.use(express.json())

  // Post routes
  app.get('/api/posts/:id', PostController.getPostersByAnimeId)
  app.post('/api/post', PostController.createPost)

  // Categories Routes
  app.get('/api/categories', CategoryController.getCategories)
  app.get('/api/category/:id', CategoryController.getCategory)

  // Animes Routes
  app.get('/api/animes', AnimeController.getAnimes)
  app.get('/api/anime/:id', AnimeController.getAnime)
  app.get('/api/anime/:id/episodes', AnimeController.getAnimeEpisodes)
  app.get('/api/animes/search', AnimeController.getAnimesByText)
  app.get('/api/category/:id/animes', AnimeController.getAnimesByCategory)
}

export default routes
