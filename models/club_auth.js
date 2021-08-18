const Sequelize = require("sequelize");

module.exports = class ClubAuth extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          // 소속 대학 ex> 인문대, ICT융합대
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        password: {
          // 전공
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "ClubAuth",
        tableName: "club_auth",
        timestamps: true,
        underscored: true,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
