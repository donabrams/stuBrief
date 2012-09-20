## StuBrief model

### Question:
- internalName
- text
- correctAnswer

### ProgressPoint:
- name
- Question
 
### Progression:
- name
- List of ProgressPoint
 
### Answer:
- datetime
- answer
- isCorrect
 
### AssessmentPoint:
- Datetime started
- List of Answer
- ProgressPoint

### Assessment:
- Datetime started
- Datetime ended
- List of AssessmentPoint

### Student:
- identifier
- Set of Assessment called assessments
- Map of Progression to ProgressPoint highestAchieved called progress

## Questions to ask the model

### Simple

q. What is a student's highestAchieved ProgressPoint in a Progression?

a. Cache this via a Map to student that is potentially updated when an AssessmentPoint is added (ie updated if the Answer is correct and the ProgressPoint is farther along the Progression, update it).

q. What is the next ProgressPoint for a student in an Assessment?

a. Allow some logic to be added to determine this. This is the crux of optimization for this application.

q. 

### Advanced

q. How long is the average Assessment given a certain outcome?

a. 