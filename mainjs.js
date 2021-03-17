








let random = Math.floor(Math.random()*100),
	random1 = Math.random()*100;
const a = document.querySelector('#box');

a.addEventListener('click',function(){
	// console.log(random)
	cuongHoa();
	random1 = Math.random()*100;
	// random = Math.floor(Math.random()*100);
	// console.log(random1)

})

var tiLe = [
	{
		id: '1',
		tiLe: '100'
	},
	{
		id: '2',
		tiLe: '90'
	},
	{
		id: '3',
		tiLe: '80'
	},
	{
		id: '4',
		tiLe: '70'
	},
	{
		id: '5',
		tiLe: '60'
	},
	{
		id: '6',
		tiLe: '50'
	},
	{
		id: '7',
		tiLe: '40'
	},
	{
		id: '8',
		tiLe: '30'
	},
	{
		id: '9',
		tiLe: '20'
	},
	{
		id: '10',
		tiLe: '10'
	},
	{
		id: '11',
		tiLe: '5'
	},
	{
		id: '12',
		tiLe: '1'
	}
]

var levelWeppon =0,
	idTiLe =0,
	soLanCuongHoa =1;

const result = document.querySelectorAll('.description')
function cuongHoa(){
	var x =tiLe[idTiLe].tiLe +'%';


	console.log("So lan cuong hoa: " + soLanCuongHoa)
	var tile = tiLe[idTiLe].tiLe;
	 console.log('Ti le:' + tiLe[idTiLe].tiLe +'%')
	if(random1 <= tile){
		console.log("Thanh cong")
		levelWeppon+=1;
		console.log("Vu khi: +"+ levelWeppon)

	console.log(result[0].innerText = soLanCuongHoa)
	console.log(result[1].innerText = levelWeppon)
	console.log(result[2].innerText = x)


		idTiLe+=1;
		soLanCuongHoa +=1;


	}else{
		console.log("That bai");
		
		console.log(result[0].innerText = soLanCuongHoa)
		levelWeppon+=0;
		console.log("Vu khi: +"+ levelWeppon)
		soLanCuongHoa +=1
	}

}








