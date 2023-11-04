let inputBox = document.getElementById('input-box');
let listItem = document.querySelector('.list');

function addText(){
    if(inputBox.value===''){
        alert('please write somthing');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listItem.append(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    
}
listItem.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){

        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data",listItem.innerHTML);
}
function showTask(){
    listItem.innerHTML = localStorage.getItem("data");
}
showTask();

console.log(listItem.innerHTML);
