import { injectable } from 'inversify';
import { Pool } from 'pg';

@injectable()
export class DBService {
  private readonly _pool: Pool;

  constructor() {
    this._pool = new Pool({
      user: 'triviadb_1jtr_user',
      password: 'V3on2yMkBmTI9KzzlEVitRjrI4B0XQ07',
      host: 'dpg-cm5tiied3nmc73aoc5r0-a.frankfurt-postgres.render.com',
      database: 'triviadb_1jtr',
      port: 5432,
      ssl: true,
    });
  }

  public get pool(): Pool {
    return this._pool;
  }

  async connect() {
    try {
      return await this._pool.connect();
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
