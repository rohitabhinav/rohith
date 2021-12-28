import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FactOperationalData, FactOperationalDataId } from './FactOperationalData';

export interface DimPickupAttributes {
  id: number;
  pickupCity?: string;
  pickupAddress1?: string;
  pickupAddress2?: string;
  pickupZip?: string;
  pickuppartyType?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type DimPickupPk = "id";
export type DimPickupId = DimPickup[DimPickupPk];
export type DimPickupOptionalAttributes = "id" | "pickupCity" | "pickupAddress1" | "pickupAddress2" | "pickupZip" | "pickuppartyType" | "createdAt" | "updatedAt" | "deletedAt";
export type DimPickupCreationAttributes = Optional<DimPickupAttributes, DimPickupOptionalAttributes>;

export class DimPickup extends Model<DimPickupAttributes, DimPickupCreationAttributes> implements DimPickupAttributes {
  id!: number;
  pickupCity?: string;
  pickupAddress1?: string;
  pickupAddress2?: string;
  pickupZip?: string;
  pickuppartyType?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // DimPickup hasMany FactOperationalData via dimpickup_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DimPickup {
    DimPickup.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pickupCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pickupAddress2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pickupZip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickuppartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_pickup',
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
  return DimPickup;
  }
}
