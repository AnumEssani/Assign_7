

function insert(num){
    var inputBox = document.getElementsByClassName('textview')[0].value;
    document.getElementsByClassName('textview')[0].value = inputBox+num
}
function equal(){
    var data = document.getElementsByClassName('textview')[0].value;
    if(data){
        document.getElementsByClassName('textview')[0].value = eval(data)
    }
}
function clearAll(){
    document.getElementsByClassName('textview')[0].value =""
}
function backSpace(){
    var back = document.getElementsByClassName('textview')[0].value;
    document.getElementsByClassName('textview')[0].value = back.substring(0,back.lenght-1)
}