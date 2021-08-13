

const Ninersbutton = document.getElementById('49ersbutton');
const Hawksbutton = document.getElementById('hawksbutton');

const Ninersscore = document.getElementById('ninersscore');
const Hawksscore = document.getElementById('hawksscore');


console.log(Ninersbutton, Hawksbutton, Ninersscore, Hawksscore);

let ninerscounter = 0;
let hawkscounter = 0;

Ninersbutton.addEventListener('click', () => {
    
    ninerscounter= ninerscounter+7;
    Ninersscore.textContent= ninerscounter;
});

Hawksbutton.addEventListener('click', () => {
    hawkscounter+=7;
    Hawksscore.textContent = hawkscounter;
})
