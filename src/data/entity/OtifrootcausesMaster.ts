import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface OtifrootcausesMasterAttributes {
  id: number;
  otifrootcauses?: string;
}

export type OtifrootcausesMasterPk = "id";
export type OtifrootcausesMasterId = OtifrootcausesMaster[OtifrootcausesMasterPk];
export type OtifrootcausesMasterOptionalAttributes = "id" | "otifrootcauses";
export type OtifrootcausesMasterCreationAttributes = Optional<OtifrootcausesMasterAttributes, OtifrootcausesMasterOptionalAttributes>;

export class OtifrootcausesMaster extends Model<OtifrootcausesMasterAttributes, OtifrootcausesMasterCreationAttributes> implements OtifrootcausesMasterAttributes {
  id!: number;
  otifrootcauses?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof OtifrootcausesMaster {
    OtifrootcausesMaster.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    otifrootcauses: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'otifrootcauses_master',
    timestamps: false,
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
  return OtifrootcausesMaster;
  }
}
