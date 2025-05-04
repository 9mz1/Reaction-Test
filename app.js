info = document.querySelector('#info');

function time() {
    info.textContent = 'clicked';
    setTimeout(() => {
        info.textContent = 'click NOW';
        let elapsedTime = performance.now()
        document.addEventListener('click', () => {
            const reactionTime = (performance.now() - elapsedTime).toFixed(0);
            info.textContent = `${reactionTime}ms`;
        })
    }, 5000);
}

(() => {
    document.addEventListener('click', time);
})();