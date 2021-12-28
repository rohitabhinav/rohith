import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggLaneoverviewAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  lane?: string;
  totshipments?: string;
  totchargeable_weight?: string;
  ontime_perfomence?: string;
  infull_perfomence?: string;
  rebooked?: string;
  intact?: string;
  cold_chain?: string;
  frozen?: string;
}

export type AggLaneoverviewPk = "id";
export type AggLaneoverviewId = AggLaneoverview[AggLaneoverviewPk];
export type AggLaneoverviewOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "year_month" | "lane" | "totshipments" | "totchargeable_weight" | "ontime_perfomence" | "infull_perfomence" | "rebooked" | "intact" | "cold_chain" | "frozen";
export type AggLaneoverviewCreationAttributes = Optional<AggLaneoverviewAttributes, AggLaneoverviewOptionalAttributes>;

export class AggLaneoverview extends Model<AggLaneoverviewAttributes, AggLaneoverviewCreationAttributes> implements AggLaneoverviewAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  lane?: string;
  totshipments?: string;
  totchargeable_weight?: string;
  ontime_perfomence?: string;
  infull_perfomence?: string;
  rebooked?: string;
  intact?: string;
  cold_chain?: string;
  frozen?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggLaneoverview {
    AggLaneoverview.init({
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
    lane: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    totshipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totchargeable_weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ontime_perfomence: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    infull_perfomence: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    intact: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cold_chain: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    frozen: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_laneoverview',
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
        name: "totshipments",
        using: "BTREE",
        fields: [
          { name: "totchargeable_weight" },
        ]
      },
      {
        name: "totchargeable_weight",
        using: "BTREE",
        fields: [
          { name: "ontime_perfomence" },
        ]
      },
      {
        name: "rebooked",
        using: "BTREE",
        fields: [
          { name: "rebooked" },
        ]
      },
      {
        name: "intact",
        using: "BTREE",
        fields: [
          { name: "intact" },
        ]
      },
      {
        name: "cold_chain",
        using: "BTREE",
        fields: [
          { name: "cold_chain" },
        ]
      },
      {
        name: "frozen",
        using: "BTREE",
        fields: [
          { name: "frozen" },
        ]
      },
    ]
  });
  return AggLaneoverview;
  }
}
