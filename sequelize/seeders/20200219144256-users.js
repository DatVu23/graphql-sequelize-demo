"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Ryan",
          lastName: "Florence",
          userName: "ryan_florence",
          createdAt: Sequelize.fn("now"),
          updatedAt: Sequelize.fn("now"),
        },
        {
          firstName: "John",
          lastName: "Maeda",
          userName: "john_maeda",
          createdAt: Sequelize.fn("now"),
          updatedAt: Sequelize.fn("now"),
        },
        {
          firstName: "Lea ",
          lastName: "Verou",
          userName: "lea_verou",
          createdAt: Sequelize.fn("now"),
          updatedAt: Sequelize.fn("now"),
        },
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("users", null, {})
  },
}
