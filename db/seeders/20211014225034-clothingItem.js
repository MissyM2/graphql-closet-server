'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'ClothingItems',
      [
        {
          id: 1,
          userId: 1,
          season: 'Spring',
          color: 'black',
          appareltype: 'shirt',
          shortdesc: 'long-sleeve casual',
          longdesc: 'Lorem ipsum, Dolor sit, Consectetuer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 1,
          season: 'Summer',
          color: 'white',
          appareltype: 'shirt',
          shortdesc: 'short-sleeve casual',
          longdesc: 'Lorem ipsum, Dolor sit, Consectetuer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          userId: 2,
          season: 'Spring',
          color: 'Yello',
          appareltype: 'shirt',
          shortdesc: 'long-sleeve casual',
          longdesc: 'Lorem ipsum, Dolor sit, Consectetuer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          userId: 2,
          season: 'Fall',
          color: 'black',
          appareltype: 'pants',
          shortdesc: 'flared corduroy',
          longdesc: 'Lorem ipsum, Dolor sit, Consectetuer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ClothingItems');
  },
};
