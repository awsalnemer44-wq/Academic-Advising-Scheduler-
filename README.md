\# Academic Advising Scheduler



\## Project Description



The Academic Advising Scheduler is a web application that allows students to book and manage academic advising appointments.



Students can enter their name, choose an advisor, select an appointment date and time, search for appointments, edit an appointment, confirm an appointment, and cancel an appointment.



The application is designed as a simple client-side web application for demonstration purposes.



\## Technologies Used



\- HTML

\- CSS

\- JavaScript

\- Browser Local Storage



\## Main Features



\- Book an academic advising appointment

\- View appointment details

\- Edit appointment date and time

\- Confirm an appointment

\- Cancel an appointment

\- Search appointments by student name or advisor

\- Save appointment data in the browser

\- Display validation and error messages

\- Prevent conflicting bookings



\## CRUD Operations



\### Create

A student can create a new advising appointment by entering their name, selecting an advisor, and choosing a date and time.



\### Read

The application displays the saved appointment and its current status.



\### Update

A student can edit the appointment date and time. The appointment status can also change during the appointment lifecycle.



\### Delete

A student can cancel an appointment. The appointment is kept in the system with a \*\*Cancelled\*\* status so that its lifecycle can still be viewed.



\## Validation



The application checks that:



\- Student name is entered.

\- An advisor is selected.

\- An appointment date is selected.

\- An appointment time is selected.



If required information is missing, an error message is displayed.



\## Edge Case



The application prevents a student from booking the same advisor, date, and time when that appointment slot is already booked.



An error message is displayed:



"This time slot is already booked. Please choose another slot."



\## Appointment Lifecycle



Appointments can have different statuses:



\- Pending

\- Confirmed

\- Cancelled



The status is displayed together with the appointment details.



\## Data Storage



Appointment information is stored using the browser's `localStorage`.



This allows the appointment to remain available after the page is refreshed.



\## Security Review



The application uses basic client-side validation to prevent incomplete appointment information.



No passwords or sensitive personal information are stored.



Because this is a client-side demonstration application, it does not use a server database or server-side authentication.



For a real-world system, server-side validation, authentication, authorization, secure database storage, and stronger protection of personal information would be required.



\## Project Structure



```text

AcademicAdvisingScheduler/

├── index.html

├── style.css

├── script.js

└── README.md

