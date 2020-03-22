module.exports = (sequelize, Sequelize) => {
  const Source = sequelize.define("source", {
    name: {
      type: Sequelize.STRING(13)
    }
  },
  {
    timestamps: false
  }
  );

  return Source;
};
