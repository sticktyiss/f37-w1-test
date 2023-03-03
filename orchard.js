///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
//create a variable that saves the total acres
let totalAcres = 0
//create an array of the acres
const acres = [fujiAcres, galaAcres, pinkAcres]
// create a for loop to cycle through acres array
for (let i=0; i<acres.length; i++){
    // create a nested for loop to cycle through individual acres and add each value to totalAcres
    // console.log(acres[i])
    for (let n=0; n<acres[i].length; n++){
        // console.log(acres[i][n])
        totalAcres += acres[i][n]
    }
}
console.log(totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = 0
// divide the total pickings for the week by 7
averageDailyAcres = totalAcres/7
console.log(averageDailyAcres)

//The commented code below was my first attempt, but I was WAY overthinking!
//create array to save daily total
// const dailyPicks = []
// //create a for loop to cycle through each day and add it to a total in the dailyPicks array.
// for(let i=0; i<7; i++){
//     // push the value since one doesn't yet exist in dailyPicks
//     dailyPicks.push(fujiAcres[i]+pinkAcres[i]+galaAcres[i])
// }
// console.log(dailyPicks)
// // add the daily picks for the week with a for loop
// for (let i=0; i<dailyPicks.length; i++){
//     averageDailyAcres += dailyPicks[i]
// }


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
// write a while loop to run until acres left reaches 0.
// the iterate days to estimate how many days until the amount of acres runs out
while (acresLeft>0){
    acresLeft -= averageDailyAcres
    days += 1
}
console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// make empty arrays, loop the old ones
// and use the push method to add new 
// values to the new arrays.
let fujiTons = []
let galaTons =[]
let pinkTons =[]
let acreTons = [fujiTons,galaTons,pinkTons]
for (let i=0; i<acres.length; i++){
    // console.log(acres[i])
    // create a nested for loop to cycle through individual acres and push each converted value to appropriate tons array
    for (let n=0; n<acres[i].length; n++){
        acreTons[i].push(acres[i][n]*6.5)
    }
    console.log(acreTons[i])
}



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// make empty arrays, loop the old ones
// and use the push method to add new 
// values to the new arrays.
let fujiPounds = []
let galaPounds = []
let pinkPounds = []
let acrePounds = [fujiPounds,galaPounds,pinkPounds]
for (let i=0; i<acreTons.length; i++){
    // create a nested for loop to cycle through individual acres and push each converted value to appropriate pounds array
    for (let n=0; n<acreTons[i].length; n++){
        acrePounds[i].push(acreTons[i][n]*2000)
    }
    console.log(acrePounds[i])
}




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0
// create arrays for the profits and an array for the apple prices
// make sure the arrays are in the same order so the prices calculate with the appropriate acre picking
const prices = [fujiPrice, galaPrice, pinkPrice]
let profits = [fujiProfit, galaProfit, pinkProfit]
// console.log(prices)
// cycle through the acrePounds array 
for (let i=0; i<acrePounds.length; i++){
    // create a nested for loop to cycle through individual acres and push each converted value to appropriate profit array
    for (let n=0; n<acrePounds[i].length; n++){
        profits[i] += acrePounds[i][n]*prices[i]
    }
    console.log(profits[i])
}


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = 0
// add up the three apple profit totals
totalProfit += profits[0]+profits[1]+profits[2]
console.log(totalProfit)