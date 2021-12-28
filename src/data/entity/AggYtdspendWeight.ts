import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggYtdspendWeightAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  totchargeable_weight?: string;
  total_cost?: string;
}

export type AggYtdspendWeightPk = "id";
export type AggYtdspendWeightId = AggYtdspendWeight[AggYtdspendWeightPk];
export type AggYtdspendWeightOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "year_month" | "totchargeable_weight" | "total_cost";
export type AggYtdspendWeightCreationAttributes = Optional<AggYtdspendWeightAttributes, AggYtdspendWeightOptionalAttributes>;

export class AggYtdspendWeight extends Model<AggYtdspendWeightAttributes, AggYtdspendWeightCreationAttributes> implements AggYtdspendWeightAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  totchargeable_weight?: string;
  total_cost?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggYtdspendWeight {
    AggYtdspendWeight.init({
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
    year_month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totchargeable_weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_cost: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_ytdspendWeight',
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
        name: "totchargeable_weight",
        using: "BTREE",
        fields: [
          { name: "totchargeable_weight" },
        ]
      },
      {
        name: "total_cost",
        using: "BTREE",
        fields: [
          { name: "total_cost" },
        ]
      },
    ]
  });
  return AggYtdspendWeight;
  }
}
