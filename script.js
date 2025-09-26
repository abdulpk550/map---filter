// 1. Use map() to double each number in the array: [1, 2, 3, 4, 5].

let nums = [1, 2, 3, 4, 5];

let doubled = nums.map((item) => {
    return item + item;
});

console.log(doubled)

// Use map() to convert an array of strings to uppercase: ["apple", "banana",
// "cherry"].

let fruit = ["apple", "banana",
    "cherry"];
let capatilized = fruit.map((item) => {
    return item.toUpperCase()
});
console.log(capatilized);

// Use map() to extract the names from an array of objects:
// [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}].

let obj = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

let names = obj.map((item) => {
    return item.name
});
console.log(names)

// Use map() to return the length of each word in the array: ["dog", "elephant",
// "tiger"].

let arr = ["dog", "elephant", "tiger"];

let length = arr.map((item)=>{
return item.length;
});
console.log(length);

// Use map() to add a suffix -done to each task in an array: ["task1", "task2",
// "task3"].

let tasks =  ["task1", "task2","task3"];

let suffix = tasks.map((item)=>{
    return `${item} done`
});
console.log(suffix)

// Use map() to square each number in an array: [2, 4, 6, 8]

let num =[2, 4, 6, 8];

let square = num.map((item)=>{
return item * item;
});
console.log(square);

// Use map() to convert an array of prices to strings with a $ sign.

let prices = [120, 250, 75, 300, 150, 450, 90, 220];

let numToStr = prices.map((item)=>{
    return `$${item.toString()}`
});
console.log(numToStr);

// Use map() to format an array of dates into readable strings.

let dates = [
  new Date(2025, 0, 5), 
  new Date(2025, 1, 12), 
  new Date(2025, 2, 20), 
  new Date(2025, 3, 15), 
  new Date(2025, 4, 30), 
  new Date(2025, 5, 18), 
  new Date(2025, 6, 25), 
  new Date(2025, 7, 10)   
];

let readableDate = dates.map((item)=>{
    return item.toDateString()
});
console.log(readableDate)

// Use map() to create an array of booleans indicating if each number is even.

let bool = prices.map((item)=>{
    if(item %2 === 0){
        return true
    }else{
        return false
    }
});

console.log(bool)

// 10. Use map() to append the index to each string in an array.

let appendedIndex = prices.map((item , index)=>{
    return `${item} ${index}`
});

console.log(appendedIndex)