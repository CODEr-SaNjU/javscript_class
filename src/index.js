var btnclick , userinput
btnclick = document.querySelector('#btn-click')
userinput = document.querySelector('#text-input')
output = document.querySelector('.output-area')
btnclick.style.backgroundColor = "green"
var url = "https://api.funtranslations.com/translate/minion.json"

function getTransale(text){
    return url + "?" + "text=" + text
}

function errorcontroler(error){
    // console.log("error catch here",error)
    alert("somtihin wrong ",error)
}

function showMessage(){
    var userinputvalue = userinput.value
    fetch(getTransale(userinputvalue))
    .then(response => response.json())
    .then(json =>{
        var transaltedcontent = json.contents.translated;
        output.innerText = transaltedcontent
    })
    .catch(errorcontroler)
};

btnclick.addEventListener('click'
    ,showMessage)

