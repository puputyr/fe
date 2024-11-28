import React, { useState } from "react";

const TableAdmin = () => {
  const initialEntries = [
    { no: 1, name: "Ahnya", email: "Putyasn@gmail.com", city: "Tang City Club", role: "Tim Medis", status: "Active" },
    { no: 2, name: "PT B", email: "Putyasn@gmail.com", city: "Grand City Mall Surabaya Club", role: "Tim Keamanan", status: "Inactive" },
    { no: 3, name: "Charlie Van Hoten", email: "Putyasn@gmail.com", city: "Grand City Mall Surabaya Club", role: "Psikolog", status: "Active" },
    { no: 4, name: "Diana", email: "diana@gmail.com", city: "Jakarta City", role: "Tim Medis", status: "Inactive" },
    { no: 5, name: "Eka", email: "eka@gmail.com", city: "Bandung Club", role: "Psikolog", status: "Active" },
    { no: 6, name: "Fiona", email: "fiona@gmail.com", city: "Jakarta City Club", role: "Tim Keamanan", status: "Inactive" },
    { no: 7, name: "Garry", email: "garry@gmail.com", city: "Surabaya City Club", role: "Psikolog", status: "Active" },
    { no: 8, name: "Hanna", email: "hanna@gmail.com", city: "Bandung City", role: "Tim Medis", status: "Active" },
    { no: 9, name: "Ivan", email: "ivan@gmail.com", city: "Malang Club", role: "Tim Keamanan", status: "Inactive" },
    { no: 10, name: "Jack", email: "jack@gmail.com", city: "Depok City Club", role: "Psikolog", status: "Active" },
    { no: 11, name: "Karen", email: "karen@gmail.com", city: "Bali City Club", role: "Tim Medis", status: "Inactive" },
    { no: 12, name: "Leon", email: "leon@gmail.com", city: "Jakarta Club", role: "Tim Keamanan", status: "Active" },
    { no: 13, name: "Mia", email: "mia@gmail.com", city: "Surabaya City", role: "Psikolog", status: "Active" },
    { no: 14, name: "Nina", email: "nina@gmail.com", city: "Jakarta City Club", role: "Tim Medis", status: "Inactive" },
    { no: 15, name: "Oscar", email: "oscar@gmail.com", city: "Bandung Club", role: "Tim Keamanan", status: "Active" },
    { no: 16, name: "Paul", email: "paul@gmail.com", city: "Tang City Club", role: "Psikolog", status: "Inactive" },
    { no: 17, name: "Quincy", email: "quincy@gmail.com", city: "Jakarta Club", role: "Tim Medis", status: "Active" },
    { no: 18, name: "Rachel", email: "rachel@gmail.com", city: "Depok Club", role: "Tim Keamanan", status: "Inactive" },
    { no: 19, name: "Steven", email: "steven@gmail.com", city: "Surabaya Club", role: "Psikolog", status: "Active" },
    { no: 20, name: "Tina", email: "tina@gmail.com", city: "Bali City Club", role: "Tim Medis", status: "Active" },
    { no: 21, name: "Uma", email: "uma@gmail.com", city: "Jakarta Club", role: "Tim Keamanan", status: "Inactive" },
    { no: 22, name: "Victor", email: "victor@gmail.com", city: "Bandung Club", role: "Psikolog", status: "Active" },
    { no: 23, name: "Wendy", email: "wendy@gmail.com", city: "Tang City Club", role: "Tim Medis", status: "Inactive" },
    { no: 24, name: "Xander", email: "xander@gmail.com", city: "Malang Club", role: "Tim Keamanan", status: "Active" },
    { no: 25, name: "Yara", email: "yara@gmail.com", city: "Depok Club", role: "Psikolog", status: "Active" },
    { no: 26, name: "Zara", email: "zara@gmail.com", city: "Bali Club", role: "Tim Medis", status: "Inactive" },
    { no: 27, name: "Abby", email: "abby@gmail.com", city: "Jakarta Club", role: "Tim Keamanan", status: "Active" },
    { no: 28, name: "Bella", email: "bella@gmail.com", city: "Bandung Club", role: "Psikolog", status: "Inactive" },
    { no: 29, name: "Chris", email: "chris@gmail.com", city: "Tang City Club", role: "Tim Medis", status: "Active" },
    { no: 30, name: "Derek", email: "derek@gmail.com", city: "Malang Club", role: "Tim Keamanan", status: "Inactive" },
    // Tambahkan data lainnya di sini
  ];

  const [entries] = useState(initialEntries);
  const [filteredEntries, setFilteredEntries] = useState(initialEntries);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedRole, setSelectedRole] = useState("");

  // Hitung data berdasarkan pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

  // Fungsi untuk berpindah halaman
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

  // Fungsi untuk mengubah jumlah data per halaman
  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset ke halaman pertama
  };

  // Fungsi untuk filter berdasarkan role
  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    filterEntries(searchQuery, role);
    setCurrentPage(1); // Reset ke halaman pertama
  };

  // Fungsi untuk search
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterEntries(query, selectedRole);
    setCurrentPage(1); // Reset ke halaman pertama
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
          entry.city.toLowerCase().includes(query)
      );
    }

    setFilteredEntries(filtered);
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
            <th className="border border-gray-300 px-4 py-2">Kota</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{entry.no}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.name}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.email}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.city}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    entry.status === "Active"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {entry.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="text-blue-600">🔍</button>
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
