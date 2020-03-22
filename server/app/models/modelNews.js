module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define("news", {
    topic: {
      type: Sequelize.TEXT('tiny') 
    },
    title: {
      type: Sequelize.STRING(106)
    },
    ann: {
      type: Sequelize.TEXT
    },
    date: {
      type: Sequelize.STRING(10)
    },
    source: {
      type: Sequelize.TEXT('tiny') 
    },
    url: {
      type: Sequelize.STRING(69)
    },
    text: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  }
  );

  return News;
};
