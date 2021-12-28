import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FactOperationalData, FactOperationalDataId } from './FactOperationalData';

export interface DimPortofOriginAttributes {
  id: number;
  origin_country?: string;
  org?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type DimPortofOriginPk = "id";
export type DimPortofOriginId = DimPortofOrigin[DimPortofOriginPk];
export type DimPortofOriginOptionalAttributes = "id" | "origin_country" | "org" | "createdAt" | "updatedAt" | "deletedAt";
export type DimPortofOriginCreationAttributes = Optional<DimPortofOriginAttributes, DimPortofOriginOptionalAttributes>;

export class DimPortofOrigin extends Model<DimPortofOriginAttributes, DimPortofOriginCreationAttributes> implements DimPortofOriginAttributes {
  id!: number;
  origin_country?: string;
  org?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // DimPortofOrigin hasMany FactOperationalData via org_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DimPortofOrigin {
    DimPortofOrigin.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    org: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_portof_origin',
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
  return DimPortofOrigin;
  }
}
