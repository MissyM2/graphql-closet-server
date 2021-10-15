'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClothingItem = sequelize.define(
    'ClothingItem',
    {
      season: { type: DataTypes.STRING, allowNull: false },
      color: { type: DataTypes.STRING, allowNull: false },
      appareltype: { type: DataTypes.STRING, allowNull: false },
      shortdesc: { type: DataTypes.STRING, allowNull: false },
      longdesc: { type: DataTypes.STRING },
    },
    {}
  );
  ClothingItem.associate = function (models) {
    ClothingItem.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ClothingItem;
};
