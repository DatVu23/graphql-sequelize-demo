import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript"

import { Post } from "./posts"

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] },
  },
  paranoid: true,
  tableName: "users",
})
export class User extends Model<User> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  firstName!: string

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  lastName!: string

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  userName!: string

  @HasMany(() => Post)
  posts!: Post[]
}
