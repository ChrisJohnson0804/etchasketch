let numrows = 32;
let numcols = 32;
let container = document.querySelector('#container');
let button = document.querySelector("#reset");

const makeGrid = (numrows, numcols) => {
    container.innerHTML = '';
    for(let i =0; i<numrows; i++){
    let newRowDiv = document.createElement('div');
    newRowDiv.setAttribute('style', 'display: flex');
    container.appendChild(newRowDiv);
        for(let j=0; j<numcols; j++){
        let newDiv = document.createElement('div');
        newRowDiv.appendChild(newDiv);
        newDiv.classList.add('pixel');
        newDiv.addEventListener('mouseover', () => {newDiv.classList.add('etched')});
        }
    }
}

makeGrid(numrows, numcols);


let pixels = Array.from(document.querySelectorAll('.pixel'));

button.addEventListener('click', () => 
{numrows = prompt("How many rows?");
 while(numrows > 100){
    numrows = prompt("Rows cannot exceed 100. Please put something lower.");
 };
 numcols = prompt("How many columns?");
 while(numcols > 100){
    numcols = prompt("Columns cannot exceed 100. Please put something lower.");
 };
 makeGrid(numrows, numcols);
});