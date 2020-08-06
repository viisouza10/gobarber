import { Response, Request } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { classToClass } from 'class-transformer';

class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const { id: user_id } = request.user;
    const { filename: avatar_filename } = request.file;

    const user = await updateUserAvatar.execute({ user_id, avatar_filename });

    return response.json(classToClass(user));
  }
}

export default UserAvatarController;
