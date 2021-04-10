function getResult(result){
    form.displayResult.value=form.displayResult.value+result;
    }


function backspace(){
    var number=form.displayResult.value;
    var len=number.length-1;
    var newnumber=number.substring(0,len);
    form.displayResult.value= newnumber;
    }