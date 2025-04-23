**Title**: Face Recognition-based Lecture Attendance System  
**Link**: [CiteSeerX Paper](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=4b6811cd2a7a6924fed4967c2b755c0942ca5351)

<br>

___

<br>

**Main Objectives**:

- To develop an automatic attendance system for classroom lectures using face recognition technology.
- To increase the accuracy of attendance estimation by using continuous observation rather than relying on single recognition events.
- To also estimate student context, such as presence, seating position, alertness, and interest level using facial imagery.

<br>

___

<br>

**What They Did**:

The authors implemented a system that captures facial images of students throughout a lecture session using cameras and recognizes their identities. The system uses the results of face recognition over time (continuous observation) to improve the precision of attendance estimation. The system was applied and tested in real classroom settings.

<br>

___

<br>

**How They Did It**:

The system works in a structured multi-step process:

1. **Sensing Camera**: Installed on the ceiling to detect seat occupancy by identifying moving students via background subtraction and motion detection.
2. **Capturing Camera**: Mounted in front of the classroom and controlled based on the seating information. It captures face images of the students sitting in the occupied seats.
3. **Face Recognition**: Performed on captured images to identify students.
4. **Continuous Observation**: Multiple images are collected over time for each student to improve accuracy.
5. **Data Logging**: Attendance is inferred from the aggregated recognition results. Additional metadata such as seat position and face orientation is also logged.

<br>

___

<br>

**Algorithms Used and How They Were Used**:

1. **Background Subtraction and Inter-frame Difference**:
   - Used by the sensing camera to detect which seats are currently occupied.
   - Helps identify active students who have just arrived and where they are seated.

2. **Face Detection and Recognition**:
   - Although the paper does not mention a specific face recognition algorithm like LBPH or Eigenfaces, standard facial recognition techniques are applied to images from the capturing camera.
   - Face images are tagged with timestamps and seating information for context.

3. **Continuous Observation**:
   - Used to mitigate the limitations of single-frame recognition.
   - The system collects multiple frames of facial data throughout the class and combines them to determine attendance with higher confidence.

<br>

___

<br>

**Limitations**:

- **Dependence on Continuous Monitoring**: The system’s accuracy significantly depends on prolonged camera observation throughout the lecture.
- **Recognition Errors**: Face recognition may fail due to occlusions, lighting issues, and changes in facial appearance.
- **Infrastructure Complexity**: Requires two cameras (one for sensing, one for capturing), motorized camera movement, and system coordination.
- **Privacy Concerns**: Constant facial monitoring may raise ethical and privacy concerns among students and institutions.
- **No Real-time Alerting**: Missed recognitions cannot be flagged instantly; attendance is calculated later based on aggregated results.

<br>

___

<br>
