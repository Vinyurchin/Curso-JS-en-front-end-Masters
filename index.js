function timeRemaining(timeElapsed, endTime) {
    return (endTime - timeElapsed) / 2;
}

var left = timeRemaining(42, 140);

console.log(left); // 98