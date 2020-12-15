const mobileButton = document.querySelector('.header_mobileButton');
const closeAside = document.querySelector('.closeAside');
const aside = document.querySelector('.aside');
const main_content = document.querySelector('.main')

const showUserInformation = () => {
    console.log('aside',aside.style)
    if (aside.style.display === '' || aside.style.display === 'none' ){
        aside.style.display = 'flex';
        aside.style.width = '100vw';
        aside.style.height = '100%';
        // aside.style.zIndex = '1';
        main_content.style.display = 'none'
    }

}
const closeUserInformation = () => {
    if (aside.style.display === 'flex'){
        aside.style.display = 'none';
        main_content.style.display = 'flex'
    }
}

// const setAsideStyleToDesktop = () => {
//     if(window.innerWidth > 1024) {
//         aside.style.display = 'flex';
//         aside.style.width = '20%';
//         aside.style.zIndex = '0';
//     } else {
//         aside.style.display = 'none';
//         aside.style.width = '100vw';
//         aside.style.zIndex = '1';
//     }
// }
mobileButton.addEventListener('click', showUserInformation)
closeAside.addEventListener('click', closeUserInformation)
// window.addEventListener('resize', setAsideStyleToDesktop)
// window.onload = () => {
//     document.querySelector('#downloadCv').addEventListener('click', ()=> {
//         console.log('click')
//         console.log(window)
//         const cvData = document.querySelector('#cv');
//         console.log(cvData)
//         html2pdf().from(cvData).save();
//     })
// }


