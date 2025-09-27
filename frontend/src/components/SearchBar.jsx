export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search employees..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
