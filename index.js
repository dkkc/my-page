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
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'A2', orientation: 'portrait' }
        };
        html2pdf(cvData, opt);
        // html2pdf().from(cvData).set(opt);
    })
}
mobileButton.addEventListener('click', showUserInformation)
closeAside.addEventListener('click', closeUserInformation)



