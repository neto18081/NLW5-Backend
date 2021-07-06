import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string){
        //Verificar se o usuario existe
        const userExists = await this.usersRepository.findOne({
            email
        })

        //Se não existir salvar no banco
        if(userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user);

        //Se existir retornar o user
        return user;
    }
}

export { UsersService }