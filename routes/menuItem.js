const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItems')
const authenticate = require('../middleware/authentication');
const authorize = require('../middleware/authorise');

// Create a new menu item
router.post('/', async (req, res) => {
  try {
    const menuItem = await MenuItem.create(req.body);
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.findAll();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single menu item by ID
router.get('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByPk(req.params.id);
    if (menuItem === null) {
      res.status(404).json({ message: 'Menu item not found' });
    } else {
      res.json(menuItem);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a menu item
router.put('/:id',authenticate, authorize(['admin']), async (req, res) => {
  try {
    const menuItem = await MenuItem.findByPk(req.params.id);
    if (menuItem === null) {
      res.status(404).json({ message: 'Menu item not found' });
    } else {
      await menuItem.update(req.body);
      res.json(menuItem);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a menu item
router.delete('/:id',authenticate, authorize(['admin']), async (req, res) => {
  try {
    const menuItem = await MenuItem.findByPk(req.params.id);
    if (menuItem === null) {
      res.status(404).json({ message: 'Menu item not found' });
    } else {
      await menuItem.destroy();
      res.json({ message: 'Menu item deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
