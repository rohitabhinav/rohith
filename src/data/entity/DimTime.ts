import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FactOperationalData, FactOperationalDataId } from './FactOperationalData';

export interface DimTimeAttributes {
  id: number;
  shipmentDate: string;
  month_number?: string;
  month?: string;
  year_number?: string;
  quarter?: string;
  year_quarter?: string;
  year_month?: string;
  day?: string;
  weekday?: string;
  weeknumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type DimTimePk = "shipmentDate";
export type DimTimeId = DimTime[DimTimePk];
export type DimTimeOptionalAttributes = "shipmentDate" | "month_number" | "month" | "year_number" | "quarter" | "year_quarter" | "year_month" | "day" | "weekday" | "weeknumber" | "createdAt" | "updatedAt" | "deletedAt";
export type DimTimeCreationAttributes = Optional<DimTimeAttributes, DimTimeOptionalAttributes>;

export class DimTime extends Model<DimTimeAttributes, DimTimeCreationAttributes> implements DimTimeAttributes {
  id!: number;
  shipmentDate!: string;
  month_number?: string;
  month?: string;
  year_number?: string;
  quarter?: string;
  year_quarter?: string;
  year_month?: string;
  day?: string;
  weekday?: string;
  weeknumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // DimTime hasMany FactOperationalData via dimtime_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DimTime {
    DimTime.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "id_UNIQUE"
    },
    shipmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    month_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    quarter: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_quarter: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    day: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    weekday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    weeknumber: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_time',
    hasTrigger: true,
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shipmentDate" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return DimTime;
  }
}
