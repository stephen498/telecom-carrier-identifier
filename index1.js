// function debounce(checkNetwork, timeout = 300) {
//     let timer;

//     return (...arg) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => { checkNetwork.apply(this, args); }, timeout);

//     };
// }



//     let prev = '';
//     if (this.checkValidity()) {
//         prev = this.value;
//     } else {
//         this.value = prev;
//     }
// };


function checkNetwork() {
    const val = document.getElementById('val');
    val.onclick = function(e) {
        e.preventDefault();

        const phone = document.getElementById("phone");
        if (String(phone.value).length < 7) {

            const icon = document.getElementById('icon')
            icon.innerText = `iNVALID FORMAT NUMBER `;
            return;
        }
        console.log(phone.value);

        const network = {
            '+234810': 'MTN',
            '+234803': 'MTN',
            '+234703': 'MTN',
            '+234903': 'MTN',
            '+234806': 'MTN',
            '+234706': 'MTN',
            '+234813': 'MTN',
            '+234814': 'MTN',
            '+234816': 'MTN',
            '+234805': 'GLO',
            '+234705': 'GLO',
            '+234905': 'GLO',
            '+234807': 'GLO',
            '+234815': 'GLO',
            '+234811': 'GLO',
            '+234809': 'ETISALAT',
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

        value = String(phone.value).slice(0, 7);


        if (network[value] == 'MTN') {

            const img = document.createElement('img');
            img.src = "mtn.png";
            img.alt = "mtn everywhere you go";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            img.id = 'img';
            const icon = document.getElementById('icon')
            icon.innerText = `This is an ${ network[value]} NUMBER `;
            document.getElementById('icon').appendChild(img);

        } else if (network[value] == 'GLO') {
            const img = document.createElement('img');
            img.src = "glo.png";
            img.alt = "Rule your world";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            img.id = 'img';
            const icon = document.getElementById('icon')
            icon.innerText = `This is an ${ network[value]} NUMBER `;
            document.getElementById('icon').appendChild(img);

        } else if (network[value] == 'AIRTEL') {
            const img = document.createElement('img');
            img.src = "airtel.png";
            img.alt = "Thew smartphone network";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            img.id = 'img';
            const icon = document.getElementById('icon')
            icon.innerText = `This is an ${ network[value]} NUMBER `;
            document.getElementById('icon').appendChild(img);
        } else if (network[value] == 'ETISALAT') {
            const img = document.createElement('img');
            img.src = "etisalat.png";
            img.alt = "9ja for life";
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.paddingTop = '15px';
            img.id = 'img';
            const icon = document.getElementById('icon')
            icon.innerText = `This is an ${ network[value]} NUMBER `;
            document.getElementById('icon').appendChild(img);
        }
    }
};

export default checkNetwork;

// const reloadtButton = document.querySelector("#reload");
// // Reload everything:
// function reload() {
//     reload = location.reload();
// }