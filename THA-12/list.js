const text = document.querySelector('input');
const btn = document.querySelector('.button_css'); 
const todolist = document.querySelector('.todolist');
const displayOnload = document.querySelector('.display');
const localStorageSet = document.querySelector(".localStorage");
const clear = document.querySelector(".clear_css");

//for local storage pehle set the value of indexI to zero. In console(in browser), type localStorage.setItem('indexI', 0). Then it would execute properly.

btn.addEventListener('click', ()=> 
{
  var index = localStorage.getItem("indexI"); 
  var usableIndex = Number(index);
  const newTodo = document.createElement('div');
  todolist.appendChild(newTodo);
  localStorageSet.append(newTodo);
  newTodo.innerText = text.value;
  localStorage.setItem(usableIndex, text.value); 
  usableIndex++; 
	localStorage.setItem("indexI", usableIndex);
  text.value = "";
  newTodo.addEventListener('click', ()=>
  {
    newTodo.style.textDecoration = "line-through";
  })

  newTodo.addEventListener('dblclick', ()=>
  {
    newTodo.remove(newTodo);
  })
});  

clear.addEventListener('click', ()=>
{
  localStorage.clear();
  location.reload();
  localStorage.setItem('indexI', 0);
});

window.onload = reload();
function reload()
  {
    if(localStorage.length > 1)
    {
      for(let i = 0; i < localStorage.length; i++)
      {
        const newTodo = document.createElement('div');
        newTodo.innerText = localStorage.getItem(i);
        localStorageSet.append(newTodo);
        todolist.appendChild(newTodo);
        newTodo.addEventListener('click', ()=>
        {
          newTodo.style.textDecoration = "line-through";
        })
        newTodo.addEventListener('dblclick', ()=>
        {
          newTodo.remove(newTodo);
        })
      }
    }
  } 


