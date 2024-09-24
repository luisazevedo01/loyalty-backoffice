import HttpRequest from './HttpRequest'

class AuthManager {
  private static instance: AuthManager | null = null

  private constructor() {}

  public static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager()
    }
    return AuthManager.instance
  }

  private getSessionToken(): string | null {
    return sessionStorage.getItem('auth_token')
  }

  private setSessionToken(token: string): void {
    sessionStorage.setItem('auth_token', token)
  }

  private clearSessionToken(): void {
    sessionStorage.removeItem('auth_token')
  }

  public getToken(): string | null {
    return this.getSessionToken()
  }

  public setToken(token: string): void {
    this.setSessionToken(token)
  }

  public clearToken(): void {
    this.clearSessionToken()
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
  }

  public isLoggedIn(): boolean {
    return !!this?.getSessionToken()
  }
}

// Export the class itself, not the singleton instance
export default AuthManager.getInstance();
