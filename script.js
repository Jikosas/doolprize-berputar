document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const segments = 6;
    const randomSegment = Math.floor(Math.random() * segments);
    const degrees = randomSegment * (360 / segments) + 360 * 3; // 3 full rotations

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        result.textContent = `Hasil: ${randomSegment + 1}`;
    }, 4000); // 4 seconds to match the transition duration
});
