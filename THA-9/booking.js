const box = document.querySelectorAll(".box");
const btn = document.querySelector("button");

var bookseats = document.getElementById("bookid");
var notbookseats = document.getElementById("notbookid");
var str1 = "Booked Seats";
var str2 = "Remaining Seats";

var countBookedDisplay = document.getElementById("countBookedID");
var countNotBookedDisplay = document.getElementById("countNotBookedID");
var countBooked = 0;
var countNotBooked = 36;

bookseats.innerHTML = str1;
notbookseats.innerHTML = str2;
countBookedDisplay.innerHTML = countBooked;
countNotBookedDisplay.innerHTML = countNotBooked;

for(let i =0; i < box.length; i++)
{
  box[i].addEventListener("click", ()=>
{
  if(box[i].classList.contains('boxclicked'))
  {
    box[i].classList.remove('boxclicked');
    countNotBooked++;
    countBooked--;
    countNotBookedDisplay.innerHTML = countNotBooked;
    countBookedDisplay.innerHTML = countBooked;
  }
  else
  {
    box[i].classList.add('boxclicked');
    countBooked++;
    countNotBooked--;
    countNotBookedDisplay.innerHTML = countNotBooked;
    countBookedDisplay.innerHTML = countBooked;
  }
});
}

btn.addEventListener("click", ()=>
{
  for(let i =0; i < box.length; i++)
  {
    if(box[i].classList.contains('boxclicked'))
    {
      box[i].classList.remove('boxclicked');
      countNotBooked = 36;
      countBooked = 0;
      countNotBookedDisplay.innerHTML = countNotBooked;
      countBookedDisplay.innerHTML = countBooked;
    } 
  }
  
})
