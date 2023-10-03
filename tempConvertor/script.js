const calculateTemp = () => {

    const numTemp = document.getElementById('temp').value;  // 0,1,2..
    const inputSelected = document.getElementById('diff_temp');  //drop down selection
    const valueTemp = inputSelected.options[inputSelected.selectedIndex].value; 
    // console.log(valueTemp.value); //fahrenheit
    let result;
    
    const celToFah = (num) => {
         return (num*1.8)+32;
    }
 
    const fahToCel = (num) => {
         return (num-32)/1.8;
    }

    if(valueTemp == 'celsius'){
        result = celToFah(numTemp)
        document.getElementById('result').innerHTML =`${result} °Fahrenheit ` ;
    } else if (valueTemp == 'fahrenheit') {
        result = fahToCel(numTemp)
        document.getElementById('result').innerHTML =`${result} °Celsius ` ;
    } 
}