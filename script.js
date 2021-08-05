current_mode="color-mode";
let color_btn=document.getElementById("color-mode");
let rainbow_btn=document.getElementById("rainbow-mode");
let eraser_btn=document.getElementById("eraser-mode");

color_btn.addEventListener("click",(e)=>{
current_mode=e.target.id;
changeButtonColor(e.target.id);
console.log(e.target.id);

})
rainbow_btn.addEventListener("click",(e)=>{
    current_mode=e.target.id;
    changeButtonColor(e.target.id);
    console.log(e.target.id);
})
eraser_btn.addEventListener("click",(e)=>{
    current_mode=e.target.id;
   changeButtonColor(e.target.id);
   console.log(e.target.id);
})

function changeButtonColor(id)           //return the two buttons to the defautls
{
    if(id==="color-mode")
    {
        console.log("y");
        color_btn.style.color="white";
        color_btn.style.backgroundColor="black";   
        eraser_btn.style.color="black";
        rainbow_btn.style.color="black";
        rainbow_btn.style.backgroundColor="#dddddd";
        eraser_btn.style.backgroundColor="#dddddd";
    }
    if(id==="rainbow-mode")
    {
        console.log("masdas");
        rainbow_btn.style.color="white";
        rainbow_btn.style.backgroundColor="black";
        color_btn.style.color="black";
        eraser_btn.style.color="black";
        color_btn.style.backgroundColor="#dddddd";
        eraser_btn.style.backgroundColor="#dddddd";
    }
    if(id==="eraser-mode")
    {
        console.log("m");
        eraser_btn.style.color="white";
        eraser_btn.style.backgroundColor="black";     
        color_btn.style.color="black";
        rainbow_btn.style.color="black";
        color_btn.style.backgroundColor="#dddddd";
        rainbow_btn.style.backgroundColor="#dddddd";
    }
}

function make_grid(size)
{
    let container=document.getElementById("grid-container");
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    btn=document.getElementById("Grade-Lines");
    for(let i=0;i<size*size;i++)
    {
        let grid_item=document.createElement("div");
        grid_item.classList.add("grid-item");
        grid_item.addEventListener("mouseover",change_color)
        container.appendChild(grid_item);
        if(btn.classList.contains("clicked"))
        {
           grid_item.style.border="1px solid white";
        }
    }
}
make_grid(16); //default size


let items=document.getElementsByClassName("grid-item");
for(let i=0;i<items.length;i++)
{
   
}

function random_color()
{
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
return rgb;
}

function change_color(e)
{

    let radio=document.getElementById("black");
    let eraser=document.getElementById("eraser");
    let color=document.getElementById("favcolor");
    if(current_mode==="color-mode")
    {
        e.target.style.backgroundColor=color.value;
    }
    if(current_mode==="eraser-mode")
    {
        console.log("1");
        e.target.style.backgroundColor= "#e5e5e5";
    }
    if(current_mode==="rainbow-mode")
    {
        e.target.style.backgroundColor= random_color();
    }
}


//////// clear button ////////
document.getElementById("clear").addEventListener("click",clear);
function clear() {
    grids=document.getElementsByClassName("grid-item");
    for(let i=0;i<grids.length;i++)
    {
        grids[i].style.backgroundColor="#e5e5e5";
    }
}

let label=document.getElementById("range-label");
document.getElementById("myRange").addEventListener("change",(e)=>{
    clear_grid();
    make_grid(e.target.value);
    label.textContent=e.target.value +" x "+ e.target.value 
})

document.getElementById("myRange").addEventListener("mousemove",(e)=>{
    label.textContent=e.target.value +" x "+ e.target.value 
})




function clear_grid() {
    document.querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e)); 
}

//////////  adding and removing grade lines ////////////
document.getElementById("Grade-Lines").addEventListener("click",Grade_lines);
function  Grade_lines(e) {
    if(e.target.classList.contains("clicked"))
    {
        console.log("m");
      e.target.classList.remove("clicked");
      grids=document.getElementsByClassName("grid-item");
        for(let i=0;i<grids.length;i++)
        {
            grids[i].style.border="none";
        }
    }
    else
    {
        e.target.classList.add("clicked");
        grids=document.getElementsByClassName("grid-item");
        for(let i=0;i<grids.length;i++)
        {
            grids[i].style.border="1px solid white";
        }
    }
}