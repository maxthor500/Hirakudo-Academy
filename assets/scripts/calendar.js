/* calendar JS from https://github.com/lashaNoz/Calendar/blob/master/script.js */
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    // get last day of current month
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    // get last day of previous month
    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    //return the first weekday
    const firstDayIndex = date.getDay();

    //return the weekday index of the last day of month
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

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

    //render current month to h1
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    //render current date to p
    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<td class="prev-date">${prevLastDay - x + 1}</td>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<td class="today">${i}</td>`;

        } else {
            days += `<td>${i}</td>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<td class="next-date">${j}</td>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

Date.prototype.myEvent = function() {
    const todayIndex = this.getDay();
    switch (todayIndex) {
        case 0:
            "There is no event today";
            break;
        case 1:
            this.myProp = "<h3>Hirakudo Academy</h3><p>19:00 - 21:00</p>";
            break;
        case 2:
            this.myProp = "<h3>ASD Tusciania</h3><p>19:30 - 21:00</p>";
            break;
        case 3:
            this.myProp = "<h3>Hirakudo Academy</h3><p>19:00 - 21:00</p>";
            break;
        case 4:
            this.myProp = "<h3>ASD Tusciania</h3><p>19:30 - 21:00</p>";
            break;
        case 5:
            this.myProp = "<h3>Hirakudo Academy</h3><p>19:00 - 21:00</p>";
            break;
        case 6:
            this.myProp = "<h3>ASD Tusciania</h3><p>16:00 - 17:30</p>";
            break;
    }
}

function drawEvent() {
    const d = new Date();
    d.myEvent();
    document.getElementById("event").innerHTML = d.myProp;
}

drawEvent()