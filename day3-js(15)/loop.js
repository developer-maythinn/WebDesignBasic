// let person = { username: "John", age: 25, address: "Myanmar"}

// for(let i in person){
//     console.log(person[i])
// }

// window.onload = function(){
//     let person = { username: "John", age: 25, address: "Myanmar"}
//     let text = "";
//     for(let i in person){
//         text += person[i] + "<br>"
//     }
//     document.getElementById("demo").innerHTML = text;
// }

// for of
// let colors = ["white", "black", "pink"];
// for(let i of colors){
//     console.log(i);
// }

// let username = "John";
// for(let i of username){
//     console.log(i);
// }

// let i = 0;
// let text = "";
// while(i < 3){
//     text += i;
//     i++;
// }
// console.log(text)

// let i = 0;
// let text = "";
// do{
//     text += i;
//     i++;
// }
// while(i < 5)
// console.log(text)

// let text = "";
// for(let i = 0; i < 10; i++){
//     if(i === 2){ break; }
//     text += i;
// }
// console.log(text)

// let text = "";
// for(let i = 0; i < 10; i++){
//     if(i === 6){ continue; }
//     text += i;
// }
// console.log(text)


let text = "";
// loop1:
// for(let i = 0; i < 10; i++){
//     if(i === 6){
//         continue loop1; 
//     }
//     text += i;
// }
loop2:
for(let i = 0; i < 10; i++){
    if(i === 4){
        break loop2; 
    }
    text += i;
}
console.log(text)
