import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const TeacherDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Teacher Dashboard</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Total Courses</h2>
          <p className="text-2xl font-bold text-blue-500">5</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Upcoming Classes</h2>
          <p className="text-2xl font-bold text-green-500">3</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Attendance Rate</h2>
          <p className="text-2xl font-bold text-red-500">85%</p>
        </div>
      </div>

      {/* Assigned Courses Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assigned Courses</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border-b">Course Name</th>
                <th className="p-4 border-b">Course Code</th>
                <th className="p-4 border-b">Students</th>
                <th className="p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border-b">Computer Science 101</td>
                <td className="p-4 border-b">CS101</td>
                <td className="p-4 border-b">45</td>
                <td className="p-4 border-b">
                  <Link to="/teacher/view-attendance/cs101" className="text-blue-500 hover:underline">View Attendance</Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border-b">Data Structures</td>
                <td className="p-4 border-b">CS201</td>
                <td className="p-4 border-b">38</td>
                <td className="p-4 border-b">
                  <Link to="/teacher/view-attendance/cs201" className="text-blue-500 hover:underline">View Attendance</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 flex gap-4">
        <Link to="/teacher/manage-schedules" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
          Manage Schedules
        </Link>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
          Assign CR
        </button>
      </div>

      {/* Notifications Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
        <ul className="bg-white shadow-md rounded-lg p-6">
          <li className="border-b pb-3 mb-3 text-gray-600">
            Upcoming class scheduled for "CS101" on Monday at 10 AM.
          </li>
          <li className="border-b pb-3 mb-3 text-gray-600">
            Attendance for "Data Structures" is below 75%.
          </li>
          <li className="text-gray-600">New students enrolled in "CS101".</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;
