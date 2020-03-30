import { User, Post, Like } from "#root/db/models"
import { CreateUserInterface } from "./interfaces"

export const getUsers = () => User.findAll()
export const getUser = (_, { id }: { id: number }) => {
  return User.findOne({
    where: {
      id,
    },
  })
}

const createUser = (
  _: any,
  { firstName, lastName, userName }: CreateUserInterface
) => User.create({ firstName, lastName, userName })

const userPosts = {
  posts: (user: User) =>
    Post.findAll({
      include: [
        {
          model: User,
          where: {
            id: user.id,
          },
        },
      ],
    }),
}

const userLikes = {
  likes: (user: User) =>
    Like.findAll({
      include: [
        {
          model: User,
          where: {
            id: user.id,
          },
        },
      ],
    }),
}

export const UserResolver = {
  ...userLikes,
  ...userPosts,
}
