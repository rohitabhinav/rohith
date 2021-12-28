import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggCostgrpshipmentsAttributes {
  origin_code: string;
  destination_code: string;
  shipper: string;
  lspOrgName: string;
  month?: string;
  year?: number;
  noofshipments: number;
  noofhawbs: number;
  totalcost?: number;
}

export type AggCostgrpshipmentsOptionalAttributes = "origin_code" | "destination_code" | "shipper" | "lspOrgName" | "month" | "year" | "noofshipments" | "noofhawbs" | "totalcost";
export type AggCostgrpshipmentsCreationAttributes = Optional<AggCostgrpshipmentsAttributes, AggCostgrpshipmentsOptionalAttributes>;

export class AggCostgrpshipments extends Model<AggCostgrpshipmentsAttributes, AggCostgrpshipmentsCreationAttributes> implements AggCostgrpshipmentsAttributes {
  origin_code!: string;
  destination_code!: string;
  shipper!: string;
  lspOrgName!: string;
  month?: string;
  year?: number;
  noofshipments!: number;
  noofhawbs!: number;
  totalcost?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggCostgrpshipments {
    AggCostgrpshipments.init({
    origin_code: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    destination_code: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    shipper: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    lspOrgName: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    month: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    noofshipments: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    noofhawbs: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    totalcost: {
      type: DataTypes.DOUBLE(17,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_costgrpshipments',
    timestamps: false
  });
  return AggCostgrpshipments;
  }
}
