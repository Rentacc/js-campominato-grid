const eleGrid = document.querySelector('.grid');


for(let i = 0; i < 100; i++){
eleGrid.innerHTML += '<div class="cell"></div>'
}


const listcells = document.querySelectorAll('.cell');

for (let i = 0; i < listcells.length; i++){
     const cell = listcells[i];
     cell.addEventListener('click' , 
     function(){
     console.log([i]);
     this.classList.toggle('clicked')
     }
     );
}
