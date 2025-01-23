import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AdminDashboard from './pages/AdminDashboard';
import CreateCourses from './pages/CreateCourses';
import AssignRoles from './pages/AssignRoles';
import EnrollStudents from './pages/EnrollStudents';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/create-courses" element={<CreateCourses />} />
            <Route path="/admin/assign-roles" element={<AssignRoles />} />
            <Route path="/admin/enroll-students" element={<EnrollStudents />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
