import axios from "axios";

const API_URL = "http://localhost:5000/complaints";

export const createComplaint = (data) => axios.post(API_URL, data);
export const fetchComplaints = (filters) =>
  axios.get(API_URL, { params: filters });
export const updateComplaint = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteComplaint = (id) => axios.delete(`${API_URL}/${id}`);
