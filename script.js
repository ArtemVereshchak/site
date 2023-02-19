const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const BtnFooter = [...document.querySelectorAll('.button__footer')];
const sub1 = [...document.querySelectorAll('.footer__lists_sub')];

const btn = document.getElementById("button__footer1");
const sub = document.getElementById('footer__lists_sub1');


menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
   
});

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    });

console.log(BtnFooter, [...sub1]);

BtnFooter.forEach((elem, i) => {
	let flag = false;

elem.addEventListener('click', function(){
	
	flag = !flag;
	
	if(flag){
		sub1[i].style.display = 'block';
	 }else{
		sub1[i].style.display = 'none';
	}


});
} )

// BtnFooter1.addEventListener('click' , function(){
// 	sub1.classList.toggle('active')
// });

// BtnFooter2.addEventListener('click' , function(){
// 	sub2.classList.toggle('active');
// })

// BtnFooter3.addEventListener('click' , function(){
// 	sub3.classList.toggle('active');
// })

// let flag = false;

// btn.addEventListener('click', function(){
// 	flag = !flag;
// 	if(flag){
// 		sub.style.display = 'block';
// 	}else{
// 		sub.style.display = 'none';
// 	}

// });

window.addEventListener('resize', function(event){
	if(event.target.innerWidth > 900){
		sub1.forEach(elem => {
			elem.style.display = 'block';
		})
	}else{
		sub1.forEach(elem => {
			elem.style.display = 'none';
		})
	}
})



