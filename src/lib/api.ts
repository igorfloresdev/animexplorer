import axios from 'axios'

const API = axios.create({
  baseURL: 'https://kitsu.io/api/edge',
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
})

export default API
