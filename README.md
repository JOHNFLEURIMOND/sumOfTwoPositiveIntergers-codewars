![Codewars](img/exesAndOhs.png)

# My Awesome Project
Question:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

In this Codewars challenge, I received a question that must return a boolean and be sentitive

## How It's Made
First I created an xCount & oCount and set to zero and return xCount === oCount.

function XO(str) {
  let xCount = 0;
  let oCount = 0;


  return xCount === oCount;
}


We have to look at every single letter (i < str.length;i++;) in the string so I had to set up a for(loop) for that!

for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  if (letter === "x" || letter === "X") {
    xCount++;
  } else if (letter === "o" || letter === "O") {
    oCount++;
  }
}

In the for(loop) I had to create a variable that made it easier to right the single letter in the string with let letter = str[i]; The if/else statements check for the letter and if it sees a x or X it will increase the count and do the same for o or O!


all together it gives us.

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === "x" || letter === "X") {
      xCount++;
    } else if (letter === "o" || letter === "O") {
      oCount++;
    }
  }
  return xCount === oCount;
}

## Sample Tests:
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);


## Lessons Learned:

How to properly use .sort(), .length, for(loops), if/else statements help me create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
## portfolio:

**WEBSITE:** https:/johnfleurimond.com



## Happy Coding!!!!
