import {
  Table,
  DataType,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript"
import { User } from "./users"

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] },
  },
  paranoid: true,
  tableName: "posts",
})
export class Post extends Model<Post> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => User)
  userId!: string

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  title!: string

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  description!: string

  @BelongsTo(() => User)
  user!: User
}
