const dealTime = (hours, min, sec) => {
    const spanHours = document.querySelectorAll('.span-time')[0];
    const spanMin = document.querySelectorAll('.span-time')[1];
    const spanSec = document.querySelectorAll('.span-time')[2];

    setInterval(() => {
        if (!hours && !min && !sec) return;
        --sec;

        if (!min && !sec) {
            --hours;
            min = 59;
            sec = 59;
        }
        if (sec === 0) {
            --min;
            sec = 59;
        }
        spanHours.innerHTML = hours;
        spanMin.innerHTML = min;
        spanSec.innerHTML = sec;
    }, 1000);
};

export default dealTime;
