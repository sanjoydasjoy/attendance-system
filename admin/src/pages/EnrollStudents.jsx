import React, { useState } from 'react';

const EnrollStudents = () => {
  // Sample data for courses
  const [courses, setCourses] = useState([
    { id: 101, name: 'Mathematics 101' },
    { id: 102, name: 'Physics 101' },
    { id: 103, name: 'Chemistry 101' },
  ]);

  // State for student enrollment form
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState([]);

  // Handle manual enrollment
  const handleEnrollStudent = () => {
    if (studentName && studentID && studentEmail && selectedCourse) {
      setEnrollmentStatus([
        ...enrollmentStatus,
        { name: studentName, id: studentID, email: studentEmail, course: selectedCourse },
      ]);
      setStudentName('');
      setStudentID('');
      setStudentEmail('');
      setSelectedCourse('');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  // Handle CSV upload (just a mock-up, no actual upload)
  const handleCSVUpload = (e) => {
    alert('CSV file uploaded!');
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Enroll Students</h1>

      {/* Manual Enrollment Form */}
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Student Name" 
          className="border p-2 rounded"
          onChange={(e) => setStudentName(e.target.value)} 
          value={studentName}
        />
        <input 
          type="text" 
          placeholder="Student ID" 
          className="border p-2 rounded"
          onChange={(e) => setStudentID(e.target.value)} 
          value={studentID}
        />
        <input 
          type="email" 
          placeholder="Student Email" 
          className="border p-2 rounded"
          onChange={(e) => setStudentEmail(e.target.value)} 
          value={studentEmail}
        />
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
          onClick={handleEnrollStudent}
        >
          Enroll Student
        </button>
      </div>

      {/* Bulk CSV Upload */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Bulk Upload</h2>
        <input type="file" onChange={handleCSVUpload} className="border p-2 rounded" />
      </div>

      {/* Enrollment Status */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Enrollment Status</h2>
        <ul className="list-disc pl-5">
          {enrollmentStatus.map((status, index) => (
            <li key={index} className="text-gray-600">
              {status.name} ({status.id}) has been enrolled in {status.course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnrollStudents;
