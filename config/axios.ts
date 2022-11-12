// eslint-disable-next-line import/named
import { AxiosOptions } from '@nuxtjs/axios'

const { API_HOST, API_PORT } = process.env

export const axios: AxiosOptions = {
  proxy: true,
  debug: process.env.NODE_ENV !== 'production',
  host: API_HOST,
  port: API_PORT,
  prefix: `${API_HOST}:${API_PORT}${process.env.API_PREFIX || ''}`,
  headers: {
    common: {
      Accept: 'application/json',
      'Accept-Language': 'en',
    },
  },
}
