const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const msg = document.querySelector('#msg')
    

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `please give valid height ${height}` 
         result.style.backgroundColor = '#ffb09c'     
           result.style.color = 'red' 
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `please give valid weight ${weight}` 
         result.style.backgroundColor = '#ffb09c'     
           result.style.color = 'red' 
    }else{
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
       // show result
       result.innerHTML = `<span>${bmi}</span>`
       if(bmi < 18.6){
           msg.innerHTML = `You are under weight`
           msg.style.backgroundColor = '#ffb09c'     
           msg.style.color = 'red'     
       }else if(bmi >= 18.6 && bmi <= 24.9){
           msg.innerHTML = 'you are in normal range'
            msg.style.backgroundColor = 'rgb(230, 255, 230)'     
           msg.style.color = 'green' 
       }else if(bmi > 24.9){
           msg.innerHTML = 'you are over-weight'
           msg.style.backgroundColor = '#ffb09c'     
           msg.style.color = 'red' 
       }
    }


})