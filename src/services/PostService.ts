import IPost from '../interfaces/IPoster'
import PostRepository from '../repository/PostRepository'

class PostService {
  static async getPostersByAnimeId(animeId: string) {
    return PostRepository.getPostersByAnimeId(animeId)
  }

  static async createPoster(data: IPost) {
    return await PostRepository.createPoster(data)
  }
}

export default PostService
