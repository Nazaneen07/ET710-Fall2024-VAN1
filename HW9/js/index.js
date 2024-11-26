function checkDate() {
    const userDate = document.forms["dataForm"]["userDate"].value; // Fixed form name typo
    const outputMsg = document.getElementById('output');

    let isWeekend = checkIfWeekend(userDate);
    let isHoliday = checkIsHoliday(userDate);

    if (isWeekend || isHoliday) {
        outputMsg.textContent = "You can relax today.";
    } else {
        outputMsg.textContent = "It's a working day.";
    }
}

function checkIfWeekend(today = "") {
    let date = new Date(today);
    let currentDayOfWeek = date.getUTCDay(); // Get the day of the week (0-6)

    // Check if it's Friday (5), Saturday (6), or Sunday (0)
    if (currentDayOfWeek === 5 || currentDayOfWeek === 6 || currentDayOfWeek === 0) {
        return true;
    } else {
        return false;
    }
}

function checkIsHoliday(today = "") {
    let date = new Date(today);
    let currentDayOfMonth = date.getUTCDate(); // Get the day of the month (1-31)
    let currentMonth = date.getMonth() + 1;    // Get the month (0-11) and add 1 to make it (1-12)

    // Check for holidays
    if (
        (currentMonth === 12 && currentDayOfMonth === 25) || // Christmas
        (currentMonth === 7 && currentDayOfMonth === 4) ||  // Fourth of July
        (currentMonth === 11 && currentDayOfMonth === 28)   // Thanksgiving
    ) {
        return true;
    } else {
        return false;
    }
}
