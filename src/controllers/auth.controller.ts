import { Request, Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';

@controller('/auth')
export class AuthController {
  constructor() {}

  @httpGet('/check')
  async check(req: Request, res: Response) {
    res.json('success');
  }

  async login(req: Request, res: Response) {}

  async reginster(req: Request, res: Response) {}

  async forgetPassword(req: Request, res: Response) {}
}
