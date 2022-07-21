function debounce(checkNetwork, timeout = 300) {
    let timer;

    return (...arg) => {
        clearTimeout(timer);
        timer = setTimeout(() => { checkNetwork.apply(this, args); }, timeout);

    };
}



function checkNetwork() {
    // const img = document.getElementById('img');
    const phone = document.getElementById("phone");
    console.log(phone.value);
    const network = {
        '0810': 'MTN',
        '0803': 'MTN',
        '0703': 'MTN',
        '0903': 'MTN',
        '0806': 'MTN',
        '0706': 'MTN',
        '0813': 'MTN',
        '0814': 'MTN',
        '0816': 'MTN',
        '0805': 'GLO',
        '0705': 'GLO',
        '0905': 'GLO',
        '0807': 'GLO',
        '0815': 'GLO',
        '0811': 'GLO',
        '0809': 'ETISALAT',
        '0909': 'ETISALAT',
        '0817': 'ETISALAT',
        '0818': 'ETISALAT',
        '0802': 'AIRTEL',
        '0902': 'AIRTEL',
        '0701': 'AIRTEL',
        '0808': 'AIRTEL',
        '0708': 'AIRTEL',
        '0812': 'AIRTEL',
        '0904': 'AIRTEL'
    }

    let value = '';

    value = String(phone.value).slice(0, 4);

    setTimeout(() => {
        if (network[value] == 'MTN') {
            // phone.insertAdjacentHTML('afterend',
            //     '<img src = "mtn.png" alt = "mtn everywhere you go" / > ')
            // const img = document.getElementsByTagName('img');
            // img.style.width = 2;
            // img.style.height = 2;
            const img = document.createElement('img');
            img.src = "mtn.png";
            img.alt = "mtn everywhere you go";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            const p = document.createElement('p')
            p.innerText = `This is an ${ network[value]} NUMBER `;

            document.getElementById("form").insertAdjacentHTML('afterend', p.innerHTML);
            document.body.append(img);

        } else if (network[value] == 'GLO') {
            const img = document.createElement('img');
            img.src = "glo.png";
            img.alt = "rule your world";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            const p = document.createElement('p')
            p.innerText = `This is an ${ network[value]} NUMBER `;

            document.getElementById("form").insertAdjacentHTML('afterend', p.innerHTML);
            document.body.append(img);

        } else if (network[value] == 'AIRTEL') {
            const img = document.createElement('img');
            img.src = "airtel.png";
            img.alt = "The smartphone network";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            const p = document.createElement('p')
            p.innerText = `This is an ${ network[value]} NUMBER `;

            document.getElementById("form").insertAdjacentHTML('afterend', p.innerHTML);
            document.body.append(img);
        } else if (network[value] == 'ETISALAT') {
            const img = document.createElement('img');
            img.src = "etisalat.png";
            img.alt = "9ja for life";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            const p = document.createElement('p')
            p.innerText = `This is an ${ network[value]} NUMBER `;

            document.getElementById("form").insertAdjacentHTML('afterend', p.innerHTML);
            document.body.append(img);
        }
    }, 2000)

}


const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}