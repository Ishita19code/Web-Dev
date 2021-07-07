const text = document.querySelector('input');
const btn = document.querySelector('.button_css'); 
const todolist = document.querySelector('.todolist');
const localStorageSet = document.querySelector(".localStorage");
const clear = document.querySelector(".clear_css");

//for local storage pehle set the value of indexI to zero. In console(in browser), type localStorage.setItem('indexI', 0). Then it would execute properly.

btn.addEventListener('click', ()=> 
{
  var index = localStorage.getItem("indexI"); 
  var usableIndex = Number(index);
  const newTodo = document.createElement('li');
  // newTodo.innerText = text.value;
  // todolist.appendChild(newTodo);
  localStorageSet.append(newTodo);
  for (let i = 0; i < localStorage.length; i++)
  {
    newTodo.innerHTML= localStorage.getItem(localStorage.key(i));//tried to use this to get value in local storage on html page.
  }
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
  console.log(localStorage);
});  

clear.addEventListener('click', ()=>
{
  localStorage.clear();
  location.reload();
  localStorage.setItem('indexI', 0);
});