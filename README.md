StuBrief model:

Question:
 - internalName
 - text
 - correctAnswer

ProgressPoint:
 - name
 - Question
 
Progression:
 - name
 - List of ProgressPoint
 
Answer:
 - datetime
 - answer
 
AssessmentPoint:
 - Datetime started
 - List of Answer
 - ProgressPoint

Assessment:
 - Datetime started
 - Datetime ended
 - Set of AssessmentPoint

Student:
 - identifier
 - Set of Assessments called assessments
 - Map of Progression to ProgressPoint highestAchieved called progress