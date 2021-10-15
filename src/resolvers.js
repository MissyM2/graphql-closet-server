const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    async getAllClothingItems(root, args, { models }) {
      return models.ClothingItem.findAll();
    },
    async getSingleClothingItem(root, { id }, { models }) {
      return models.ClothingItem.findByPk(id);
    },
  },

  Mutation: {
    async createUser(
      root,
      { fname, lname, username, email, password },
      { models }
    ) {
      return models.User.create({
        fname,
        lname,
        username,
        email,
        password: await bcrypt.hash(password, 10),
      });
    },
    async createClothingItem(
      root,
      { userId, season, color, appareltype, shortdesc, longdesc },
      { models }
    ) {
      return models.ClothingItem.create({
        userId,
        season,
        color,
        appareltype,
        shortdesc,
        longdesc,
      });
    },
  },

  User: {
    async clothingItem(user) {
      return user.getClothingItem();
    },
  },
  ClothingItem: {
    async user(clothingItem) {
      return clothingItem.getUser();
    },
  },
};

module.exports = resolvers;
