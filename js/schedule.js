// turning this to classes and Methods

// class initCalender {
//   constructor (name, age, gender) {    
//     this.name = "Ademola Adebowale";
//     this.age = 39;
//     this.gender = "Male";
//   }
//   //Getter here
//   shout() {
//    console.log(this.name, this.age, this.gender);
//   }
// }
// mycalendr = new initCalender()

// // trigger the Function
// console.log(mycalendr.shout());




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
  "Thu Dec 29 2022 00:00:00 GMT+0100 (West Africa Standard Time",
  "Fri Dec 30 2022 00:00:00 GMT+0100 (West Africa Standard Time",
];

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

// Get the current date values to be used later
const todayDate = getCurrentDate();


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

        if (
          dateSelected.getDate() > todayDate.getDate() ||
          dateSelected.getFullYear() >= todayDate.getFullYear()
        ) {
          addNotAvailable(dateSelected);
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

// This function helps lawyers set their schedule
function addNotAvailable(x_Selected) {
  Navailable.push(x_Selected.toString());
  console.log(Navailable);
  //create a table and append the days not available
  const header = `<h1> Days not available </h1>`;
}

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
