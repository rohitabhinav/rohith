import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggIrregularityremarksAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  month_number?: string;
  mawb?: string;
  hawb?: string;
  airline_name?: string;
  class?: string;
  remark?: string;
  action?: string;
  actiondate?: string;
  actionby?: string;
}

export type AggIrregularityremarksPk = "id";
export type AggIrregularityremarksId = AggIrregularityremarks[AggIrregularityremarksPk];
export type AggIrregularityremarksOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "month_number" | "mawb" | "hawb" | "airline_name" | "class" | "remark" | "action" | "actiondate" | "actionby";
export type AggIrregularityremarksCreationAttributes = Optional<AggIrregularityremarksAttributes, AggIrregularityremarksOptionalAttributes>;

export class AggIrregularityremarks extends Model<AggIrregularityremarksAttributes, AggIrregularityremarksCreationAttributes> implements AggIrregularityremarksAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  month_number?: string;
  mawb?: string;
  hawb?: string;
  airline_name?: string;
  class?: string;
  remark?: string;
  action?: string;
  actiondate?: string;
  actionby?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggIrregularityremarks {
    AggIrregularityremarks.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modeof_transport: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    airline_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    actiondate: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    actionby: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_irregularityremarks',
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
      {
        name: "mawb",
        using: "BTREE",
        fields: [
          { name: "mawb" },
        ]
      },
      {
        name: "hawb",
        using: "BTREE",
        fields: [
          { name: "hawb" },
        ]
      },
    ]
  });
  return AggIrregularityremarks;
  }
}
