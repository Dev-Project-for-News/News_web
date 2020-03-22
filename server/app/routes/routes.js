module.exports = app => {
  const news = require("../controllers/controller.js");

  var router = require("express").Router();

  // Create a new News
  router.post("/create", news.create);

  // Retrieve all News
  router.get("/", news.findAll);

  // Retrieve all News in topic
  router.get("/topic/:topic", news.findAllNewsInTopic);

  // Retrieve all News in source
  router.get("/source/:source", news.findAllNewsInSource);

  // Retrieve a single News with id
  router.get("/:id", news.findOne);

  // Update a News with id
  router.put("/:id", news.update);

  // Delete a News with id
  router.delete("/:id", news.delete);

  // Create a new News
  router.delete("/", news.deleteAll);

  app.use('/api/test', router);
};
