import { AxiosRequestConfig } from 'axios'

export function useAPI(endpoint: string) {
  const { $axios, $errors } = useContext()

  const validationWrapper = async (cb: Function) => {
    try {
      const response = await cb()
      return response
    } catch (error: any) {
      const { data } = error?.response
      if (data?.statusCode === 422) {
        $errors.fill(data.message)
      }
      throw new Error(error)
    }
  }

  const submit = (
    method: 'post' | 'get' | 'patch' | 'delete',
    route: string,
    payload: any,
    config?: AxiosRequestConfig
  ) => {
    const url = `${endpoint}${route ? '/' + route : ''}`
    if (method === 'get' || method === 'delete')
      return validationWrapper(() => $axios[method](url, config))
    else return validationWrapper(() => $axios[method](url, payload, config))
  }

  return {
    post: (
      payload: Record<string, any> = {},
      route = '',
      config?: AxiosRequestConfig
    ) => submit('post', route, payload, config),

    get: (route = '', config?: AxiosRequestConfig) =>
      submit('get', route, config),

    getOne: (id: string, route = '', config?: AxiosRequestConfig) =>
      submit('get', route ? [route, id].join('/') : id, config),

    patch: (
      id: string,
      payload: Record<string, any> = {},
      route = '',
      config?: AxiosRequestConfig
    ) => submit('patch', route ? [route, id].join('/') : id, payload, config),

    delete: (id: string, route = '', config?: AxiosRequestConfig) =>
      submit('delete', route ? [route, id].join('/') : id, config),
  }
}
