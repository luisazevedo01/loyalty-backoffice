import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import AuthManager from './AuthManager'

const baseURL = import.meta.env.VITE_DEV_API_ENDPOINT

class HttpRequest {
  private static instance: HttpRequest
  private axiosInstance: AxiosInstance

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: baseURL || 'https://api.example.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.setupInterceptors()
  }

  public static getInstance(): HttpRequest {
    if (!HttpRequest.instance) {
      HttpRequest.instance = new HttpRequest()
    }
    return HttpRequest.instance
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = AuthManager.getToken()
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          // Handle specific HTTP errors here
          switch (error.response.status) {
            case 401:
              // Handle unauthorized error
              console.log('Unauthorized access')
              break
            case 404:
              // Handle not found error
              console.log('Resource not found')
              break
            default:
              console.log('An error occurred')
          }
        } else if (error.request) {
          // Handle network errors
          console.log('Network error')
        } else {
          console.log('Error', error.message)
        }
        return Promise.reject(error)
      }
    )
  }

  public GET<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config)
  }

  public POST<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config)
  }

  public PUT<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config)
  }

  public DELETE<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config)
  }
}

export default HttpRequest.getInstance()
