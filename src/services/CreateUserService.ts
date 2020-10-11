import { getRepository } from 'typeorm';

interface Request {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, passowrd }): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email addresss already exist');
    }

    const user = usersRepository.create({
      name,
      email,
      passowrd,
    });

    await usersRepository.save(user);

    return user;
  }
}
