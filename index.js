function timeRemaining(timeElapsed, endTime) {
    return (endTime - timeElapsed) / 2;
}

var left = timeRemaining(42, 150);

console.log(left); // 54
