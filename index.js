var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
console.log(randomnumber1);
console.log(randomnumber2);
var img1=document.querySelector('.img1');
var img2=document.querySelector('.img2');

img1.setAttribute("src", `./images/dice${randomnumber1}.png`);
img2.setAttribute("src", `./images/dice${randomnumber2}.png`);

var heading = document.querySelector('h1');

if(randomnumber1>randomnumber2){
    heading.textContent = "🌻Player 1 win";
}
else if(randomnumber1<randomnumber2){
    heading.textContent = "Player 2 win🌻";
}
else{
    heading.textContent="Draw";
}