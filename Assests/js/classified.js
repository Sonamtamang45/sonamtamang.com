(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        year = day * 365;

    // Set the target date for the countdown (2051 Nov 29, 2:36 NPT)
    const targetDate = new Date("2051-11-29T02:36:00+05:45").getTime();

  
    // Add any other country-related information you want to display

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate countdown values
        const years = Math.floor(distance / year);
        const days = Math.floor((distance % year) / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);

        // Update countdown and country information
        document.getElementById("years").innerText = years;
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
        document.getElementById("Country").innerText = countryName;

        // Do something later when date is reached
        if (distance < 0) {
            document.getElementById("headline").innerText = "It's the Countdown!";
            clearInterval(x);
        }
    }, 1000);
}());
