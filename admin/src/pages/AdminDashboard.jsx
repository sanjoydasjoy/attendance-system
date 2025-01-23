import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AdminDashboard = () => {
  // Sample data for Admin Dashboard
  const activeCourses = 15;
  const activeTeachers = 10;
  const totalStudents = 250;

  const attendanceStatistics = {
    totalClasses: 100,
    attendedClasses: 90,
    attendancePercentage: (90 / 100) * 100,
  };

  const recentActivity = [
    'Created new course "Mathematics 101"',
    'Assigned new roles to teachers',
    'Enrolled 30 students in Physics 101',
    'Updated course schedule for Computer Science 101',
  ];

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg space-y-6">
      {/* Header Section */}
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Active Courses</h2>
          <p className="text-gray-600 mt-2">{activeCourses} courses are currently active</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Active Teachers</h2>
          <p className="text-gray-600 mt-2">{activeTeachers} teachers are assigned</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Students</h2>
          <p className="text-gray-600 mt-2">{totalStudents} students are enrolled</p>
        </div>
      </div>

      {/* Attendance Statistics Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700">Attendance Statistics</h2>
        <p className="text-gray-600 mt-2">Total Classes: {attendanceStatistics.totalClasses}</p>
        <p className="text-gray-600">Attended Classes: {attendanceStatistics.attendedClasses}</p>
        <p className={`text-gray-600 ${attendanceStatistics.attendancePercentage < 75 ? 'text-red-500' : 'text-green-500'}`}>
          Attendance: {attendanceStatistics.attendancePercentage.toFixed(2)}%
        </p>
      </div>

      {/* Quick Actions Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/create-courses">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center shadow cursor-pointer">
            <h3 className="text-xl font-semibold">Create Course</h3>
          </div>
        </Link>
        <Link to="/admin/assign-roles">
          <div className="bg-green-500 text-white p-4 rounded-lg text-center shadow cursor-pointer">
            <h3 className="text-xl font-semibold">Assign Roles</h3>
          </div>
        </Link>
        <Link to="/admin/enroll-students">
          <div className="bg-yellow-500 text-white p-4 rounded-lg text-center shadow cursor-pointer">
            <h3 className="text-xl font-semibold">Enroll Students</h3>
          </div>
        </Link>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700">Recent Activity</h2>
        <ul className="list-disc pl-5 mt-2">
          {recentActivity.map((activity, index) => (
            <li key={index} className="text-gray-600">{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
