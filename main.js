"use strict!"
// Sort after Importance
let sortbyImportance = function(importance) {
    return function (x, y) {
        return ((x[importance] === y[importance]) ? 0 : (x[importance] < y[importance] ? 1 : -1));
    }
} 

function loadJson(path, info){
    fetch(path)
       .then(function(response){
           return response.json();
       })
       .then(function(data){
           /* console.log(document.querySelector(element))         
           document.querySelector(element).innerHTML = data; */
            info(data);
       })
}
loadJson("https://kea-alt-del.dk/customersupport/", function(data){
    data = data.sort(sortbyImportance("importance"));
    
/*     data = customer.importance.sort(function(a, b)
{
    return b - a;	
}); */

    console.log("json loaded");
    /* let myTemplate = document.querySelector("#customers");
    console.log(myTemplate); */

    data.forEach(function(customer){
        let clone = document.querySelector("#customers").content.cloneNode(true);
        let name =  customer.first + " " + customer.last;
        let time = customer.time.year + "/" + customer.time.month + "/" + customer.time.day + " " + customer.time.hour + ":" + customer.time.minute + ":" + customer.time.second;
        let hslVal = `hsl(${customer.importance}, 75%, 75%)`;
    
        clone.querySelector(".name").textContent = name;
        clone.querySelector(".place").textContent = customer.place;
        clone.querySelector(".time").textContent = time;
        clone.querySelector("#message").textContent = customer.message;
        clone.querySelector("#full").textContent = customer.full;
        clone.querySelector("#full").style.display = "none";

        clone.querySelector("#btn").addEventListener("click", function(e){
            console.log(e.target)        
                if (e.target.nextElementSibling.style.display === "none") {
                    e.target.nextElementSibling.style.display = "block";
                    e.target.textContent = "Read less";
                } else {
                    e.target.nextElementSibling.style.display = "none";
                    e.target.textContent = "Read more..."; 
                }
            })
        
        clone.querySelector("#remove").addEventListener("click", function(e){
                console.log("remove btn",e.target.parentNode.parentNode);
                e.target.parentNode.parentNode.remove();
                })
        
        

        //clone.querySelector(".importance").textContent = customer.importance;
        clone.querySelector("#customerContainer").style.backgroundColor = `hsl(${customer.importance}, 100%, 92%)`;
        clone.querySelector(".top").style.background = `linear-gradient(to bottom, hsla(${customer.importance}, 75%, 75%,1) 0%,hsla(206,70%,70%,0) 100%)`;


        //background: linear-gradient(to bottom, hsla(212,67%,36%,1) 0%,hsla(206,70%,70%,0) 100%);
        /*  clone.querySelector(".dome").style.backgroundColor = hslVal;
        clone.querySelector(".bottom").style.backgroundColor = hslVal;
        clone.querySelector("#full").style.backgroundColor = hslVal; */
        
        
        
        
        // Show or Hide
       /*  let shortMsg = clone.querySelector(".message"),
            fullMsg = clone.querySelector(".full"); */

          /*   clone.querySelector(".more").addEventListener("click", function(e) {
                // Reason i have the clone in here is because it will make the page faster. It will render the content when the button is clicked.
                e.target.nextElementSibling.textContent = customer.full;
                e.target.nextElementSibling.classList.toggle("hide");
            }); */

        /*     clone.querySelector(".more")
            function myFunction(x) {
                let x = document.getElementById("message");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            } */
        
            
        document.querySelector("#recieve").appendChild(clone);
    });
    
});

/* function hide(e){
    // e.target refers to the clicked <li> element
    // This is different than e.currentTarget which would refer to the parent <ul> in this context
    e.target.style.visibility = 'hidden';
  } */

/*  function toggleText(id) {
    let x = document.getElementById("btn");
    console.log(x.nextElementSibling);
    if (x.nextElementSibling.style.display === "none") {
        x.nextElementSibling.style.display = "block";
        document.querySelector("button").textContent = "Read less";
    } else {
        x.nextElementSibling.style.display = "none";
        document.querySelector("button").textContent = "Read more...";
        
    }
}  */
 


//opskriftListe.forEach(function (hverJSONElement) {
  //  let the_clone = document.querySelector("#opskriftliste_template").content.cloneNode(true);
    //console.log("klonen", the_clone);

/* loadSVG("assets/sarah.svg", "div", function(){
    console.log("sarah loaded");
    document.querySelector("#booms").style.display="none";
    let stuff = document.querySelectorAll(".land path, .water path")
    console.log(stuff)
    document.querySelector("svg").addEventListener("click", ()=>{
    stuff.forEach((el, i)=>{
        console.log(i);
        setTimeout(()=>{
       el.style.transform = `translate(${Math.random()*100-50}px, ${Math.random()*100-50}px)`, i*10})
    })    
   }) 

    
}); */