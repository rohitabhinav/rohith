import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FileStatusAttributes {
  id: number;
  fileid?: string;
  originalfilename?: string;
  newfilename?: string;
  filestatus?: string;
}

export type FileStatusPk = "id";
export type FileStatusId = FileStatus[FileStatusPk];
export type FileStatusOptionalAttributes = "id" | "fileid" | "originalfilename" | "newfilename" | "filestatus";
export type FileStatusCreationAttributes = Optional<FileStatusAttributes, FileStatusOptionalAttributes>;

export class FileStatus extends Model<FileStatusAttributes, FileStatusCreationAttributes> implements FileStatusAttributes {
  id!: number;
  fileid?: string;
  originalfilename?: string;
  newfilename?: string;
  filestatus?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof FileStatus {
    FileStatus.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fileid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    originalfilename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    newfilename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    filestatus: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'file_status',
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
  return FileStatus;
  }
}
