import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FactOperationalData, FactOperationalDataId } from './FactOperationalData';

export interface DimConsigneeAttributes {
  id: number;
  Consignee_city?: string;
  Consignee_name?: string;
  Consignee_reference?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type DimConsigneePk = "id";
export type DimConsigneeId = DimConsignee[DimConsigneePk];
export type DimConsigneeOptionalAttributes = "id" | "Consignee_city" | "Consignee_name" | "Consignee_reference" | "createdAt" | "updatedAt" | "deletedAt";
export type DimConsigneeCreationAttributes = Optional<DimConsigneeAttributes, DimConsigneeOptionalAttributes>;

export class DimConsignee extends Model<DimConsigneeAttributes, DimConsigneeCreationAttributes> implements DimConsigneeAttributes {
  id!: number;
  Consignee_city?: string;
  Consignee_name?: string;
  Consignee_reference?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // DimConsignee hasMany FactOperationalData via consignee_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DimConsignee {
    DimConsignee.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Consignee_city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Consignee_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Consignee_reference: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_Consignee',
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
  return DimConsignee;
  }
}
