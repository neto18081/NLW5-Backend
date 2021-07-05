import { Request, Response } from 'express';

import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

class SettingsController {

    async create(request: Request, response: Response) {
        const { chat, username } = request.body;
        const setttingsRepository = getCustomRepository(SettingsRepository);

        const settings = setttingsRepository.create({
            chat,
            username
        });

        await setttingsRepository.save(settings);

        return response.json(settings);
    }
}

export { SettingsController }