let btn = document.querySelector('button');
let Task = document.getElementById('addTask');
let list = document.querySelector('.list-container');
let deleted = document.getElementById('.suprimer');
let messageErr = document.querySelector('h6');


btn.onclick = () => {
    if (Task.value == '') {
        messageErr.innerHTML ='please add a Task';
    }else{
        let li = document.createElement('li');
        li.innerText = Task.value;
        list.appendChild(li);
        let close = document.createElement('span');
        close.innerHTML = '&#x2715';
        li.appendChild(close);
    }
    Task.value='';
    saveData()
}

list.addEventListener('click',(e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    }else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem('data', list.innerHTML);
}
function showData(){
    if (localStorage.data) {
        list.innerHTML = localStorage.data;
    }
}

showData();