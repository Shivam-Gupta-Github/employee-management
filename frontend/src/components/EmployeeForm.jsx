import { useState, useEffect } from "react";

export default function EmployeeForm({
  onSubmit,
  editingEmployee,
  cancelEdit,
}) {
  const [form, setForm] = useState({ name: "", email: "", position: "" });

  useEffect(() => {
    if (editingEmployee) setForm(editingEmployee);
  }, [editingEmployee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.position) {
      alert("All fields are required!");
      return;
    }
    onSubmit(form);
    setForm({ name: "", email: "", position: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-end gap-2 mt-2">
        {editingEmployee && (
          <button
            type="button"
            onClick={cancelEdit}
            className="px-4 py-2 rounded border hover:bg-gray-100"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {editingEmployee ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
