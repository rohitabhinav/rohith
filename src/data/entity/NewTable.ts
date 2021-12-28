import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NewTableAttributes {
  id: number;
  date?: Date;
  month?: string;
  year?: number;
}

export type NewTablePk = "id";
export type NewTableId = NewTable[NewTablePk];
export type NewTableOptionalAttributes = "id" | "date" | "month" | "year";
export type NewTableCreationAttributes = Optional<NewTableAttributes, NewTableOptionalAttributes>;

export class NewTable extends Model<NewTableAttributes, NewTableCreationAttributes> implements NewTableAttributes {
  id!: number;
  date?: Date;
  month?: string;
  year?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof NewTable {
    NewTable.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'new_table',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return NewTable;
  }
}
