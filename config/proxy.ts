const { API_HOST, API_PORT, API_PREFIX } = process.env
export const proxy = {
  [API_PREFIX as string]: `http://${API_HOST}:${API_PORT}`,
}
