const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const spellsMiddleware = {
  getAll: async (req, res, next) => {
    try {
      const result = await mongodb
        .getDb()
        .db()
        .collection('spell_book')
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
      const userId = new ObjectId(req.params.id);
      const result = await mongodb
        .getDb()
        .db()
        .collection('spell_book')
        .findOne({ _id: userId });

      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ message: 'Spell not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  create: async (req, res, next) => {
    try {
      const newSpell = req.body;
      const result = await mongodb
        .getDb()
        .db()
        .collection('spell_book')
        .insertOne(newSpell);
      res.status(201).json({ id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  put: async (req, res, next) => {
    try {
      const spellId = new ObjectId(req.params.id);
      const updatedSpell = req.body;
      const result = await mongodb
        .getDb()
        .db()
        .collection('spell_book')
        .updateOne({ _id: spellId }, { $set: updatedSpell });

      if (result.modifiedCount === 1) {
        res.status(200).json({ message: 'Spell updated successfully' });
      } else {
        res.status(404).json({ message: 'Spell not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  delete: async (req, res, next) => {
    try {
      const spellId = new ObjectId(req.params.id);
      const result = await mongodb
        .getDb()
        .db()
        .collection('spell_book')
        .deleteOne({ _id: spellId });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Spell deleted successfully' });
      } else {
        res.status(404).json({ message: 'Spell not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = spellsMiddleware;