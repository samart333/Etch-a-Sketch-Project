



let container = document.querySelector("#container")
let clearButton = document.querySelector('button')
const div = document.createElement('div');
let n = 16;


createGrid(n)
let divNodeList = document.querySelectorAll('.box')

sketch()

clearButton.addEventListener('click', askNewGridSize)










// Function declarations



function createGrid (n) {    
    for(i=0; i<n*n; i++){

        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
        // container.style.display = 'grid';
        // container.style.gridTemplateColumns = 'repeat(gridSize, 50px)';
        // container.style.gridTemplateRows = 'repeat(gridSize, 50px)';

        // grid-template-columns: repeat(gtdsize 50px);
        // grid-template-rows: repeat(grdsize, 50px);
        
    
    
    
    }
}

function sketch(){
    console.log(divNodeList)
    divNodeList.forEach((div) => {
    
    
        div.addEventListener('mouseover', (e) => {
            div.style.background = 'black';
            });
    
        });
    }




  function askNewGridSize(){

    
        
        
        document.getElementById('container').innerHTML = "";
    

    
        // send the user a popup asking something
        
        let newSquares = prompt("How many squares per side for the new grid?")
    
        let newGrid  = Number(newSquares)

        // document.querySelector('#container').style.gridTemplateColumns = `newGrid`;

        // console.log(document.querySelector('#container').style.gridTemplateColumns = newGrid)

        document.querySelector('#container').style.gridTemplateColumns = `repeat(${newGrid}, ${800/newGrid}px)`
    
        createGrid(newGrid)

        
        divNodeList = document.querySelectorAll('.box')
    
        sketch()
    
        console.log(newGrid)

        if(newGrid!=newGrid){
            alert("Please input a number")
        }
    
        if(newGrid===0){
            alert("Please input a number")
        }

        
    
    
  }





























// let div1 = document.createElement('div');
// let div2 = document.createElement('div');
// let div3 = document.createElement('div');
// let div4 = document.createElement('div');
// let div5 = document.createElement('div');
// let div6 = document.createElement('div');
// let div7 = document.createElement('div');
// let div8 = document.createElement('div');
// let div9 = document.createElement('div');
// let div10 = document.createElement('div');
// let div11 = document.createElement('div');
// let div12 = document.createElement('div');
// let div13 = document.createElement('div');
// let div14 = document.createElement('div');
// let div15 = document.createElement('div');
// let div16 = document.createElement('div');



// container.appendChild(div1)
// container.appendChild(div2)
// container.appendChild(div3)
// container.appendChild(div4)
// container.appendChild(div5)
// container.appendChild(div6)
// container.appendChild(div7)
// container.appendChild(div8)
// container.appendChild(div9)
// container.appendChild(div10)
// container.appendChild(div11)
// container.appendChild(div12)
// container.appendChild(div13)
// container.appendChild(div14)
// container.appendChild(div15)
// container.appendChild(div16)

// div1.textContent="hh"
// div2.textContent="jjj"
// div3.textContent="gggg"
// div4.textContent="hh"
// div5.textContent="jjj"
// div6.textContent="gggg"
// div7.textContent="hh"
// div8.textContent="jjj"
// div9.textContent="gggg"
// div10.textContent="hh"
// div11.textContent="jjj"
// div12.textContent="gggg"
// div13.textContent="hh"
// div14.textContent="jjj"
// div15.textContent="gggg"
// div16.textContent="gggg"








