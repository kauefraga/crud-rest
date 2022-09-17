import { User } from '../../entities/user';
import { UsersRepository } from '../../repositories/users-repository';

interface FindUserRequest {
  name: string;
}

type FindUserResponse = User;

export class FindUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) { }

  async execute({ name }: FindUserRequest): Promise<FindUserResponse> {
    if (!name) {
      throw new Error('No name provided');
    }

    const user = await this.usersRepository.findByName(name);

    if (!user) {
      throw new Error('User does not exists');
    }

    return user;
  }
}
