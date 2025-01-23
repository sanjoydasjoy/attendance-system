import React, { useState } from 'react';

const ViewAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { student: 'John Doe', date: '2025-01-15', status: 'Present' },
    { student: 'Jane Smith', date: '2025-01-15', status: 'Absent' },
    { student: 'Michael Johnson', date: '2025-01-14', status: 'Present' },
  ]);

  const handleEditAttendance = (index) => {
    // Handle attendance edit logic here
    alert(`Editing attendance for ${attendanceData[index].student}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Attendance for CS101</h1>

      {/* Filter Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Filter Attendance</h2>
        <div className="flex gap-4">
          <input type="date" className="p-2 border rounded" placeholder="Start Date" />
          <input type="date" className="p-2 border rounded" placeholder="End Date" />
          <input type="text" className="p-2 border rounded" placeholder="Search by Student" />
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 border-b">Student</th>
              <th className="p-4 border-b">Date</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 border-b">{record.student}</td>
                <td className="p-4 border-b">{record.date}</td>
                <td className="p-4 border-b">{record.status}</td>
                <td className="p-4 border-b">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEditAttendance(index)}
                  >
                    Edit Attendance
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Attendance */}
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
          Download Report (PDF/Excel)
        </button>
      </div>
    </div>
  );
};

export default ViewAttendance;
