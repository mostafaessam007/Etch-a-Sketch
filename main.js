const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".grid-size");
const resetBtn = document.querySelector(".reset");
let isMouseDown= false;


        
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

   if (gridSize ===null) {
      return;
   }

   gridSize = parseInt(gridSize);

   if (!gridSize||gridSize<=0) {
      alert ("Please enter a valid number!")
   }

  else if (gridSize>100) {
      alert ("The maximum size is 100 squares per side");
    
   }
   else  {
      createGrid(gridSize);
   }
   
})

resetBtn.addEventListener("click", ()=> {
   const boxes = document.querySelectorAll(".box")
   boxes.forEach(box => {
      box.style.backgroundColor="white"
   });
})


