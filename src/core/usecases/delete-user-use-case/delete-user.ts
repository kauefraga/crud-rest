import { UsersRepository } from '../../repositories/users-repository';

interface DeleteUserRequest {
  name: string;
}

type DeleteUserResponse = void;

export class DeleteUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) { }

  async execute({ name }: DeleteUserRequest): Promise<DeleteUserResponse> {
    if (!name) {
      throw new Error('No name provided');
    }

    const foundUser = await this.usersRepository.findByName(name);

    if (!foundUser) {
      throw new Error('User does not exists');
    }

    await this.usersRepository.delete(name);
  }
}
