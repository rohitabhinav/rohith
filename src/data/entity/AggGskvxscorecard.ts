import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggGskvxscorecardAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  month_number?: string;
  shipments?: string;
  rebookingdhl?: string;
  rebookinggsk?: string;
  reporting?: string;
  language?: string;
  complaints?: string;
  accuracy_document?: string;
  grass_ontime?: string;
  netontime?: string;
  infull?: string;
  damage?: string;
  coldchain?: string;
  nofreeze?: string;
  pickup?: string;
  deviation_management?: string;
}

export type AggGskvxscorecardPk = "id";
export type AggGskvxscorecardId = AggGskvxscorecard[AggGskvxscorecardPk];
export type AggGskvxscorecardOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "year_month" | "month_number" | "shipments" | "rebookingdhl" | "rebookinggsk" | "reporting" | "language" | "complaints" | "accuracy_document" | "grass_ontime" | "netontime" | "infull" | "damage" | "coldchain" | "nofreeze" | "pickup" | "deviation_management";
export type AggGskvxscorecardCreationAttributes = Optional<AggGskvxscorecardAttributes, AggGskvxscorecardOptionalAttributes>;

export class AggGskvxscorecard extends Model<AggGskvxscorecardAttributes, AggGskvxscorecardCreationAttributes> implements AggGskvxscorecardAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  month_number?: string;
  shipments?: string;
  rebookingdhl?: string;
  rebookinggsk?: string;
  reporting?: string;
  language?: string;
  complaints?: string;
  accuracy_document?: string;
  grass_ontime?: string;
  netontime?: string;
  infull?: string;
  damage?: string;
  coldchain?: string;
  nofreeze?: string;
  pickup?: string;
  deviation_management?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggGskvxscorecard {
    AggGskvxscorecard.init({
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
    month_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookingdhl: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookinggsk: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reporting: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    complaints: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    grass_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    infull: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nofreeze: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviation_management: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_gskvxscorecard',
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
        name: "shipments",
        using: "BTREE",
        fields: [
          { name: "shipments" },
        ]
      },
      {
        name: "rebookingdhl",
        using: "BTREE",
        fields: [
          { name: "rebookingdhl" },
        ]
      },
      {
        name: "rebookinggsk",
        using: "BTREE",
        fields: [
          { name: "rebookinggsk" },
        ]
      },
      {
        name: "grass_ontime",
        using: "BTREE",
        fields: [
          { name: "grass_ontime" },
        ]
      },
      {
        name: "netontime",
        using: "BTREE",
        fields: [
          { name: "netontime" },
        ]
      },
    ]
  });
  return AggGskvxscorecard;
  }
}
