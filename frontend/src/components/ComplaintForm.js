import React, { useState } from "react";
import { createComplaint } from "../services/api";
import "./ComplaintForm.css";
const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComplaint(formData);
    alert("Complaint submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      />
      <select name="category" onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Product">Product</option>
        <option value="Service">Service</option>
        <option value="Support">Support</option>
      </select>
      <div>
        <label>Priority:</label>
        <input
          type="radio"
          name="priority"
          value="Low"
          onChange={handleChange}
          defaultChecked
        />{" "}
        Low
        <input
          type="radio"
          name="priority"
          value="Medium"
          onChange={handleChange}
        />{" "}
        Medium
        <input
          type="radio"
          name="priority"
          value="High"
          onChange={handleChange}
        />{" "}
        High
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ComplaintForm;
