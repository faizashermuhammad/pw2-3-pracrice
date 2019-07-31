//Question # 1
//  for(let i = 1; i <= 10; i++){
//     console.log(i);
//  }
// let input = 1;
// while (input <= 10) {
//  console.log(input);
//  input++;
// }
//Question # 2
// function printTable() {
//     let numb = parseInt(document.querySelector("input").value);
//     for (let i = 1; i <= 10; i++) {

//         console.log(numb * i);
//     }
// }

//Question # 2
//  let a = 2;
//  let b;

// for(let i = 1; i <= 10; i++){
//     b = a * i;

//     // document.write
//     console.log( " " + a + " * " + i + " = " , + b + "");
// }

// let students = [
//     {
//         name: "Amna",
//         hobbies: ["eating", "cooking"]
//     },
//     {
//         name: "Daniyal",
//         hobbies: ["arts", "shopping"]
//     },
//     {
//         name: "Fahad",
//         hobbies: ["coding", "cooking"]
//     },
//     {
//         name: "Hajra",
//         hobbies: ["sleep", "reading"]
//     }
// ];

// for (let i = 0; i < students.length; i++){
//     if(students[i].name + students[i].hobbies +"hobbies"){
//          console.log( "Hobbies Of " + students[i].name);
//          console.log(students[i].hobbies.includes(0) + students[i].hobbies);
//          console.log(" ");
//     }
// }
n=5; //size
for ( i = 1; i <= n; i++ )//outer loop
{
    for ( j = n-1; j >= i; j-- )//space loop
    //  {
    //      console.log(" "); //white space
    //  }
     for(k=1; k<=i;k++) //print loop
     {
        console.log(" * ");
    }
    console.log("\n");
}
