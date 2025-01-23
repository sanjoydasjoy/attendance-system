import React from 'react';

const StudentDashboard = () => {
  // Example data for the student dashboard
  const enrolledCourses = [
    { name: 'Mathematics', code: 'MATH101' },
    { name: 'Physics', code: 'PHYS101' },
    { name: 'Computer Science', code: 'CS101' },
  ];

  const attendanceData = {
    totalClasses: 30,
    attendedClasses: 25,
    attendancePercentage: (25 / 30) * 100,
  };

  const upcomingClasses = [
    { course: 'Mathematics', date: '2025-01-23', time: '10:00 AM' },
    { course: 'Physics', date: '2025-01-24', time: '2:00 PM' },
  ];

  const announcements = [
    'Exam schedules are out. Check your email for details.',
    'New course material for Computer Science has been uploaded.',
    'Attendance will be monitored strictly from next week.',
  ];

  // Alert if attendance is below 75%
  const attendanceAlert = attendanceData.attendancePercentage < 75 ? 'You are at risk of low attendance. Please attend more classes!' : '';

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg space-y-6">
      {/* Header Section */}
      <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>

      {/* Enrolled Courses */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700">Enrolled Courses</h2>
        <ul className="list-disc pl-5 mt-2">
          {enrolledCourses.map((course) => (
            <li key={course.code} className="text-gray-600">
              {course.name} ({course.code})
            </li>
          ))}
        </ul>
      </div>

      {/* Attendance Summary */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700">Attendance Summary</h2>
        <p className="text-gray-600 mt-2">Total Classes: {attendanceData.totalClasses}</p>
        <p className="text-gray-600">Attended Classes: {attendanceData.attendedClasses}</p>
        <p className={`text-gray-600 ${attendanceData.attendancePercentage < 75 ? 'text-red-500' : 'text-green-500'}`}>
          Attendance: {attendanceData.attendancePercentage.toFixed(2)}%
        </p>
        {attendanceAlert && (
          <p className="text-red-500 font-bold mt-2">{attendanceAlert}</p>
        )}
      </div>

      {/* Upcoming Classes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700">Upcoming Classes</h2>
        <ul className="mt-2">
          {upcomingClasses.map((cls, index) => (
            <li key={index} className="text-gray-600">
              <span className="font-semibold">{cls.course}</span> - {cls.date} at {cls.time}
            </li>
          ))}
        </ul>
      </div>

      {/* Announcements */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700">Announcements</h2>
        <ul className="list-disc pl-5 mt-2">
          {announcements.map((announcement, index) => (
            <li key={index} className="text-gray-600">{announcement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
