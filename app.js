testInfo = document.querySelector('#info');
recordText = document.querySelector('#record');
restartText = document.querySelector('#restartText');
box = document.querySelector('.container');

let isGreen = false;

let startTime = Math.floor(Math.random() * 5000) + 2000;

function startTest() {
    if (!isGreen) {
        testInfo.textContent = 'wait for green';
        setTimeout(() => {
            testInfo.textContent = 'click now';
            box.style.backgroundColor = 'green';
            isGreen = true;
            let elapsedTime = performance.now()
            document.addEventListener('click', () => {
                const reactionTime = (performance.now() - elapsedTime).toFixed(0);
                testInfo.textContent = `${reactionTime}ms`;
                restartText.style.display = 'block';
                recordText.style.display = 'block';
                restartTest()
            }, { once: true });
        }, startTime);
    } else {
        testInfo.textContent = 'too early';
        box.style.backgroundColor = 'red';
    }

}

function restartTest() {
    document.addEventListener('click', () => {
        restartText.style.display = 'none';
        box.style.backgroundColor= 'red';
        isGreen = false
        info.textContent = "Click Here";
        document.addEventListener('click', startTest, { once: true } );
    });   
}

document.addEventListener('click', startTest, { once: true } );