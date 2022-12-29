const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedsday",
  "Thursday",
  "Friday",
  "Saturday",
];


let outBookings = JSON.parse(sessionStorage.getItem("bookObj"));

console.log(outBookings);

// outBookings.attendees= "Ademola Adebowale"
// outBookings.date = "2022-12-20T16:11:53.887Z"
// outBookings.description = "You will be contacted Immmediately, once your appointment is confirmed"
// outBookings.duration = 65
// outBookings.name = "Brvcase Chat Appointment"
// outBookings.organizer = "Brvcase Inc."
// outBookings.time = "8:00"

const saveData = function () {
  sessionStorage.setItem("bookObj", JSON.stringify(outBookings));
  
  //localStorage.setItem("bookObj", JSON.stringify(outBookings));
  console.log('Data saved . . . . ');
  console.log(outBookings);
};



// Date Not Available

const showBooked = [];
   
const timesAvailable = [
  "9:30am",
  "10:30am",
  "11:00am",
  "12:30pm",
  "1:00pm",
  "2:30pm",
  "3:00pm",
];

const timesNavailable = [
  "Sat Dec 24 2022 10:00:00 GMT+0100 (West Africa Standard Time",
  "Sat Dec 24 2022 10:00:00 GMT+0100 (West Africa Standard Time",
  "Sat Dec 24 2022 10:00:00 GMT+0100 (West Africa Standard Time",
];

const Navailable = [
  // "Mon Dec 25 2022 00:00:00 GMT+0100 (West Africa Standard Time)",
  // "Sun Dec 26 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sun Dec 4 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sun Dec 11 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sun Dec 18 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sun Dec 25 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sat Dec 3 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sat Dec 10 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sat Dec 17 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sat Dec 24 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Sat Dec 31 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Mon Dec 19 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Tue Dec 20 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Wed Dec 21 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Tue Dec 12 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Tue Dec 13 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Thu Dec 1 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Thu Dec 8 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Thu Dec 15 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Thu Dec 22 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Thu Dec 29 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Fri Dec 2 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Fri Dec 9 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Fri Dec 30 2022 00:00:00 GMT+0100 (West Africa Standard Time",

];

// const test = [ 1671922800000 , 1672009200000, 1672095600000, 1672182000000];
// const check = 1671922800000;
// console.log(test.includes(check))
// console.log(Navailable.map((date) => new Date(date)));
// console.log(Date.parse(Navailable[0]));
// console.log(bookedDate.getFullYear());
// console.log(bookedDate.getMonth());
// console.log(bookedDate.getDate());
// console.log(bookedDate.toTimeString());

// main variable
let date = new Date();

// Function that returns the current date from the calendar
function getCurrentDate(element, asString) {
  if (element) {
    if (asString) {
      return (element.textContent =
        weekdays[date.getDay()] +
        ", " +
        date.getDate() +
        "  " +
        months[date.getMonth()] +
        "  " +
        date.getFullYear());
    }
    return (element.value = date.toISOString().substr(0, 10));
  }
  return date;
}

const todayDate = getCurrentDate();
//console.log(todayDate);
// Main function that generates the calendar
function generateCalendar() {
  //   Take a calendar and if it already exists remove it
  const calendar = document.getElementById("calendar");
  if (calendar) {
    calendar.remove();
  }

  // Create the table that will store the dates
  const table = document.createElement("table");
  table.id = "calendar";

  // Create headers for the days of the week
  const trHeader = document.createElement("tr");
  trHeader.className = "weekends";
  weekdays.map((week) => {
    const th = document.createElement("th");
    const w = document.createTextNode(week.substring(0, 3));
    th.appendChild(w);
    trHeader.appendChild(th);
  });

  // Add headers to the table
  table.appendChild(trHeader);

  // Get the day of the week from the first day of the month
  const weekDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  // Get the last day of the month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  let tr = document.createElement("tr");
  let td = "";
  let empty = "";
  let btn = document.createElement("button");
  let week = 0;

  // If the weekday of the first day of the month is greater than 0(first day of the week);
  while (week < weekDay) {
    td = document.createElement("td");
    empty = document.createTextNode(" ");
    td.appendChild(empty);
    tr.appendChild(td);
    week++;
  }

  // Will go from the 1st to the last day of the month
  for (let i = 1; i <= lastDay; ) {
    //   As long as the weekday is < 7, it will add columns to the week row
    while (week < 7) {
      td = document.createElement("td");
      let text = document.createTextNode(i);
      btn = document.createElement("button");
      btn.className = "btn-day";

      btn.addEventListener("click", function () {
        changeDate(this);

        //select the date
        const dateSelected = new Date(
          date.getFullYear(),
          date.getMonth(),
          this.textContent
        );

        //update the Outbookings storage
        if (
          dateSelected.getDate() > todayDate.getDate() ||
          dateSelected.getFullYear() >= todayDate.getFullYear()
        ) {
          timeDiv(dateSelected);
        }
      });

      week++;
      //Control it to stop exactly on the last day
      if (i <= lastDay) {
        i++;
        btn.appendChild(text);
        td.appendChild(btn);
      } else {
        text = document.createTextNode(" ");
        td.appendChild(text);
      }
      tr.appendChild(td);
    }

    // Add the row to the table
    table.appendChild(tr);

    // Create a new line to be used
    tr = document.createElement("tr");

    // Reset the weekday counter
    week = 0;
  }
  // Add the table to the div it should belong to
  const content = document.getElementById("table");
  content.appendChild(table);
  changeActive();
  changeHeader(date);
  document.getElementById("date").textContent = date;
  getCurrentDate(document.getElementById("currentDate"), true);
  getCurrentDate(document.getElementById("date"), false);

}



function timeDiv (_xSelected)  {
  let timeDiv = document.getElementById("available-times-div");
  while (timeDiv.firstChild) {
    timeDiv.removeChild(timeDiv.lastChild);
  }

  //Heading - Date Selected
  let h4 = document.createElement("h4");
  let h4node = document.createTextNode(_xSelected);
  h4.appendChild(h4node);
  timeDiv.appendChild(h4);

  //Time Buttons
  for (let i = 0; i < timesAvailable.length; i++) {
    let timeSlot = document.createElement("div");
    timeSlot.classList.add("time-slot");
    let timeBtn = document.createElement("button");
    let btnNode = document.createTextNode(timesAvailable[i]);
    timeBtn.classList.add("time-btn");
    timeBtn.appendChild(btnNode);
    timeSlot.appendChild(timeBtn);
    timeDiv.appendChild(timeSlot);

    // When time is selected var because it exists outside the function
    var last = null; 
    //click the time involved- disabled whatever is clicked
    timeBtn.addEventListener("click", function () {
      if (last != null) {
        // console.log(last);
        last.parentNode.removeChild(last.parentNode.lastChild);
      }

      let confirmBtn = document.createElement("button");
      let confirmTxt = document.createTextNode("Confirm");
      confirmBtn.classList.add("confirm-btn");
      confirmBtn.appendChild(confirmTxt);
      this.parentNode.appendChild(confirmBtn); // add a confirmation button

      //  event.time = this.textContent;

      const time_booked = this.parentNode.firstChild.textContent;
      // console.log(time_booked);
      // console.log(time_booked.split(":")[0]);
      // myString = time_booked.split(":")[1].replace(/[^\d]/g, "");
      // console.log(myString);

      // const minutes =
      //   time_booked.split(":")[1].replace(/[^\d]/g, "") !== 0
      //     ? time_booked.split(":")[1].replace(/[^\d]/g, "")
      //     : 0;
      
      // console.log(time_booked.split(":")[1].replace(/[^\d]/g, "") || 0);

      confirmBtn.addEventListener("click", function () {
        const dateBooked = new Date(
          _xSelected.getFullYear(),
          _xSelected.getMonth(),
          _xSelected.getDate(),
          time_booked.split(":")[0],
          time_booked.split(":")[1].replace(/[^\d]/g, "") || 0,
          0
        );

        

        outBookings.date = dateBooked;
        outBookings.time = time_booked;
        outBookings.organizer = "brvcase Inc"; //Doctor id
        outBookings.attendees = "Adebowale Ademola"; //User id
        outBookings.name = "Brvcase Appointment";
        outBookings.duration = "70";

        
        console.log(saveData());
        
        // add date to booked
        showBooked.push(dateBooked.toString());
        console.log(showBooked);
        
        
        // window.location.href = "confirmation.html";
        // we append a new div that confirms what is booked --> to hide div

        const display = document.getElementById("schedule-div");
        display.classList.add("hidden");
        generateCalendar();
      });

      last = this;
    });
  }

  var containerDiv = document.getElementsByClassName("container")[0];
  containerDiv.classList.add("time-div-active");
  document.getElementById("calendar-section").style.flex = "2";
  timeDiv.style.display = "initial";
};


// Change the date through the form
function setDate(form) {
  let newDate = new Date(form.date.value);
  date = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    newDate.getDate() + 1
  );
  generateCalendar();
  return false;
}

//  Method Change the month and year at the top of the calendar
function changeHeader(dateHeader) {
  const month = document.getElementById("month-header");
  if (month.childNodes[0]) {
    month.removeChild(month.childNodes[0]);
  }
  const headerMonth = document.createElement("h1");
  const textMonth = document.createTextNode(
    months[dateHeader.getMonth()].substring(0, 3) +
      " " +
      dateHeader.getFullYear()
  );
  headerMonth.appendChild(textMonth);
  month.appendChild(headerMonth);
}

// Method to disable previous months dated/calendar
function disableDate(item) {
  let disable =
    getCurrentDate() < todayDate ? item.classList.add("inactive") : "";
}

//Method to disable past days in the month
function disableDays(item) {
  let disable =
    getCurrentDate().getFullYear === todayDate.getFullYear &&
    getCurrentDate.getMonth === todayDate.getMonth
      ? "OK"
      : "NO";
}

//function Busy
function busyDays(day) {
  let busy_list = Navailable.map((date) => Date.parse(new Date(date)));
  // console.log(busy_list); // a list
  let busyDay = Date.parse(new Date(date.getFullYear(), date.getMonth(), day));
  let check = busy_list.indexOf(busyDay) === -1 ? false : true;
  return check;

  // console.log(busy_list.indexOf(busyDay));
  // console.log(busy_list.includes(busyDay));
}

// Function to change the color of the button of the day that is active
function changeActive() {
  let btnList = document.querySelectorAll("button.active");
  btnList.forEach((btn) => {
    btn.classList.remove("active");
    btn.classList.remove("busy");
    btn.classList.remove("inactive");
  });

  btnList = document.getElementsByClassName("btn-day");
  for (let i = 0; i < btnList.length; i++) {
    const btn = btnList[i];
    //console.log(btn);
    disableDate(btn);

    if (btn.textContent === date.getDate().toString()) {
      btn.classList.add("active");
    } else if (busyDays(btn.textContent) === true) {
      //btn.classList.remove("active");
      btn.classList.add("busy");
    }
  }
}

//  Function that gets the current date
function resetDate() {
  date = new Date();
  generateCalendar();
}

// Change the date by the number of the button clicked and save it
function changeDate(button) {
  let newDay = parseInt(button.textContent);
  date = new Date(date.getFullYear(), date.getMonth(), newDay);
  generateCalendar();
}

// Month and day forward and backward functions
function nextMonth() {
  date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  generateCalendar(date);
}

function prevMonth() {
  date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  generateCalendar(date);
}

function prevDay() {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
  generateCalendar();
}

function nextDay() {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  generateCalendar();
}

document.onload = generateCalendar(date);
