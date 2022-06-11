const hitungBtn = document.querySelector(".btn");
const percent = document.querySelector(".persen");
const progressBar = document.querySelector(".circular-progress");
const valueContainer = document.querySelector(".value-container");

hitungBtn.addEventListener("click", dataApi);

function dataApi() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
			'X-RapidAPI-Key': 
			'a7511d2347msh568e077d91d54e7p163592jsn0f0db894b265'
		}
	};

	const namaLk = document.querySelector(".laki").value;
	const namaPr = document.querySelector(".perempuan").value;

	fetch(
	'https://love-calculator.p.rapidapi.com/getPercentage?sname=' + namaPr + 
	'&fname=' + namaLk, options)
	.then(response => response.json())
	.then(response => timeInterval(response))
	.catch(err => console.error(err));	
};

function timeInterval(response) {
	let result = 0;
	const timer = setInterval(() => {
		result ++;
		valueContainer.textContent = `${result}%`;
		progressBar.style.background = `conic-gradient(
			#59abcf ${result * 3.6}deg,
			#cadcff ${result * 3.6}deg
		)`;
		if (result == response.percentage){
			clearInterval(timer);	
		};
	},80);
};

