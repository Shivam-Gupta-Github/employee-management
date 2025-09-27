import axios from "axios";

const API_URL = "http://localhost:5000/api/employees";

class EmployeeService {
  async getAllEmployees() {
    try {
      const { data } = await axios.get(API_URL);
      return data;
    } catch (err) {
      console.error("Error fetching employees:", err);
      throw err;
    }
  }

  async getEmployeeById(id) {
    try {
      const { data } = await axios.get(`${API_URL}/${id}`);
      return data;
    } catch (err) {
      console.error(`Error fetching employee ${id}:`, err);
      throw err;
    }
  }

  async createEmployee(employee) {
    try {
      const { data } = await axios.post(API_URL, employee);
      return data;
    } catch (err) {
      console.error("Error creating employee:", err);
      throw err;
    }
  }

  async updateEmployee(id, employee) {
    try {
      const { data } = await axios.put(`${API_URL}/${id}`, employee);
      return data;
    } catch (err) {
      console.error(`Error updating employee ${id}:`, err);
      throw err;
    }
  }

  async deleteEmployee(id) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return true;
    } catch (err) {
      console.error(`Error deleting employee ${id}:`, err);
      throw err;
    }
  }
}

export default new EmployeeService();
