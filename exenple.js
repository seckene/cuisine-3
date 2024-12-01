const liste = document.querySelector(".liste")
window.addEventListener('scroll',() =>{
console.log(window.scrollY);

if (window.scrollY>740){
   
     liste.style.visibility="hidden"
    
  }

 
  else{

    window.scrollY>620;
    liste.style.visibility="visible"

    liste.style.top ="0px";

  
  }
});

const maouse = document.querySelector(".maousmove");
window.addEventListener("mousemove",(e) =>{
    maouse.style.left = e.pageX + "px";
    maouse.style.top =e.pageY + "px";
} );


window.addEventListener("mousedown", () => {
    maouse.style.transform ="scale(2) translate(-25%,-25%)";

   }) ;


   window.addEventListener("mouseup", () => {
    maouse.style.transform ="scale(1) translate(-50%,-50%)";
   }) ;