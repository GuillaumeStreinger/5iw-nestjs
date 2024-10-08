import {Table, Column, Model, PrimaryKey, DataType, Unique, AutoIncrement} from 'sequelize-typescript';

@Table
export class Player extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(50))
    pseudo: string

    @Column
    email:string

    @Column
    password: string

}