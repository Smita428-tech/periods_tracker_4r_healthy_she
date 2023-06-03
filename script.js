// Get DOM elements
const calendar = document.getElementById('calendar');
const form = document.getElementById('period-form');
const startDateInput = document.getElementById('start-date');
const cycleLengthInput = document.getElementById('cycle-length');

// Function to track periods
function trackPeriod(event) {
  event.preventDefault();
  const startDate = new Date(startDateInput.value);
  const cycleLength = parseInt(cycleLengthInput.value);
  const endDate = new Date(startDate.getTime() + (cycleLength - 1) * 24 * 60 * 60 * 1000);

  // Display the calendar
  displayCalendar(startDate, endDate);
}

// Function to display the calendar
function displayCalendar(startDate, endDate) {
  calendar.innerHTML = '';
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const calendarItem = document.createElement('div');
    calendarItem.textContent = currentDate.getDate();
    calendarItem.classList.add('calendar-day');

    // Highlight the current date
    if (currentDate.toDateString() === new Date().toDateString()) {
      calendarItem.classList.add('current-date');
    }

    calendar.appendChild(calendarItem);
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

// Add event listener to the form
form.addEventListener('submit', trackPeriod);
