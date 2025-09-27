import { Pencil, Trash } from "lucide-react";
export default function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Position</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id} className="border-t">
                <td className="py-2 px-4">{emp.name}</td>
                <td className="py-2 px-4">{emp.email}</td>
                <td className="py-2 px-4">{emp.position}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button
                    onClick={() => onEdit(emp)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  >
                    <Pencil />
                  </button>
                  <button
                    onClick={() => onDelete(emp.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
