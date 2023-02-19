const containerEl = document.querySelector(".container");
const carrers =["Youtuber","web developer","Freelancer","Instractor"];
let carrerIndex = 0 ; 
let carIn = 0 ; 
updatetext()
function updatetext (){ 
    carIn ++ ;
containerEl.innerHTML= ` 
<h1>I am ${carrers[carrerIndex].slice(0,1) === "I" ? "an" : "a" } ${carrers[carrerIndex].slice(0,carIn)}</h1>
`; 
if(carIn === carrers[carrerIndex].length){
    carrerIndex++
    carIn = 0 ;
}
if(carrerIndex === carrers.length){
    carrerIndex = 0 ;
}
setTimeout(updatetext,400);
}