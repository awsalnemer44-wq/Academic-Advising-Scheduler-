let studentName = "";
let advisor = "";
let bookedDate = "";
let bookedTime = "";

let savedAppointment = localStorage.getItem("appointment");
let appointmentStatus = localStorage.getItem("appointmentStatus") || "Pending";
function bookAppointment() {
   studentName = document.getElementById("studentName").value;
advisor = document.getElementById("advisor").value; 
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;


    if (studentName === "") {
        alert("Please enter your name.");
        return;
    }

    if (advisor === "") {
        alert("Please choose an advisor.");
        return;
    }

    if (date === "") {
        alert("Please choose an appointment date.");
        return;
    }

    if (time === "") {
        alert("Please choose an appointment time.");
        return;
    }
if (bookedDate !== "" && date === bookedDate && time === bookedTime) {
    alert("This time slot is already booked. Please choose another slot.");
    return;
}
bookedDate = date;
bookedTime = time;
  let appointmentList = document.getElementById("appointmentList");

appointmentList.innerHTML =
    "<p><strong>Student:</strong> " + studentName +
    "<br><strong>Advisor:</strong> " + advisor +
    "<br><strong>Date:</strong> " + date +
    "<br><strong>Time:</strong> " + time +
"<br><strong>Status:</strong> Pending" +
    "</p>" +
    "<button onclick='editAppointment()'>Edit Appointment</button>" +
"<button onclick='cancelAppointment()'>Cancel Appointment</button>";
appointmentStatus = "Pending";
localStorage.setItem("appointmentStatus", appointmentStatus);
localStorage.setItem("appointment", JSON.stringify({
    studentName: studentName,
    advisor: advisor,
    date: date,
    time: time
}));
alert("Appointment booked successfully!");
}
function cancelAppointment() {
    localStorage.setItem("appointmentStatus", "Cancelled");
    alert("Appointment cancelled.");
    location.reload();
}
function editAppointment() {
    let newDate = prompt("Enter a new appointment date (YYYY-MM-DD):");
    let newTime = prompt("Enter a new appointment time:");

    if (newDate === "" || newTime === "") {
        alert("Please enter both a date and time.");
        return;
    }
localStorage.setItem("appointment", JSON.stringify({
    studentName: studentName,
    advisor: advisor,
    date: newDate,
    time: newTime
}));
    document.getElementById("appointmentList").innerHTML =
        "<p><strong>Student:</strong> " + studentName +
        "<br><strong>Advisor:</strong> " + advisor +
        "<br><strong>Date:</strong> " + newDate +
        "<br><strong>Time:</strong> " + newTime +
        "</p>" +
        "<button onclick='editAppointment()'>Edit Appointment</button>" +
        "<button onclick='cancelAppointment()'>Cancel Appointment</button>";

    alert("Appointment updated successfully!");
} 
if (savedAppointment !== null) {
    let appointment = JSON.parse(savedAppointment);

    studentName = appointment.studentName;
    advisor = appointment.advisor;
    bookedDate = appointment.date;
    bookedTime = appointment.time;

    document.getElementById("appointmentList").innerHTML =
        "<p><strong>Student:</strong> " + studentName +
        "<br><strong>Advisor:</strong> " + advisor +
        "<br><strong>Date:</strong> " + bookedDate +
        "<br><strong>Time:</strong> " + bookedTime +
        "<br><strong>Status:</strong> " + appointmentStatus +
        "</p>" +
       "<button onclick='editAppointment()'>Edit Appointment</button>" +
(appointmentStatus === "Pending" ? "<button onclick='confirmAppointment()'>Confirm Appointment</button>" : "") +
"<button onclick='cancelAppointment()'>Cancel Appointment</button>";
}
document.getElementById("searchAppointment").addEventListener("input", function() {
    let searchText = this.value.toLowerCase();

    if (studentName.toLowerCase().includes(searchText) ||
        advisor.toLowerCase().includes(searchText)) {
        document.getElementById("appointmentList").style.display = "block";
    } else {
        document.getElementById("appointmentList").style.display = "none";
    }
});
function confirmAppointment() {
    if (appointmentStatus === "Cancelled") {
        alert("A cancelled appointment cannot be confirmed.");
        return;
    }

    localStorage.setItem("appointmentStatus", "Confirmed");

    alert("Appointment confirmed.");

    location.reload();
}
function showAdvisorView() {
    let advisorView = document.getElementById("advisorView");

    if (savedAppointment !== null) {
        advisorView.innerHTML =
            "<p><strong>Student:</strong> " + studentName +
            "<br><strong>Advisor:</strong> " + advisor +
            "<br><strong>Date:</strong> " + bookedDate +
            "<br><strong>Time:</strong> " + bookedTime +
            "<br><strong>Status:</strong> " + appointmentStatus +
            "</p>";
    } else {
        advisorView.innerHTML = "<p>No appointments available.</p>";
    }
}

showAdvisorView();