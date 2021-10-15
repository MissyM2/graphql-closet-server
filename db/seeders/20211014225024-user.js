'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          fname: 'Missy',
          lname: 'Maloney',
          username: 'missym2',
          email: 'missy@maloney.com',
          password: 'missypass1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          fname: 'Joanne',
          lname: 'Lyons',
          username: 'joannel2',
          email: 'joanne@lyons.com',
          password: 'joannepass1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users');
  },
};
