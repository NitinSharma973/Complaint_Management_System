const express = require("express");
const Complaint = require("../models/Complaint");
const sendEmail = require("../utils/email"); 
const router = express.Router();

// Create Complaint
router.post("/", async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;

    const newComplaint = new Complaint({
      title,
      description,
      category,
      priority,
      status: "Pending",
      dateSubmitted: new Date(),
    });

    await newComplaint.save();

    // Send email notification to admin
    const adminEmail = "ns7036678@example.com"; // Replace with admin's email
    const subject = "New Complaint Submitted";
    const text = `A new complaint has been submitted:\n\nTitle: ${title}\nCategory: ${category}\nPriority: ${priority}\nDescription: ${description}`;
    await sendEmail(adminEmail, subject, text);

    res.status(201).send(newComplaint);
  } catch (error) {
    res.status(400).send({ message: "Error creating complaint", error });
  }
});

// Get All Complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find(req.query);
    res.send(complaints);
  } catch (error) {
    res.status(500).send({ message: "Error fetching complaints", error });
  }
});

// Update Complaint
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!complaint) {
      return res.status(404).send({ message: "Complaint not found" });
    }

    // If the status is updated, send email notification
    if (status) {
      const adminEmail = "ns7036678@example.com"; // Replace with admin's email
      const subject = "Complaint Status Updated";
      const text = `The status of the complaint "${
        complaint.title
      }" has been updated to: ${status}.\nDate: ${new Date().toLocaleString()}`;
      await sendEmail(adminEmail, subject, text);
    }

    res.send(complaint);
  } catch (error) {
    res.status(400).send({ message: "Error updating complaint", error });
  }
});

// Delete Complaint
router.delete("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndDelete(req.params.id);

    if (!complaint) {
      return res.status(404).send({ message: "Complaint not found" });
    }

    res.send({ message: "Complaint deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting complaint", error });
  }
});

module.exports = router;
