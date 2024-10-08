import { Column, DataType, PrimaryKey, Table, Unique, Model } from "sequelize-typescript";

@Table
export class Character extends Model{
    @PrimaryKey
    @Column
    id: number;

    @Unique
    @Column
    health: number

    @Column
    email:string

    @Column
    password: string
}