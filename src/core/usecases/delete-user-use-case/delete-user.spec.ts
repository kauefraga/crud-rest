import { describe, expect, it } from 'vitest';
import { User } from '../../entities/user';
import { InMemoryUsersRepository } from '../../repositories/implementations/in-memory-users-repository';
import { DeleteUserUseCase } from './delete-user';

describe('Delete User', () => {
  it('should be able to delete a user', async () => {
    // Create a new user
    const inMemoryUsersRepository = new InMemoryUsersRepository();

    await inMemoryUsersRepository.create(new User({
      name: 'John Doe',
    }));

    const deleteUserUseCase = new DeleteUserUseCase(
      inMemoryUsersRepository,
    );

    expect(deleteUserUseCase.execute({
      name: 'John Doe',
    })).resolves.not.toThrow();
  });

  it('should not be able to delete a user', async () => {
    const deleteUserUseCase = new DeleteUserUseCase(
      new InMemoryUsersRepository(),
    );

    expect(deleteUserUseCase.execute({
      name: 'John Doe',
    })).rejects.toThrow();
  });
});
