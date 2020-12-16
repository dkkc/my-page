const mobileButton = document.querySelector('.header_mobileButton');
const closeAside = document.querySelector('.closeAside');
const aside = document.querySelector('.aside');
const main_content = document.querySelector('.main')

const showUserInformation = () => {
    if (aside.style.display === '' || aside.style.display === 'none' ){
        aside.style.display = 'flex';
        aside.style.width = '100vw';
        aside.style.height = '100%';
        main_content.style.display = 'none'
    }
}
const closeUserInformation = () => {
    if (aside.style.display === 'flex'){
        aside.style.display = 'none';
        main_content.style.display = 'flex'
    }
}

window.onload = () => {
    document.body.addEventListener('click', ()=> {
        console.log('click')
        console.log(window)
        const cvData = document.querySelector('.cv_content');
        console.log(cvData)
        const opt = {
            margin: 0,
            filename: 'Dariusz Kowalec.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { format: 'A2', orientation: 'portrait' }
        };
        html2pdf(cvData, opt);
    })
}
mobileButton.addEventListener('click', showUserInformation)
closeAside.addEventListener('click', closeUserInformation)



