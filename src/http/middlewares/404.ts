import { Request, Response } from 'express';
import { baseUrl } from '../types/BaseUrl';
import { ApiResponse } from '../types/ApiResponse';

export function NotFound(
  _: Request,
  response: Response<ApiResponse>,
) {
  return response.status(404).json({
    success: false,
    data: {
      error: {
        name: 'Not Found',
        message: 'The requested URL is not available.',
      },
      message: `Try ${baseUrl} instead.`,
      now: new Date(),
    },
  });
}
