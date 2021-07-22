//JavaScript THA 6 Ques 1
var a1 = 'w3Resourse';
var a2 = [1, 2, 4, 0];

function is_array(x)
{
  // console.log(Array.isArray(x));
  return Array.isArray(x);
}
// is_array(a1);
// is_array(a2);
console.log(is_array(a1));
console.log(is_array(a2));


//JavaScript THA 6 Ques 2
var b1 = [1, 2, 4, 0];
var b2 = [1, 2, [4, 0]];
function ar_clone(x)
{
  const array = x.slice(0,5);
  console.log(array);
}
ar_clone(b1);
ar_clone(b2);


//JavaScript THA 6 Ques 3
function first(arr, x)
{
  if(x==null)
  {
    return arr.shift();
  }
  if(x < 0)
  {
    return arr.slice(0,0);
  }
  return arr.slice(0,x);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


//JavaScript THA 6 Ques 4
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
console.log(myColor.join(", "));
console.log(myColor.join("+"));


//JavaScript THA 6 Ques 5
var c1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max = 1;
var count = 0;
var item;
for(var i = 0; i < c1.length; i++)
{
  for(let j = i; j < c1.length; j++)
  {
    if(c1[i] === c1[j])
    {
      count++;
    }
    if(max < count)
    {
      max = count;
      item = c1[i];
    }
  }
  count = 0;
}
console.log(item +"("+max +" times)");
