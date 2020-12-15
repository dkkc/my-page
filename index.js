const mobileButton = document.querySelector('.header_mobileButton');
const closeAside = document.querySelector('.closeAside');
const aside = document.querySelector('.aside');

const showUserInformation = () => {
    // aside.style.position = 'unset';
    aside.style.display = 'flex';
    aside.style.width = '100%';
    aside.style.height = '100vh';
    aside.style.zIndex = '1';
}
const closeUserInformation = () => {
    aside.style.display = 'none';
}

const setAsideStyleToDesktop = () => {
    if(window.innerWidth > 960) {
        aside.style.display = 'flex';
        aside.style.width = '20%';
        aside.style.zIndex = '0';
    }
}
mobileButton.addEventListener('click', showUserInformation)
closeAside.addEventListener('click', closeUserInformation)
window.addEventListener('resize', setAsideStyleToDesktop)
// window.onload = () => {
//     document.querySelector('#downloadCv').addEventListener('click', ()=> {
//         console.log('click')
//         console.log(window)
//         const cvData = document.querySelector('#cv');
//         console.log(cvData)
//         html2pdf().from(cvData).save();
//     })
// }


