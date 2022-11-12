export const auth = {
  fullPathRedirect: true,
  localStorage: false,
  redirect: false,
  strategies: {
    default: {
      scheme: 'refresh',
      token: {
        property: 'data.token',
        global: true,
        type: 'Bearer',
      },
      user: {
        property: '',
      },
      refreshToken: {
        property: 'data.token',
        data: 'refreshToken',
      },
      endpoints: {
        login: { url: '/auth/login', method: 'post' },
        logout: { url: '/auth/logout', method: 'post' },
        user: { url: '/auth/me', method: 'get' },
        refresh: { url: '/auth/refresh', method: 'post' },
      },
    },
  },
}
