import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript"
import { Post } from "./posts"
import { User } from "./users"

@Table({
  tableName: "likes",
})
export class Like extends Model<Like> {
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
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Post)
  postId!: string

  @BelongsTo(() => Post)
  post!: Post

  @BelongsTo(() => User)
  user!: User
}
