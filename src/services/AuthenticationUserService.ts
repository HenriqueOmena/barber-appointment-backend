interface Request {
  email: string;
  password: string;
}
class AuthenticateUserService {
  /**
   * async executer
   */
  public async executer({ email, password }: Request): Promise<void> {}
}

export default AuthenticateUserService;
