const box = document.querySelectorAll(".box");

var txt = document.getElementById("text");
var str = "Now create your own design from scratch";


for(let i = 0; i < box.length; i++)
{
   box[i].addEventListener("click",()=>
{
  if(box[i].classList.contains("boxclicked"))
  {
    box[i].classList.remove("boxclicked")
  }
  else
  {
    box[i].classList.add("boxclicked")
  }
})
}

function buttonclear()
{
  for(let i = 0; i < box.length; i++)
{
  if(box[i].classList.contains("boxclicked"))
  {
    box[i].classList.remove("boxclicked")
  }
}
txt.innerHTML = str;
}


// function buttonreset()
// {
//   console.log("done");
//   for(let i = 0; i < box.length; i++)
// {
//   if(box[i].classList.contains("boxclicked"))
//   {
//     box[i].classList.remove("box")
//   }
//   else
//   {
//     box[i].classList.add("box")
//   }
// }
// }
