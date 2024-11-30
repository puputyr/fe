import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from 'react-icons/fa';

const TableAdmin = () => {
  const initialEntries = [
    { no: 1, name: "Ahnya", email: "Putyasn@gmail.com", location: "Tang City Club", role: "Tim Medis", status: "Active" },
    { no: 2, name: "PT B", email: "Putyasn@gmail.com", location: "Grand City Mall Surabaya Club", role: "Tim Keamanan", status: "Inactive" },
    { no: 3, name: "Charlie Van Hoten", email: "Putyasn@gmail.com", location: "Grand City Mall Surabaya Club", role: "Psikolog", status: "Active" },
    { no: 4, name: "Diana", email: "diana@gmail.com", location: "Jakarta City", role: "Tim Medis", status: "Inactive" },
    // Add more entries here...
  ];

  const [entries] = useState(initialEntries);
  const [filteredEntries, setFilteredEntries] = useState(initialEntries);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedRole, setSelectedRole] = useState("");

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

  // Functions for pagination
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredEntries.length / entriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  // Filter entries by search query and role
  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    filterEntries(searchQuery, role);
    setCurrentPage(1); // Reset to first page
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterEntries(query, selectedRole);
    setCurrentPage(1); // Reset to first page
  };

  const filterEntries = (query, role) => {
    let filtered = entries;

    if (role) {
      filtered = filtered.filter((entry) => entry.role === role);
    }

    if (query) {
      filtered = filtered.filter(
        (entry) =>
          entry.name.toLowerCase().includes(query) ||
          entry.email.toLowerCase().includes(query) ||
          entry.location.toLowerCase().includes(query) // Changed `city` to `location`
      );
    }

    setFilteredEntries(filtered);
  };

  // Handle edit and delete actions
  const handleEdit = (id) => {
    console.log("Edit entry with id:", id);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    console.log("Delete entry with id:", id);
    // Implement your delete logic here
  };

  return (
    <div className="p-6 w-full h-screen overflow-scroll">
      <h1 className="text-2xl font-semibold mb-4">Data Admin</h1>
      <div className="flex justify-between items-center mb-4">
        <select
          className="bg-purple-900 text-white border border-gray-300 rounded px-4 py-2"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="">Semua Role</option>
          <option value="Psikolog">Psikolog</option>
          <option value="Tim Medis">Tim Medis</option>
          <option value="Tim Keamanan">Tim Keamanan</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded px-4 py-2"
        />
        <button className="bg-purple-900 text-white px-4 py-2 rounded">+ Admin</button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Location</th> {/* Updated header */}
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((entry) => (
            <tr key={entry.no} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{entry.no}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.name}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.email}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.location}</td> {/* Updated column */}
              <td className="border border-gray-300 px-4 py-2">{entry.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${entry.status === "Active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}
                >
                  {entry.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleEdit(entry.no)}
                  className="text-blue-600 px-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(entry.no)}
                  className="text-red-600 px-2"
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={entriesPerPage}
          onChange={handleEntriesPerPageChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        <span>
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredEntries.length)} of {filteredEntries.length} entries
        </span>
        <div>
          <button
            className="px-4 py-2 border border-gray-300 rounded mr-2"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 border border-gray-300 rounded"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(filteredEntries.length / entriesPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableAdmin;
