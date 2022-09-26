import { User } from '../../entities/user';
import { UsersRepository } from '../../repositories/users-repository';

interface FindUserRequest {
  id: string;
}

type FindUserResponse = User;

export class FindUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) { }

  async execute({ id }: FindUserRequest): Promise<FindUserResponse> {
    if (!id) {
      throw new Error('No ID provided');
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User does not exists');
    }

    return user;
  }
}
