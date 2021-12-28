import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggRebookingsCancellationsAttributes {
  id: number;
  month?: string;
  hawb?: string;
  mb?: string;
  shipper_reference?: string;
  origin?: string;
  destination?: string;
  airline?: string;
  numof_rebookings_shipment?: number;
  rebooked_last72h?: number;
  cancellation_charge?: number;
  amount_paid?: number;
  cost_avoidance?: number;
  comments?: string;
  createdAt?: Date;
  updatedAt?: Date;
  year_number?: string;
}

export type AggRebookingsCancellationsPk = "id";
export type AggRebookingsCancellationsId = AggRebookingsCancellations[AggRebookingsCancellationsPk];
export type AggRebookingsCancellationsOptionalAttributes = "id" | "month" | "hawb" | "mb" | "shipper_reference" | "origin" | "destination" | "airline" | "numof_rebookings_shipment" | "rebooked_last72h" | "cancellation_charge" | "amount_paid" | "cost_avoidance" | "comments" | "createdAt" | "updatedAt" | "year_number";
export type AggRebookingsCancellationsCreationAttributes = Optional<AggRebookingsCancellationsAttributes, AggRebookingsCancellationsOptionalAttributes>;

export class AggRebookingsCancellations extends Model<AggRebookingsCancellationsAttributes, AggRebookingsCancellationsCreationAttributes> implements AggRebookingsCancellationsAttributes {
  id!: number;
  month?: string;
  hawb?: string;
  mb?: string;
  shipper_reference?: string;
  origin?: string;
  destination?: string;
  airline?: string;
  numof_rebookings_shipment?: number;
  rebooked_last72h?: number;
  cancellation_charge?: number;
  amount_paid?: number;
  cost_avoidance?: number;
  comments?: string;
  createdAt?: Date;
  updatedAt?: Date;
  year_number?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggRebookingsCancellations {
    AggRebookingsCancellations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    month: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shipper_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    airline: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    numof_rebookings_shipment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rebooked_last72h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancellation_charge: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    amount_paid: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cost_avoidance: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_rebookings_cancellations',
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
    ]
  });
  return AggRebookingsCancellations;
  }
}
