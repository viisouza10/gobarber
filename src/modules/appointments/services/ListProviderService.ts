import { inject, injectable } from 'tsyringe';

import ICacheprovider from '@shared/container/providers/CacheProvider/models/ICacheprovider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProviderService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheprovider: ICacheprovider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    let users = await this.cacheprovider.recover<User[]>(
      `providers-list:${user_id}`,
    );

    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });

      await this.cacheprovider.save(`providers-list:${user_id}`, users);
    }

    return users;
  }
}

export default ListProviderService;
