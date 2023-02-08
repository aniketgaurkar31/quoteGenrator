const quoteContent= document.querySelector(".content");
const quotebtn = document.querySelector("button");

function randomQuote(){
    quotebtn.classList.add("loading");
    quotebtn.innerHTML= "loading...";
    fetch('http://api.quotable.io/random').then((response)=>response.json()).then(data=>{
        quoteContent.innerHTML=data.content;
        quotebtn.innerHTML="New Quote";
        quotebtn.classList.remove("loading");
 
    });
    
    
}
addEventListener("click",randomQuote);

