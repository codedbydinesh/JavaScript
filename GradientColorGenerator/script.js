let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let copyCode = document.querySelector('.copy-code')

let color1 = "#32ac5d" 
let rgb1 = "#2D8099"
let rgb2 = "#51BC88"
let rgb3 = "#E4DC56"



const hexValues = () => {
    let colors = "#"
    let myHexValue = '1234567890abcdef'
    for(let i = 0; i<6; i++){
        colors = colors + myHexValue[Math.floor(Math.random() * 16)];       
    }
    return colors; 
}

const handleButton1 = () =>{
    rgb1 = hexValues();    
    // console.log(rgb1); 
    btn1.innerHTML = rgb1 
    
    document.body.style.backgroundImage = `linear-gradient(to right,
    ${rgb1} 0%, 
    ${rgb2} 50%, 
    ${rgb3} 100%)`;

    copyCode.innerHTML = `background: linear-gradient(to right, ${rgb1} 0%, 
    ${rgb2} 50%, 
    ${rgb3} 100%);`
}


const handleButton2 = () => {
    rgb2 = hexValues();    
    // console.log(rgb2); 
    btn2.innerHTML = rgb2 
    document.body.style.backgroundImage = `linear-gradient(to right,
    ${rgb1} 0%, 
    ${rgb2} 50%, 
    ${rgb3} 100%)`;  

    copyCode.innerHTML = `background: linear-gradient(to right, ${rgb1} 0%, 
    ${rgb2} 50%, 
    ${rgb3} 100%);`
}
const handleButton3 = () => {
    rgb3 = hexValues();    
    // console.log(rgb3); 
    btn3.innerHTML = rgb3  
    document.body.style.backgroundImage = `linear-gradient(to right,
    ${rgb1} 0%, 
    ${rgb2} 50%, 
    ${rgb3} 100%)`; 

    copyCode.innerHTML = `background: linear-gradient(to right, ${rgb1} 0%, 
    ${rgb2} 50%, 
    ${rgb3} 100%);`
}

btn1.addEventListener('click',handleButton1);
btn2.addEventListener('click',handleButton2);
btn3.addEventListener('click',handleButton3);

copyCode.addEventListener('click', () => {
    navigator.clipboard.writeText(copyCode.innerText)
    alert("Copied");
})
