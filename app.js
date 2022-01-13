document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const addBtn = document.querySelector('#add')
    const subBtn = document.querySelector('#sub')
    const multBtn = document.querySelector('#mult')
    const delBtn = document.querySelector('#del')
    const output = document.querySelector('#output')
  
    function getInputValues() {
      const value1 = parseInt(num1.value)
      const value2 = +num2.value
  
      return [value1, value2]
    }
  
  
    function addHandler() {
      const values = getInputValues()
      // console.log(values)
  
      const result = values[0] + values[1]
  
      displayResult(result)
    }
  
    function subHandler() {
      const values = getInputValues()
  
      const result = values[0] - values[1]
  
      displayResult(result)
    }

    function multHandler() {
        const values = getInputValues()
    
        const result = values[0] * values[1]
    
        displayResult(result)
      }

      function delHandler() {
        const values = getInputValues()
    
        const result = values[0] / values[1]
    
        displayResult(result)
      }
  
    function displayResult(result) {
      output.closest('.card').style.display = 'block'
      output.innerHTML = `Результат = ${result}`
      console.trace()
    }
  
  
    // console.log('Test', addBtn)
  
    addBtn.addEventListener('click', addHandler)
    subBtn.addEventListener('click', subHandler)
    multBtn.addEventListener('click', multHandler)
    delBtn.addEventListener('click', delHandler)
  
  })
  
  
  // setTimeout(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, 5000)