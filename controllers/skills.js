const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const skillsMiddleware = {
  getAll: async (req, res, next) => {
    try {
      const result = await mongodb
        .getDb()
        .db()
        .collection('skills')
        .find()
        .toArray();

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getOne: async (req, res, next) => {
    try {
      const skillId = new ObjectId(req.params.id);
      const result = await mongodb
        .getDb()
        .db()
        .collection('skills')
        .findOne({ _id: skillId });

      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ message: 'Skill not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  create: async (req, res, next) => {
    try {
      const newSkill = req.body;
      const result = await mongodb
        .getDb()
        .db()
        .collection('skills')
        .insertOne(newSkill);
      res.status(201).json({ id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  put: async (req, res, next) => {
    try {
      const skillId = new ObjectId(req.params.id);
      const updatedSkill = req.body;
      const result = await mongodb
        .getDb()
        .db()
        .collection('skills')
        .updateOne({ _id: skillId }, { $set: updatedSkill });

      if (result.modifiedCount === 1) {
        res.status(204).json({ message: 'Skill updated successfully' });
      } else {
        res.status(404).json({ message: 'Skill not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  delete: async (req, res, next) => {
    try {
      const skillId = new ObjectId(req.params.id);
      const result = await mongodb
        .getDb()
        .db()
        .collection('skills')
        .deleteOne({ _id: skillId });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Skill deleted successfully' });
      } else {
        res.status(404).json({ message: 'Skill not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = skillsMiddleware;