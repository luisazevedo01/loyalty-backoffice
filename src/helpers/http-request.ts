import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

const baseURL = import.meta.env.VITE_DEV_API_ENDPOINT

class HttpRequest {
  private axios: AxiosInstance
  private accessToken: string = ''

  constructor(baseURL: string) {
    this.axios = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
  }

  public setAuthorization(token: string): void {
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  public setAccessToken(token: string): void {
    this.accessToken = token
  }

  public getAccessToken(): string {
    return this.accessToken
  }

  private async request<T>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.axios.request<T>({
        method,
        url,
        data,
        ...config,
      })
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.message == 'Request failed with status code 401') {
          const newRoute = window.location.href
            .split('/')
            .splice(0, 3)
            .join('/')
          console.log(newRoute)
        }
      }
      //return window.location.href = window.location.href.split('/').splice(3, 2).join('/')
      console.error(
        `Error during ${method.toUpperCase()} request to ${url}:`,
        error
      )
      throw error
    }
  }

  public GET<T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const queryString = params
      ? `?${new URLSearchParams(params as Record<string, string>).toString()}`
      : ''
    return this.request<T>('get', `${url}${queryString}`, undefined, config)
  }

  public POST<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>('post', url, data, config)
  }

  public PUT<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>('put', url, data, config)
  }

  public DELETE<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>('delete', url, undefined, config)
  }
}

export default new HttpRequest(baseURL)
