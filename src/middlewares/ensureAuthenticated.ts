import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');
  const decoded = verify(token, 'md5tokentalves');
}
