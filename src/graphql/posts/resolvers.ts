import { Post, Like } from "#root/db/models";

export const getPosts = () => Post.findAll() 

export const getPostsLikes = {
  likes: (post: Post) => Like.findAll({
    include: [
      {
        model: Post,
        where: {
          id: post.id
        }
      }
    ]
  })
}