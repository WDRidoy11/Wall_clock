let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();

    const sec = now.getSeconds();
    const secDegrees = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}
setInterval(setDate, 1000);
setDate();