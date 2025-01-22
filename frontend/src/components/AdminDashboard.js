import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");

  // Fetch complaints from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/complaints")
      .then((response) => {
        setComplaints(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      });
  }, []);

  // Handle status update
  const handleStatusChange = (complaintId, newStatus) => {
    axios
      .put(`http://localhost:5000/complaints/${complaintId}`, {
        status: newStatus,
      })
      .then((response) => {
        setComplaints(
          complaints.map((complaint) =>
            complaint._id === complaintId ? response.data : complaint
          )
        );
      })
      .catch((error) => {
        console.error("Error updating complaint status:", error);
      });
  };

  // Filter complaints based on status and priority
  const filteredComplaints = complaints.filter((complaint) => {
    return (
      (filterStatus === "All" || complaint.status === filterStatus) &&
      (filterPriority === "All" || complaint.priority === filterPriority)
    );
  });

  return (
    <div>
      <h1>Admin Dashboard - Complaint Management</h1>

      {/* Filter Controls */}
      <div>
        <label>Filter by Status:</label>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <label>Filter by Priority:</label>
        <select onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Complaints Table */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Date Submitted</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.title}</td>
              <td>{complaint.category}</td>
              <td>{complaint.priority}</td>
              <td>{new Date(complaint.dateSubmitted).toLocaleString()}</td>
              <td>
                <select
                  value={complaint.status}
                  onChange={(e) =>
                    handleStatusChange(complaint._id, e.target.value)
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
              <td>
                <button onClick={() => alert(JSON.stringify(complaint))}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
