import { Container } from 'inversify';
import { DBService } from './services/db.service';

export class DiContainer {
  public diContainer: Container;

  constructor() {
    this.diContainer = new Container();
    this.configure();
  }

  public configure(): void {
    this.configureDB();
  }

  private configureDB(): void {
    this.diContainer.bind('dbService').to(DBService);
  }

  private configureServices(): void {}

  public connect(): void {
    const _db = this.diContainer.get('dbService') as DBService;

    (async () => {
      await _db.connect();
    })();
  }
}
