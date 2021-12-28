import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvRebookingCancellationsAttributes {
  month?: string;
  hawb?: string;
  mb?: string;
  shipper_reference?: string;
  origin?: string;
  destination?: string;
  airline?: string;
  numof_rebookings_shipment?: string;
  cost_avoidance?: string;
  comments?: string;
  year_number?: string;
}

export type BvRebookingCancellationsOptionalAttributes = "month" | "hawb" | "mb" | "shipper_reference" | "origin" | "destination" | "airline" | "numof_rebookings_shipment" | "cost_avoidance" | "comments" | "year_number";
export type BvRebookingCancellationsCreationAttributes = Optional<BvRebookingCancellationsAttributes, BvRebookingCancellationsOptionalAttributes>;

export class BvRebookingCancellations extends Model<BvRebookingCancellationsAttributes, BvRebookingCancellationsCreationAttributes> implements BvRebookingCancellationsAttributes {
  month?: string;
  hawb?: string;
  mb?: string;
  shipper_reference?: string;
  origin?: string;
  destination?: string;
  airline?: string;
  numof_rebookings_shipment?: string;
  cost_avoidance?: string;
  comments?: string;
  year_number?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvRebookingCancellations {
    BvRebookingCancellations.init({
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    airline: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numof_rebookings_shipment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cost_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BV_rebooking_cancellations',
    timestamps: false
  });
  return BvRebookingCancellations;
  }
}
