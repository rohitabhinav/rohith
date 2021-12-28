import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FactOperationalData, FactOperationalDataId } from './FactOperationalData';

export interface DimDestAttributes {
  id: number;
  destination_country?: string;
  destination_code?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type DimDestPk = "id";
export type DimDestId = DimDest[DimDestPk];
export type DimDestOptionalAttributes = "id" | "destination_country" | "destination_code" | "createdAt" | "updatedAt" | "deletedAt";
export type DimDestCreationAttributes = Optional<DimDestAttributes, DimDestOptionalAttributes>;

export class DimDest extends Model<DimDestAttributes, DimDestCreationAttributes> implements DimDestAttributes {
  id!: number;
  destination_country?: string;
  destination_code?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // DimDest hasMany FactOperationalData via dest_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DimDest {
    DimDest.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    destination_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destination_code: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_dest',
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
  return DimDest;
  }
}
