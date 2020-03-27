const db = require("../models");
const News = db.news;
const Topic = db.topic;
const Source = db.sorce;
const Op = db.Sequelize.Op;

// ----------------------- NEWS -------------------------------------

// Create and Save a new New
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a News
  const _news = {
    topic: req.body.topic,
    title: req.body.title,
    ann: req.body.ann,
    date: req.body.date,
    source: req.body.source,
    url: req.body.url, // url: req.body.url ? req.body.url : "not url",
    text: req.body.text
  };

  // Save News in the database
  News.create(_news)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the News."
      });
    });
};

// Retrieve all News from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  News.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving news."
      });
    });
};

// Find a single News with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  News.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving News with id=" + id
      });
    });
};

// Update a News by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  News.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "News was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update News with id=${id}. Maybe News was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating News with id=" + id
      });
    });
};

// Delete a News with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  News.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "News was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete News with id=${id}. Maybe News was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete News with id=" + id
      });
    });
};

// Delete all News from the database.
exports.deleteAll = (req, res) => {
  News.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} News were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all news."
      });
    });
};

// ----------------------- END --------------------------------

// ----------------------- TOPIC -------------------------------

exports.findTopic = (req, res) => {
  const id = req.params.id;

  Topic.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving News with id=" + id
      });
    });
};
// 
exports.findAllNewsInTopic = (req, res) => {
  const _topic = req.params.topic;

    News.findAll({
      where: {
        topic: _topic
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving news."
        });
      });
  };

// ----------------------- END --------------------------------

// ----------------------- SOURCE ------------------------------

exports.findSource = (req, res) => {
  const id = req.params.id;

  Source.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving News with id=" + id
      });
    });
};

// find all News in source
exports.findAllNewsInSource = (req, res) => {
  const _source = req.params.source;

    News.findAll({
      where: {
        source: _source
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving news."
        });
      });
};

// ----------------------- END --------------------------------