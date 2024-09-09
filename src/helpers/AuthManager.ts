import HttpRequest from './HttpRequest'

class AuthManager {
  private static instance: AuthManager
  private token: string | null = null

  private constructor() {}

  public static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager()
    }
    return AuthManager.instance
  }

  public getToken(): string | null {
    return this.token
  }

  public setToken(token: string): void {
    this.token = token
    // Set a secure httpOnly cookie as fallback
    // This should be done server-side for true security
    document.cookie = `auth_token=${token}; path=/; secure; httpOnly; sameSite=strict`
  }

  public clearToken(): void {
    this.token = null
    // Clear the cookie
    document.cookie =
      'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }

  public async login(credentials: {
    username: string
    password: string
  }): Promise<void> {
    try {
      const response = await HttpRequest.POST('/auth/login', credentials)
      this.setToken(response.data.accessToken)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  public logout(): void {
    this.clearToken()
    // Additional logout logic (e.g., redirecting to login page)
  }

  public isLoggedIn(): boolean {
    return !!this?.token
  }
}

export default AuthManager.getInstance()
