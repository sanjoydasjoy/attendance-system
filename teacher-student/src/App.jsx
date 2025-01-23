import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ManageSchedules from './pages/ManageSchedules';
import ViewAttendance from './pages/ViewAttendance';
import ViewCourses from './pages/ViewCourses';
import AttendanceRecords from './pages/AttendanceRecords';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/manage-schedules" element={<ManageSchedules />} />
            <Route path="/teacher/view-attendance" element={<ViewAttendance />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/view-courses" element={<ViewCourses />} />
            <Route path="/student/attendance-records" element={<AttendanceRecords />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
