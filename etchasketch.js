let numrows = 32;
let numcols = 32;
let container = document.querySelector('#container');

container.setAttribute('style', 'grid-template-columns: repeat(' + numcols + ', minmax(auto, auto)); grid-template-rows: repeat(' + numrows + ', minmax(21px, auto));')

for(let i =0; i<numrows; i++){
    for(let j=0; j<numcols; j++){
       let newDiv = document.createElement('div');
       container.appendChild(newDiv);
       newDiv.classList.add('pixel');
       newDiv.addEventListener('mouseover', () => {newDiv.setAttribute('style', 'background-color: gray')});
    }
}