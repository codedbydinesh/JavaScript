const btn = document.querySelectorAll('.btn')
const body = document.querySelector("body")

btn.forEach(function(buttons){
    console.log(buttons);
    buttons.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'cyan'){
            body.style.backgroundColor = e.target.id;
        }
        
    })
});