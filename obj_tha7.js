//JS THA 7 ques 1 
var student = 
{
  name: 'Ishita Gupta',
  studies: 'College ECE',
  rollNumber: 12
};
console.log(Object.keys(student));

//JS THA 7 ques 2
var student = 
{
  name: 'Ishita Gupta',
  studies: 'College ECE',
  rollNumber: 12
};
console.log(student);
delete student.rollNumber;
console.log(student);

//JS THA 7 ques 3
var student = 
{
  name: 'Ishita Gupta',
  studies: 'College ECE',
  rollNumber: 12
};
const objArray = Object.keys(student); //or can use Object.values(student);
console.log(objArray);
console.log(objArray.length);

//JS THA 7 ques 4
var library = [ 
  {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      readingStatus: true
  },
  {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }];  //here library is an array of objects. 

  //for printing acc to reading status
 for(let i = 0; i < library.length; i++)
 {
   var book = library[i].title + ' by ' + library[i].author;

   if(library[i].readingStatus)
   {
      console.log('You have read '+book);
   }
   else
   {
      console.log('You have not read '+book);
   }
 }

//JS THA 7 ques 5
const pi = 3.1416;
function cyclinder(r, h)
{
    this.radius = r;
    this.height = h;
    volume = 2*pi*r*h;
    console.log(volume.toFixed(4));
}
cyclinder(1.5, 3.14);

//JS THA 7 ques 6
var library = [ 
{ 
  title: 'The Road Ahead', 
  author: 'Bill Gates', 
  libraryID: 1254 
}, 
{ 
  title: 'Steve Jobs', 
  author: 'Walter Isaacson', 
  libraryID: 4264 
}, 
{ 
  title: 'Mockingjay: The Final Book of The Hunger Games', 
  author: 'Suzanne Collins', 
  libraryID: 3245 
}];
library.sort((a, b) =>
{
  if(a.author < b.author)
  return 1;

  if(a.author > b.author)
  return -1;

  if(a.author = b.author)
  return 0;
});

console.log(library);