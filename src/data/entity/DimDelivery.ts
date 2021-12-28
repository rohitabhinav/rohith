import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FactOperationalData, FactOperationalDataId } from './FactOperationalData';

export interface DimDeliveryAttributes {
  id: number;
  deliveryCity?: string;
  deliveryAddress1?: string;
  deliveryAddress2?: string;
  deliveryZip?: string;
  delivery_mode?: string;
  deliveryPartyType?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type DimDeliveryPk = "id";
export type DimDeliveryId = DimDelivery[DimDeliveryPk];
export type DimDeliveryOptionalAttributes = "id" | "deliveryCity" | "deliveryAddress1" | "deliveryAddress2" | "deliveryZip" | "delivery_mode" | "deliveryPartyType" | "createdAt" | "updatedAt" | "deletedAt";
export type DimDeliveryCreationAttributes = Optional<DimDeliveryAttributes, DimDeliveryOptionalAttributes>;

export class DimDelivery extends Model<DimDeliveryAttributes, DimDeliveryCreationAttributes> implements DimDeliveryAttributes {
  id!: number;
  deliveryCity?: string;
  deliveryAddress1?: string;
  deliveryAddress2?: string;
  deliveryZip?: string;
  delivery_mode?: string;
  deliveryPartyType?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // DimDelivery hasMany FactOperationalData via dimdelivery_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DimDelivery {
    DimDelivery.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deliveryCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deliveryAddress2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deliveryZip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    delivery_mode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deliveryPartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_delivery',
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
  return DimDelivery;
  }
}
