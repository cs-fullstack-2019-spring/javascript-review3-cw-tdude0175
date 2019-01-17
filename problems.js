



main();

function main()
{
    //problem1();
    //problem2();
    // problem3();
    problem4();
}
/* Problem 1
Put the start of your program in a main function.
Create a loop that takes user input and put it in an array.
Once the user quits, print all items in the array.
DO NOT print the array,
print the items/elements in the array.
*/


    /*notes and comments:
    problem 1: Can i have some loops brother?
    what happens if you set an array to a const?
    you can still add things to an array even if the array is created with const
     */
    function problem1()
{
    const gatheredInformation = [];
    do
    {

        var userInput = prompt("gimme some data!");
        gatheredInformation.push(userInput);
        userInput = prompt("do you want to stay or quit?");


    }
    while( userInput !== "quit");

    console.log(gatheredInformation);

}


//Put the start of your program in a main function.
// Create a function that can translate five English words into Spanish words.
// You should be able to call your function from your main function.

/*
remember to put semicolons {;} at the end of your lines
NOT FUNCTIONS PARENTHESIS LINES
english why you got to be so hard
don't need to repeat but can add a loop if we want it to repeat

 */

function problem2()
{
    switch(prompt("i can translate 5 english words to spanish, try to find them!"))
    {
        case "Hello":
            console.log("Hola");
            break;
        case "Goodbye":
            console.log("Adeios");
            break;
        case "Thank you":
            console.log("Gracias");
            break;
        case "Sir":
            console.log("Senior");
            break;
        case "One":
            console.log("Uno");
            break;
        default:
            console.log("nope try again!");
            break;
    }

}


// Put the start of your program in a main function.
// Create a program that takes number inputs into an array until a quit word.
// Afterwards,
// display all numbers (not the array) and the sum.

/*
while loop used
DO WHILE WILL RUN AT LEAST ONCE
WHILE WILL ONLY RUN IF PARAMETERS ARE NOT MET
have to turn the input into a number
doing it inside line for the push for simplified use
display all numbers (not the array)?
sum can be done with reduce
you can list them from reduce
can you make the console.log(dataStorage look better?
build the function outside of the console.log
returning sum + end prints sum multiple times
put sum outside of finalValue for one print
 */

function problem3()
{
    const dataStorage = [];
    let exit = false;
    while(exit === false)
    {
        let userInput = prompt("gimme some numbers!!");

        if (!isNaN(userInput))
        {
            dataStorage.push(parseInt(userInput));
        }
        else if(userInput === "quit")
        {
            break
        }
    }
    let finalValue = dataStorage.reduce(
        function(x,y)
        {
            console.log(y);
            let end = x+y;
            return(end);
        },0 //the ,0 is used for assigning starting integer with .reduce
        );
    console.log("Sum = " + finalValue)


}


//Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author.
// Create a class method that will function that will change the rating of the book.
// Create three objects of the class Book and put them in an array.
// Lastly, use the array to display only the names of the books.

/*
build a book class
use constructor to assign values to this.name to tell them HEY THIS BOOK HAS THESE VALUES
keep them understandable
create a FUNCTION that will change the rating of the book
put three books in
one book AH AH AH
if you const an object into a class can you still change items inside or is the object itself the only thing locked?
if you let an object into a class will the object still exist OUTSIDE OF THE SCOPE OF A FUNCTION
can you use reduce inside of a class built function?
a class IS NOT AN ARRAY
a class DEFINES AN OBJECT
 */



function problem4()
{
    const library = [];

    class BoOkS
    {
        constructor(name,rating,genre,author)
        {
            this.name = name;
            this.rating = rating;
            this.genre = genre;
            this.author = author;
        }

        ratingRework(newRating)
        {
            console.log(this.name +" has been re-rated to " + newRating);
            return this.rating = newRating;

        }



    }
     let BlackCompany = new BoOkS("Black Company",9, "Dark Fantasy" , "Glenn Cook");
    var DraculaTape= new BoOkS("The Dracula Tape",8, "Dark Fantasy" , "Fred SaberHagen");
    const Hobbit = new BoOkS("The Hobbit",6, "Fantasy" , "J.J.R. Tolkein");

    library.push(BlackCompany,DraculaTape,Hobbit);

    let index= library.map(
        function (book)
                {
                    console.log(book.name);
                    return book.name;
                }
                );


}