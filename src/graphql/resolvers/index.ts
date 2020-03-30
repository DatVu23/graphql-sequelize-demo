// import {usersQuery as users } from './users';
import { User } from '#root/db/models/users';
// import * as Query from './Query';

export const asd = 'asd'

const resolvers = {
  Query: {users: () => User.findAll()}
}

export default resolvers
