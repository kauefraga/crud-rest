import { Request, Response } from 'express';
import { inMemoryUsersRepository } from '../../../infra/db';
import { FindUserUseCase } from '../../../core/usecases/find-user-use-case/find-user';
import { ApiResponse } from '../../types/ApiResponse';

export async function FindUserController(
  request: Request,
  response: Response<ApiResponse>,
) {
  const { id } = request.params || request.query;

  const findUserUseCase = new FindUserUseCase(
    inMemoryUsersRepository,
  );

  const foundUser = await findUserUseCase.execute({ id });

  return response.status(200).json({
    success: true,
    data: {
      user: {
        id: foundUser.id,
        name: foundUser.name,
      },
      now: new Date(),
    },
  });
}
