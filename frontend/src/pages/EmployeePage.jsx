import { useEffect, useState } from "react";
import EmployeeService from "../services/employeeService";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";
import { X } from "lucide-react";

export default function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");

  const loadEmployees = async () => {
    try {
      const data = await EmployeeService.getAllEmployees();
      setEmployees(data);
    } catch (err) {
      alert("Failed to load employees. Check console for details.");
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleAddOrUpdate = async (employee) => {
    try {
      if (editingEmployee) {
        await EmployeeService.updateEmployee(editingEmployee.id, employee);
      } else {
        await EmployeeService.createEmployee(employee);
      }
      setEditingEmployee(null);
      loadEmployees();
    } catch (err) {
      alert("Error saving employee.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this employee?")) {
      try {
        await EmployeeService.deleteEmployee(id);
        loadEmployees();
      } catch (err) {
        alert("Error deleting employee.");
      }
    }
  };

  const filteredEmployees = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Employee Management
      </h1>

      {/* Add Employee Form */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Add Employee</h2>
        <EmployeeForm onSubmit={handleAddOrUpdate} />
      </div>

      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Employee Table */}
      <EmployeeList
        employees={filteredEmployees}
        onEdit={setEditingEmployee}
        onDelete={handleDelete}
      />

      {/* Edit Modal */}
      {editingEmployee && (
        <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-40">
          <div className="bg-white rounded shadow-lg p-6 w-96 relative z-50">
            <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
            <EmployeeForm
              onSubmit={handleAddOrUpdate}
              editingEmployee={editingEmployee}
              cancelEdit={() => setEditingEmployee(null)}
            />
            <button
              onClick={() => setEditingEmployee(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
