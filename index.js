const mobileButton = document.querySelector('.header_mobileButton');
const closeAside = document.querySelector('.closeAside');
const aside = document.querySelector('.aside');
const main_content = document.querySelector('.main')
const download_cv = document.querySelector('.download');
const internship = document.getElementById('internship')
const eDateFrom = document.getElementById('e-date-from');
const eDateTo = document.getElementById('e-date-to');
const eDuration = document.getElementById('e-duration');
const nDuration = document.getElementById('n-duration');
const rDuration = document.getElementById('r-duration');
const tDuration = document.getElementById('t-duration');


const	ekslibrisNet = {
		dateFrom: new Date('2019-10-01'),
		dateTo: new Date('2021-01-31'),
	}

const terg = {
	dateFrom: new Date('2021-02-01'),
	dateTo: new Date('2021-04-30'),
}

const newCold = {
	dateFrom: new Date('2016-09-15'),
	dateTo: new Date('2019-09-30'),
}
const raben = {
	dateFrom: new Date('2000-06-20'),
	dateTo: new Date('2016-06-30'),
}

// const diff = ekslibrisNet.dateTo.getTime() - ekslibrisNet.dateFrom.getTime();
// const day = (1000 * 60 * 60 * 24);
// const days = Math.floor(diff / day)
// const months = Math.floor(days / 31) % 12
// const years = Math.floor((days / 31/ 12) % 12)


const jobDuration = (obj) => {
	const now = new Date();
	const trialPeriod = now < obj.dateTo;
	const diff = obj.dateTo.getTime() - obj.dateFrom.getTime();
	const day = (1000 * 60 * 60 * 24);
	const days = Math.floor(diff / day)
	console.log(days);
	const months = Math.floor(days / 30 ) % 12
	const years = Math.floor((days / 365));
	
	let yearsDuration = '';
	if(years === 1) {
			yearsDuration= 'rok';
	} else if(years >= 2 && years < 5) {
		yearsDuration = 'lata';
	} else{
		yearsDuration = 'lat';
	}
	let monthsDuration = '';
	if(months === 1) {
			monthsDuration = 'miesiąc';
	} else if( months >=2 && months < 5) {
		monthsDuration = 'miesiące'
	} else {
		monthsDuration = 'miesięcy'
	}
	let periodText = '';
	if(obj.dateTo === '') {
		return periodText;
	}
	return trialPeriod ? periodText = '( Obecnie na okresie próbnym )' : periodText =  `( ${years} ${yearsDuration} i ${months} ${monthsDuration} )`
}
eDuration.innerText = jobDuration(ekslibrisNet)
nDuration.innerText = jobDuration(newCold)
rDuration.innerText = jobDuration(raben)
tDuration.innerText = jobDuration(terg)

const showUserInformation = () => {
	console.log('click');
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
    // download_cv.addEventListener('click', ()=> {
    //     const cvData = document.querySelector('.cv_content');
    //     const opt = {
    //         margin: 0,
    //         filename: 'Dariusz Kowalec CV.pdf',
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 1 },
    //         jsPDF: { format: 'A2', orientation: 'portrait' }
    //     };
    //     html2pdf(cvData, opt);
    // })
// mobileButton.addEventListener('click', showUserInformation)
mobileButton.addEventListener('click', ()=> {
	console.log('click');
})
closeAside.addEventListener('click', closeUserInformation)



