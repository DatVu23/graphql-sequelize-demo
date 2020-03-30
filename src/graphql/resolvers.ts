import { getUsers as users, UserResolver as User, getUser as user } from './users/resolver';
import { getPosts as posts, getPostsLikes as Post} from './posts/resolvers'

export default {
  Query: {
    users,
    user,
    posts
  },
  User,
  Post
}