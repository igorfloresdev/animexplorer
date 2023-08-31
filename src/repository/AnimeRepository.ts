import API from '../lib/api'

class AnimeRepository {
  static async getAnimes(limit: number, offset: number) {
    const animes = await API.get('/anime', {
      params: {
        sort: 'slug',
        'page[limit]': limit,
        'page[offset]': offset,
      },
    })
    return animes.data
  }

  static async getAnimesByCategory(limit: number, offset: number, id: string) {
    const animes = await API.get(`/categories/${id}/anime`, {
      params: {
        sort: 'slug',
        'page[limit]': limit,
        'page[offset]': offset,
      },
    })
    return animes.data
  }

  static async findAnimesByText(search: string) {
    const animes = await API.get(`/anime?filter%5Btext%5D=${search}`)
    return animes.data
  }

  static async getAnime(id: string) {
    const anime = await API.get(`/anime/${id}`)

    return anime.data
  }

  static async getAnimeEpisodes(id: string, limit: number, offset: number) {
    const anime = await API.get(`/anime/${id}/episodes`, {
      params: {
        'page[limit]': limit,
        'page[offset]': offset,
      },
    })

    return anime.data
  }
}

export default AnimeRepository
