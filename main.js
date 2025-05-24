const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".grid-size");
let isMouseDown= false;


// create a loop that creates 10 divs

        
function createGrid(gridSize) {
   container.innerHTML="";
   container.style.backgroundColor="white";
    for (let row = 0; row < gridSize; row++) {
       const rowDiv=document.createElement("div");
        rowDiv.className="row";  
      
       for (let col = 0; col < gridSize; col++) {
        const box = document.createElement("div");
        box.className="box";
         rowDiv.appendChild(box);

         box.addEventListener("click", ()=> {
           
            box.style.backgroundColor="white";
         })

         box.addEventListener("mousedown", ()=> {
            isMouseDown= true;
            box.style.backgroundColor="black";
         })

         box.addEventListener("mouseup", ()=> {
            isMouseDown=false;
         })
         box.addEventListener("mouseover", ()=> {
            if (isMouseDown) {
                box.style.backgroundColor="black"
            }
         })

    }   
    container.appendChild(rowDiv)
    
    }
}

sizeBtn.addEventListener("click",()=>{
   let gridSize = prompt("Enter Grid Size");
   if (gridSize>100) {
      alert ("The maximum size is 100 squares per side");
    
   }
   else if (gridSize<= 100) {
      createGrid(gridSize);
   }
   else {
      alert ("Please enter a valid number!");
   }
   
  
})


