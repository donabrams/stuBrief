## StuBrief model

### Question:
- internalName
- text
- correctAnswer

### ProgressPoint:
- name
- Set of Question
 
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
- Map of Progression to ProgressPoint highestAchieved called progress

### Student:
- identifier
- Set of Assessment called assessments
- Map of Progression to ProgressPoint highestAchieved called progress

### Institution:
- name
- List of Term starting with activeTerm
- Map of Term to Set of Student

### Term:
- startDate
- endDate

### Class:
- name
- description
- Institution
- Set of Student
- Term (not necessarily a term within an institution but it can be)

## Questions to ask the model

### Simple (Small Data)

q. What is a student's highestAchieved ProgressPoint in a Progression?

a. Cache one ProgressPoint per Progression per Student that is potentially updated when an AssessmentPoint is added (ie updated if the Answer is correct and the ProgressPoint is farther along the Progression, update it). There are some possible problems here when a ProgressPoint is removed from a Progression. Versioning of a Progression should solve this, but will be a later enhancement. 

q. What is the next ProgressPoint for a student in an Assessment?

a. Allow some logic to be added to determine this. This is the crux of optimization for this application.

q. How has a student progressed on various Progressions over time?

a. Using the student's assessments that occurred over the time span, map the progress on each assessment

q. How has a class progressed?

a. For every student in a class, measure the difference between assessments occurring after/on the startDate and before/on the endDate. Measurement will be in the form of index difference since ProgressPoints are not metered.

q. How has an institution progressed over a term?

a. The same as in a class.

### Advanced (Big Data)

q. Are some questions better than other?

a. This can be found by seeing if there is a significant difference between the % answered correctly of each Question in a ProgressPoint.

q. Can you predict a higher outcome based on the speed of completing easier questions?

a. Using the progress cache on Assessment, see if there is a high correlation between time taken on all ProgressPoints in all AssessmentPoints and progress achieved.

q. Are there Progress Points that are redundant?

a. If there is a very high percentage of people who always get the next ProgressPoint correct if the previous ProgressPoint was also answered correctly, there are three possibilities:

1.  Out of order
2.  Redundancy 
3.  Assessments not being taken between learning the two ProgressPoints

The third can be revealed through a timeline that looks for people that stop just before these ProgressPoints and just after. If that time is very small in most cases, then it is unlikely. The first can be tested by switching the questions around for a number of students and over time, analyzing if this situation still occurs. The second can only be assume if the other two options are proven false.

q. Are there Progress Points that are not in a logical order?

a. If we test with additional Progress Points after the natural stopping point in a Progression and in more than a few cases those Progress Points are answered correctly, then it is likely that they are not in a logical order. There is another possibility that the answer is wrong or a question ambiguous, but that would show in the "are some questions better than other."

