let countdown;


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    console.log({
        now,
        then
    });
    countdown = setInterval(() => {
        const secondsLeft = (then - Date.now()) / 1000;
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    console.log(seconds);
}