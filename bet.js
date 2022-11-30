function predict(){
    let result = Math.floor(Math.random() * 100);
    let validate = document.getElementById("validatenumber").value
    let win = ""
    let olule = ""
    if (result==validate){
        win = `YOU WON THE BET. your predicted number is ${validate} and the potential number is ${result}`
    }
    else{
        olule = `YOU LOSS THE BET. your pedicted number ${validate} and the potential number is ${result}`
    }
    document.getElementById("idwin").innerHTML = win;
    document.getElementById("loss").innerHTML = olule;
}