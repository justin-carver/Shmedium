const getMediumArticles = async (url) => {
    await fetch(`${url.href}`).then(function (response) {
        return response.text();
    }).then(function (data) {
        if (!url.href.includes('/tag/')) {
            if (data.includes('meteredContent')) {
                let paywall = document.createElement('div');
                paywall.classList.add('paywall-notif');
                paywall.innerHTML = 'PAYWALL';
                paywall.setAttribute('style', 
                    `display: inline-flex; width: auto; padding: 0.25rem; 
                    margin-left: 0.80rem; color: #000; background-color: #ffc017; 
                    border-radius: 5px;`
                );
                url.parentElement.append(paywall);
                url.parentElement.style.width = '120%';
            }
        }
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

const init = () => {
    let urls = document.querySelectorAll('a');
    for (let i = 0; i < urls.length; i++) {
        if (urls[i].host === 'medium.com') {
            getMediumArticles(urls[i]);
        }
    }
}

init();