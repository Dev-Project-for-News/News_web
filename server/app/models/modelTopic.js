module.exports = (sequelize, Sequelize) => {
  const Topic = sequelize.define("topic", {
    name: {
      type: Sequelize.STRING(13)
    }
  },
  {
    timestamps: false
  }
  );

  return Topic;
};
