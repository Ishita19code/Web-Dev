const text = document.querySelector("#inputField");
const btn = document.querySelector("button");
const display = document.querySelector(".addUsername");
const userInfo = document.querySelector("#infoField");

//info of user to be dispalyed taken dynamically

async function getData(username, userinfo) //for getting user object
{
  const res = await fetch('https://api.github.com/users/'+username+'/'+userinfo); //will give data from promise of fetch
  const data = await res.json(); //give promise
  return data;
}

btn.addEventListener('click', async ()=>
{
  let info = getData(text.value, userInfo.value);
  let user = await info;
  console.log(user);
  userInfo.value = "";
  // display.innerHTML = user.name;
})

//only for specific information of the user

// async function getData(username) //for getting user object
// {
//   const res = await fetch('https://api.github.com/users/'+username); //will give data from promise of fetch
//   const data = await res.json(); //give promise
//   return data;
// }

// btn.addEventListener('click', async ()=>
// {
//   let info = getData(text.value);
//   let user = await info;
//   console.log(user);
//   display.innerHTML = "This GitHub ID belongs to "+user.name;
// })

