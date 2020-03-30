import { User } from "#root/db/models/users"

export const usersQuery = () => User.findAll()