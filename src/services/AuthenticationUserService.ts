import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
}

class AuthenticateUserService {
  /**
   * async executer
   */
  public async executer({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('incorrect email or password');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('incorrect email or password');
    }

    const token = sign({}, 'md5tokentalves', {
      subject: user.id,
      expiresIn:
    });

    return {
      user,
    };
  }
}

export default AuthenticateUserService;
