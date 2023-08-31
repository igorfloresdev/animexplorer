import IAnime from '../interfaces/IAnime'
import IEpisode from '../interfaces/IEpisode'
import AnimeRepository from '../repository/AnimeRepository'

class AnimeService {
  static async getAnimes(limit: number, offset: number) {
    let animes = await AnimeRepository.getAnimes(limit, offset)

    const data: IAnime[] = []

    animes.data.forEach((anime: any) => {
      data.push({
        id: anime.id,
        slug: anime.attributes.slug,
        synopsis: anime.attributes.synopsis,
        title: anime.attributes.canonicalTitle,
        ratingRank: anime.attributes.ratingRank,
        ageRating: anime.attributes.ageRating,
        posterImage: anime.attributes.posterImage ? anime.attributes.posterImage.original : '',
        episodeCount: anime.attributes.episodeCount,
      })
    })

    const links = {
      first: `/animes?limit=${limit}&offset=${0}`,
      next: offset + limit < animes.meta.count ? `/animes?limit=${limit}&offset=${offset + limit}` : '',
      previous: offset - limit >= 0 ? `/animes?limit=${limit}&offset=${offset - limit}` : '',
      last: `/animes?limit=${limit}&offset=${animes.meta.count - limit}`,
    }

    const animesData = {
      data,
      meta: animes.meta,
      links,
    }

    return animesData
  }
  static async getAnimesByCategory(limit: number, offset: number, id: string) {
    let animes = await AnimeRepository.getAnimesByCategory(limit, offset, id)

    const data: IAnime[] = []

    animes.data.forEach((anime: any) => {
      data.push({
        id: anime.id,
        slug: anime.attributes.slug,
        synopsis: anime.attributes.synopsis,
        title: anime.attributes.canonicalTitle,
        ratingRank: anime.attributes.ratingRank,
        ageRating: anime.attributes.ageRating,
        posterImage: anime.attributes.posterImage ? anime.attributes.posterImage.original : '',
        episodeCount: anime.attributes.episodeCount,
      })
    })

    const links = {
      first: `/category/${id}/animes?limit=${limit}&offset=${0}`,
      next: offset + limit < animes.meta.count ? `/category/${id}/animes?limit=${limit}&offset=${offset + limit}` : '',
      previous: offset - limit >= 0 ? `/category/${id}/animes?limit=${limit}&offset=${offset - limit}` : '',
      last: `/category/${id}/animes?limit=${limit}&offset=${animes.meta.count - limit}`,
    }

    const animesData = {
      data,
      meta: animes.meta,
      links,
    }

    return animesData
  }

  static async findAnimesByText(title: string) {
    let animes = await AnimeRepository.findAnimesByText(title)

    const data: IAnime[] = []

    animes.data.forEach((anime: any) => {
      data.push({
        id: anime.id,
        slug: anime.attributes.slug,
        synopsis: anime.attributes.synopsis,
        title: anime.attributes.canonicalTitle,
        ratingRank: anime.attributes.ratingRank,
        ageRating: anime.attributes.ageRating,
        posterImage: anime.attributes.posterImage ? anime.attributes.posterImage.original : '',
        episodeCount: anime.attributes.episodeCount,
      })
    })

    const animesData = {
      data,
    }

    return animesData
  }

  static async getAnime(id: string) {
    const anime = await AnimeRepository.getAnime(id)

    const animeData = {
      id: anime.data.id,
      slug: anime.data.attributes.slug,
      synopsis: anime.data.attributes.synopsis,
      title: anime.data.attributes.canonicalTitle,
      ratingRank: anime.data.attributes.ratingRank,
      ageRating: anime.data.attributes.ageRating,
      posterImage: anime.data.attributes.posterImage ? anime.data.attributes.posterImage.original : '',
      episodeCount: anime.data.attributes.episodeCount,
    }

    return animeData
  }

  static async getAnimeEpisodes(id: string, limit: number, offset: number) {
    const episodes = await AnimeRepository.getAnimeEpisodes(id, limit, offset)

    const data: IEpisode[] = []

    episodes.data.forEach((episode: any) => {
      data.push({
        id: episode.id,
        synopsis: episode.attributes.synopsis,
        title: episode.attributes.titles.en_us,
        seasonNumber: episode.attributes.seasonNumber,
        number: episode.attributes.number,
        thumbnail: episode.attributes.thumbnail,
      })
    })

    const links = {
      first: `/anime/${id}/episodes?limit=${limit}&offset=${0}`,
      next: offset + limit < episodes.meta.count ? `/anime/${id}/episodes?limit=${limit}&offset=${offset + limit}` : '',
      previous: offset - limit >= 0 ? `/anime/${id}/episodes?limit=${limit}&offset=${offset - limit}` : '',
      last: `/anime/${id}/episodes?limit=${limit}&offset=${episodes.meta.count - limit}`,
    }

    const animesData = {
      data,
      meta: episodes.meta,
      links,
    }

    return animesData
  }
}

export default AnimeService
