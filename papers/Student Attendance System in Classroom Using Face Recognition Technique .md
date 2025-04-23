**Title**: Student Attendance System in Classroom Using Face Recognition Technique  
**Link**: https://ieeexplore.ieee.org/document/7763360  
**Authors**: Samuel Lukas, Ade Romadhony, Ririn Ikana Desanti, Ridi Ferdiana, Ignatius Pulung Sastra M.  

<br>

___

<br>

**Main Objectives**:

- To develop a face recognition-based system that can automatically record student attendance in classrooms.
- To overcome the inefficiencies and manual errors associated with traditional attendance-taking methods.
- To increase accuracy and performance using an effective combination of image processing and machine learning techniques.

<br>

___

<br>

**What They Did**:

The authors created a system that captures student face images, processes them using a combination of DWT and DCT for feature extraction, and classifies them using a Radial Basis Function Network (RBFN). The system was tested in a real classroom environment with a dataset collected from students.

<br>

___

<br>

**How They Did It**:

1. **Data Collection**:
   - Face images of 16 students were captured in a classroom setting.
   - The total dataset included 186 images for training and 148 for testing.

2. **Preprocessing**:
   - Images were resized to 64×64 pixels.
   - Converted to grayscale and enhanced using histogram equalization.

3. **Feature Extraction**:
   - **DWT (Discrete Wavelet Transform)**: Used to decompose the image into sub-bands, reducing noise and image size while retaining important features.
   - **DCT (Discrete Cosine Transform)**: Applied to capture frequency features and enhance data compactness.

4. **Classification**:
   - **RBFN (Radial Basis Function Network)**: Used for classifying the faces. It consists of a hidden layer with Gaussian functions and a linear output layer. It was chosen for its fast learning and good generalization capability.

5. **Attendance Logging**:
   - If a student is recognized by the system, their attendance is automatically recorded without manual input.

<br>

___

<br>

**Algorithms Used and How They Were Used**:

- **DWT**: Helped in capturing multi-resolution features of facial images while minimizing irrelevant data.
- **DCT**: Transformed spatial data to frequency domain for efficient recognition.
- **RBFN**: Used as a classifier that maps the extracted feature vectors to known identities based on Gaussian kernel functions.

<br>

___

<br>

**Limitations**:

- Recognition accuracy (around 81.76%) can degrade with:
  - Poor lighting conditions
  - Occlusion (e.g., faces turned or covered)
  - Low image quality
- Only tested on a small dataset (16 students), so scalability to large classrooms is unverified.
- Does not operate in real-time; processing may take time depending on hardware and image quality.
- External factors such as camera angle, student movement, and classroom layout can affect performance.

<br>

___

<br>
