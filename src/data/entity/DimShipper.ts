import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FactOperationalData, FactOperationalDataId } from './FactOperationalData';

export interface DimShipperAttributes {
  id: number;
  shipper_AccNumber?: string;
  shipper_name?: string;
  shipper_country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type DimShipperPk = "id";
export type DimShipperId = DimShipper[DimShipperPk];
export type DimShipperOptionalAttributes = "id" | "shipper_AccNumber" | "shipper_name" | "shipper_country" | "createdAt" | "updatedAt" | "deletedAt";
export type DimShipperCreationAttributes = Optional<DimShipperAttributes, DimShipperOptionalAttributes>;

export class DimShipper extends Model<DimShipperAttributes, DimShipperCreationAttributes> implements DimShipperAttributes {
  id!: number;
  shipper_AccNumber?: string;
  shipper_name?: string;
  shipper_country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // DimShipper hasMany FactOperationalData via shipper_id
  fact_operationalData!: FactOperationalData[];
  getFact_operationalData!: Sequelize.HasManyGetAssociationsMixin<FactOperationalData>;
  setFact_operationalData!: Sequelize.HasManySetAssociationsMixin<FactOperationalData, FactOperationalDataId>;
  addFact_operationalDatum!: Sequelize.HasManyAddAssociationMixin<FactOperationalData, FactOperationalDataId>;
  addFact_operationalData!: Sequelize.HasManyAddAssociationsMixin<FactOperationalData, FactOperationalDataId>;
  createFact_operationalDatum!: Sequelize.HasManyCreateAssociationMixin<FactOperationalData>;
  removeFact_operationalDatum!: Sequelize.HasManyRemoveAssociationMixin<FactOperationalData, FactOperationalDataId>;
  removeFact_operationalData!: Sequelize.HasManyRemoveAssociationsMixin<FactOperationalData, FactOperationalDataId>;
  hasFact_operationalDatum!: Sequelize.HasManyHasAssociationMixin<FactOperationalData, FactOperationalDataId>;
  hasFact_operationalData!: Sequelize.HasManyHasAssociationsMixin<FactOperationalData, FactOperationalDataId>;
  countFact_operationalData!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DimShipper {
    DimShipper.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shipper_AccNumber: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shipper_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_shipper',
    timestamps: true,
    paranoid: true,
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
  return DimShipper;
  }
}
