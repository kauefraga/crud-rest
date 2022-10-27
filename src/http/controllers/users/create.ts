import { Request, Response } from 'express';
import { inMemoryUsersRepository } from '../../../infra/db';
import { CreateUserUseCase } from '../../../core/usecases/create-user-use-case/create-user';
import { ApiResponse } from '../../types/ApiResponse';
import { baseUrl } from '../../base-url';

export async function CreateUserController(
  request: Request<unknown, unknown, { name: string }>,
  response: Response<ApiResponse>,
) {
  const { name } = request.body;

  const createUserUseCase = new CreateUserUseCase(
    inMemoryUsersRepository,
  );

  const newUser = await createUserUseCase.execute({ name });

  return response.status(201).json({
    success: true,
    data: {
      user: {
        id: newUser.id,
        name: newUser.name,
      },
      check: `${baseUrl}/users/${newUser.id}`,
      now: new Date(),
    },
  });
}
