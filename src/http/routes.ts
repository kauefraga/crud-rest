import { Request, Response, Router } from 'express';
import { ApiResponse } from './types/ApiResponse';
import HelloController from './controllers/hello';
import { FindUserController } from './controllers/users/find';
import { CreateUserController } from './controllers/users/create';

const router = Router();

router.get('/v1', HelloController);

router.get('/v1/users/:id', async (
  request: Request,
  response: Response<ApiResponse>,
) => {
  try {
    return await FindUserController(request, response);
  } catch (error: any) {
    return response.status(400).json({
      success: false,
      data: {
        error: {
          name: error.name,
          message: error.message,
        },
        now: new Date(),
      },
    });
  }
});

router.post('/v1/users/create', async (
  request: Request,
  response: Response<ApiResponse>,
) => {
  try {
    return await CreateUserController(request, response);
  } catch (error: any) {
    return response.status(400).json({
      success: false,
      data: {
        error: {
          name: error.name,
          message: error.message,
        },
        now: new Date(),
      },
    });
  }
});

export { router };
