var btnclick , userinput
btnclick = document.querySelector('#btn-click')
userinput = document.querySelector('#text-input')
output = document.querySelector('.output-area')
btnclick.style.backgroundColor = "green"
function showmessage(){
    output.innerText = "this is transale "+ " "+ userinput.value
};

btnclick.addEventListener('click'
    ,showmessage)

