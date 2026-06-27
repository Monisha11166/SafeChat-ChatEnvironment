const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

// Add Contact
router.post("/add", async (req, res) => {
  try {
    const { userId, contactName, contactPhone } = req.body;

    const contact = new Contact({
      userId,
      contactName,
      contactPhone,
    });

    await contact.save();

    res.status(201).json({
      message: "Contact Added Successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Contacts
router.get("/:userId", async (req, res) => {
  try {
    const contacts = await Contact.find({
      userId: req.params.userId,
    });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }

    res.json({
      message: "Contact deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});
module.exports = router;