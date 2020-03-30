import { User } from '#root/db/models/users';

const usersResolver = () => User.findAll()

export default usersResolver;