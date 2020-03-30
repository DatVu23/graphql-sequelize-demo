"use strict"

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      postId: {
        allowNull: false,
        references: {
          key: "id",
          model: "posts",
        },
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        references: {
          key: "id",
          model: "users",
        },
        type: DataTypes.INTEGER,
      },
    })
  },

  down: queryInterface => queryInterface.dropTable("likes"),
}
