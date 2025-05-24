const container = document.querySelector(".container");
let isMouseDown= false;


// create a loop that creates 10 divs


function createGrid(size) {
    for (let row = 0; row < size; row++) {
       const rowDiv=document.createElement("div");
        rowDiv.className="row";  
      
       for (let col = 0; col < size; col++) {
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

createGrid(64);


