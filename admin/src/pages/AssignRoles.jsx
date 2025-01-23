import React, { useState } from 'react';

const AssignRoles = () => {
  // Sample state for teachers, courses, and selected roles
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ]);
  
  const [courses, setCourses] = useState([
    { id: 101, name: 'Mathematics 101' },
    { id: 102, name: 'Physics 101' },
    { id: 103, name: 'Chemistry 101' },
  ]);
  
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [assignedRoles, setAssignedRoles] = useState([]);
  
  const [classRep, setClassRep] = useState('');

  const handleAssignRole = () => {
    if (selectedTeacher && selectedCourse) {
      setAssignedRoles([...assignedRoles, { teacher: selectedTeacher, course: selectedCourse }]);
    }
  };

  const handleAssignClassRep = () => {
    if (classRep && selectedCourse) {
      alert(`Class Representative for ${selectedCourse} is ${classRep}`);
    }
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Assign Roles</h1>

      {/* Teacher and Course Selection */}
      <div className="space-y-4">
        <div className="flex space-x-4">
          <select 
            className="border p-2 rounded" 
            onChange={(e) => setSelectedTeacher(e.target.value)} 
            value={selectedTeacher}
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
            ))}
          </select>

          <select 
            className="border p-2 rounded" 
            onChange={(e) => setSelectedCourse(e.target.value)} 
            value={selectedCourse}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.name}>{course.name}</option>
            ))}
          </select>

          <button 
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleAssignRole}
          >
            Assign Role
          </button>
        </div>

        {/* Assign Class Representative */}
        <div className="flex space-x-4">
          <input 
            type="text" 
            placeholder="Class Rep Name" 
            className="border p-2 rounded"
            onChange={(e) => setClassRep(e.target.value)} 
            value={classRep}
          />
          <button 
            className="bg-green-500 text-white p-2 rounded"
            onClick={handleAssignClassRep}
          >
            Assign Class Rep
          </button>
        </div>
      </div>

      {/* Assigned Roles List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Assigned Roles</h2>
        <ul className="list-disc pl-5">
          {assignedRoles.map((role, index) => (
            <li key={index} className="text-gray-600">
              {role.teacher} is assigned to {role.course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignRoles;
