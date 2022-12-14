import { describe, it, expect } from 'vitest';
import { FindUserUseCase } from './find-user';
import { InMemoryUsersRepository } from '../../repositories/implementations/in-memory-users-repository';
import { User } from '../../entities/user';

describe('Find User', () => {
  it('should be able to find a user', async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();

    const findUserUseCase = new FindUserUseCase(
      inMemoryUsersRepository,
    );

    await inMemoryUsersRepository.create(
      new User({
        id: 'CUID-TEST',
        name: 'John Doe',
      }),
    );

    expect(findUserUseCase.execute({
      id: 'CUID-TEST',
    })).resolves.toBeInstanceOf(User);
  });

  it('should not be able to find a user (missing name)', async () => {
    const findUserUseCase = new FindUserUseCase(
      new InMemoryUsersRepository(),
    );

    expect(findUserUseCase.execute({
      id: '',
    })).rejects.toThrow();
  });

  it('should not be able to find a user (user not found)', async () => {
    const findUserUseCase = new FindUserUseCase(
      new InMemoryUsersRepository(),
    );

    expect(findUserUseCase.execute({
      id: 'CUID-TEST',
    })).rejects.toThrow();
  });
});
