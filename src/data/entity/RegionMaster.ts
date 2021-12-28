import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RegionMasterAttributes {
  id: number;
  Country_name?: string;
  Region_name?: string;
  Business_Unit?: string;
  ISO2LetterCode?: string;
  ISO3LetterCode?: string;
  Numeric?: number;
  createdAt?: string;
  latitude?: number;
  longitude?: number;
  dest_latitude?: number;
  dest_longitude?: number;
}

export type RegionMasterPk = "id";
export type RegionMasterId = RegionMaster[RegionMasterPk];
export type RegionMasterOptionalAttributes = "id" | "Country_name" | "Region_name" | "Business_Unit" | "ISO2LetterCode" | "ISO3LetterCode" | "Numeric" | "createdAt" | "latitude" | "longitude" | "dest_latitude" | "dest_longitude";
export type RegionMasterCreationAttributes = Optional<RegionMasterAttributes, RegionMasterOptionalAttributes>;

export class RegionMaster extends Model<RegionMasterAttributes, RegionMasterCreationAttributes> implements RegionMasterAttributes {
  id!: number;
  Country_name?: string;
  Region_name?: string;
  Business_Unit?: string;
  ISO2LetterCode?: string;
  ISO3LetterCode?: string;
  Numeric?: number;
  createdAt?: string;
  latitude?: number;
  longitude?: number;
  dest_latitude?: number;
  dest_longitude?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof RegionMaster {
    RegionMaster.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Country_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Region_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Business_Unit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ISO2LetterCode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ISO3LetterCode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Numeric: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    dest_latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    dest_longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RegionMaster',
    timestamps: true,
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
        name: "shipment_country",
        using: "BTREE",
        fields: [
          { name: "ISO2LetterCode" },
        ]
      },
    ]
  });
  return RegionMaster;
  }
}
