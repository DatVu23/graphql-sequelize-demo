"use strict"

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "likes",
      [
        {
          userId: 1,
          postId: 2,
        },
        {
          userId: 1,
          postId: 9,
        },
        {
          userId: 2,
          postId: 2,
        },
        {
          userId: 2,
          postId: 8,
        },
        {
          userId: 3,
          postId: 7,
        },
        {
          userId: 3,
          postId: 5,
        },
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("likes", null, {})
  },
}
