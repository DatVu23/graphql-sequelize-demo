import { Sequelize } from "sequelize-typescript"

import { accessEnv } from "#root/helpers"

import models from "./models"

const DB_URL = accessEnv("DB_URL")

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatemenets: true,
  },
  logging: false,
  models,
})

export default sequelize
