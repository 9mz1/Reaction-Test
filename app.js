info = document.querySelector('#info');

function ready() {
    document.addEventListener('click', () => {
        info.textContent = 'clicked';
    })

    setTimeout(() => {
        info.textContent = 'click NOW';
        document.addEventListener('click', () => {
            info.textContent = 'reaction time was 000';
        })
    }, 3000);
}

ready();