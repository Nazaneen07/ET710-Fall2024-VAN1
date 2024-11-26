function checkDate()
{
    const userDate = document.forms["dateform"] ["userDate"].value;
    const outputMsg = document.getElementById('output');

    let isWeekend = checkIfWeekend(userDate);
    let isHoliday = checkIsHoliday(userDate);

    if(isWeekend || isHoliday)
    {
        outputMsg.textContent = "you can relax today.";
    }
    else
    {
        outputMsg.textContent = "it's a working day.";
    }
}

function checkIfWeekend(today="")
{
    let date = new Date(today);
    // 0 - 6
    let currentDayOfWeek = date.getUTCDay();

    return false;
}

function checkIsHoliday(today = "")
{
    let date = new Date(today);
    let currentDayofMonth = date.getUTCDate();
    //Add 1 because the result is zero based.
    //0-11
    let currentMonth = (date.getMonth() + 1);

    return false;
}