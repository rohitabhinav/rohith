import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LatestImshipmentIdAttributes {
  parent_id?: number;
  max_shipment_id?: number;
}

export type LatestImshipmentIdOptionalAttributes = "parent_id" | "max_shipment_id";
export type LatestImshipmentIdCreationAttributes = Optional<LatestImshipmentIdAttributes, LatestImshipmentIdOptionalAttributes>;

export class LatestImshipmentId extends Model<LatestImshipmentIdAttributes, LatestImshipmentIdCreationAttributes> implements LatestImshipmentIdAttributes {
  parent_id?: number;
  max_shipment_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof LatestImshipmentId {
    LatestImshipmentId.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_shipment_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'latest_imshipment_id',
    timestamps: false
  });
  return LatestImshipmentId;
  }
}
