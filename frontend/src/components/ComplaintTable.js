import React, { useEffect, useState } from "react";
import {
  fetchComplaints,
  updateComplaint,
  deleteComplaint,
} from "../services/api";
import "./ComplaintTable.css";
const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const getComplaints = async () => {
      const response = await fetchComplaints();
      setComplaints(response.data);
    };
    getComplaints();
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateComplaint(id, { status });
    alert("Status updated!");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((c) => (
          <tr key={c._id}>
            <td>{c.title}</td>
            <td>{c.category}</td>
            <td>{c.priority}</td>
            <td>
              <select
                value={c.status}
                onChange={(e) => handleStatusChange(c._id, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComplaintTable;
