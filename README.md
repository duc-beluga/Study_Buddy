## Welcome to StudyBuddy!
Inspired by personal experiences with other eduational apps, StudyBuddy is a **communication platform where students can directly chat with tutors for homework help.**
In return, tutors can gain valuable teaching insights and give back to the local community of learners, making StudyBuddy a great interface for teachers-in-training.

Users can sign up for StudyBuddy as a tutor or as a student.
Users are also asked to **specify their level of learning or teaching (ex. university or highschool) and subjects they are interested in learning or teaching.** 

**Using data from Google Maps API and collecting zip code information from tutors and students,** StudyBuddy recommends tutors to students and students to tutors to chat with.
Recommendations are based on physical proximity and matching subjects of tutors and students.

## How we built it
StudyBuddy is built using **JavaScript, HTML/CSS, TailwindCSS, and Vite with React.**
User profile data is stored and updated in **MongoDB**, while **Firebase** is used for authentication and chat messages. The user interface was designed in Figma.

## Challenges we ran into
One challenge we overcame was connecting all the different components of the web app. Because StudyBuddy runs on multiple tools that work together, it took time to organize the collection of files. In the end, we separated and grouped components based on what purpose they served in relation to each other. Luckily, this also proved advantageous as we were able to individually work on and update different parts of the GitHub repo with minimal interference of others' work.

## Accomplishments that we're proud of
Handling complex real world data, such as calculating proximity based on zip codes, can be deceptively easy! Did we need to convert the zip codes to coordinates? Should we try to look for a pattern in the zip code characters? Although the data from the Google Maps API was quite helpful in the end, we spent a lot of time strategizing about how to use the zip codes in the beginning.

## What's next for StudyBuddy
We recognize that while online chats and platforms can provide a wealth of information, there needs to be security measures to keep users safe and maintain the quality of education. StudyBuddy already hides zip codes of users, but could implement having a report system for potential misconduct, review system of tutors, and having tutors pass a training module before chatting with stuednts. Additionally, future goals for StudyBuddy could also include expanding access to the online platform to other countries and globally, as not every student has the same physical access to education... but we can work to gradually change that <3
