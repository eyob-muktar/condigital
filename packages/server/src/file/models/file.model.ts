import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class File extends Model {
  @Column
  name: string;

  @Column
  size: number;

  @Column
  uploadedAt: Date;

  @Column
  path: string;
}
