import { PrismaClient } from '@prisma/client'
import IUser from '../interfaces/IPoster'
import IPost from '../interfaces/IPoster'

const prisma = new PrismaClient()

class PostRepository {
  static async getPostersByAnimeId(animeId: string) {
    return await prisma.post.findMany({ where: { animeId } })
  }

  static async createPoster(data: IPost) {
    return await prisma.post.create({ data })
  }
}

export default PostRepository
