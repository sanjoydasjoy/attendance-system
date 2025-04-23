**Title**: Class Attendance Management System using Facial Recognition  
**Link**: [ResearchGate Paper](https://www.researchgate.net/publication/343283987_Class_Attendance_Management_System_using_Facial_Recognition)

<br>

___

<br>

**Main Objectives**:

- To develop an automated system that records student attendance using facial recognition.
- To eliminate manual attendance processes, which are time-consuming and prone to human errors.
- To prevent proxy attendance by ensuring that only the registered students are marked present.

<br>

___

<br>

**What They Did**:

The authors proposed and implemented a facial recognition-based attendance system that captures students' facial images during a class session and automatically updates attendance records if the faces are matched successfully with a pre-registered database.

<br>

___

<br>

**How They Did It**:

The system follows a step-by-step workflow:

1. **Image Capturing**: The system uses a webcam to continuously capture frames during class.
2. **Face Detection**: Detected using the Haar Cascade Classifier, which identifies faces from the video feed.
3. **Face Recognition**: The Local Binary Pattern Histogram (LBPH) algorithm is used to recognize and match detected faces against the trained dataset of student images.
4. **Attendance Logging**: If a face is recognized, attendance is recorded automatically into a database; otherwise, unrecognized faces are stored for further verification.

The system is implemented using Python and OpenCV.

<br>

___

<br>

**Algorithms Used and How They Were Used**:

1. **Haar Cascade Classifier**:
   - Used for face detection in the captured video frames.
   - Based on machine learning with a set of positive and negative images.
   - Efficient for real-time applications.

2. **Local Binary Patterns Histogram (LBPH)**:
   - Used for face recognition.
   - Works by comparing local pixel patterns around a central pixel, converting the image into a binary representation, and creating a histogram of the resulting patterns.
   - Matches the test face image with the most similar face in the database using histogram comparison.

<br>

___

<br>

**Limitations**:

- **Lighting Sensitivity**: Recognition accuracy is affected under poor or inconsistent lighting conditions.
- **Facial Changes**: Variations such as different hairstyles, use of glasses, or facial expressions can reduce recognition accuracy.
- **Manual Verification**: Faces not recognized are stored in a separate database and require manual checking, which adds to the administrative burden.
- **Scalability Issues**: The system is not thoroughly tested for large-scale environments or with high student density.

<br>

___

<br>
