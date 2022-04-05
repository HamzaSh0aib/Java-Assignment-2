
            // Java Assignment 2//
 
            /// Question No 1////

// var hamz = [];
// console.log(name);

            /// Question No 2////

// var  shoaib = new Array();
// console.log(shoaib);

            /// Question No 3////

// var user ;
// user = ["Array", "Initailization"];
// console.log(user)

            /// Question No 4////

// var userId ;
// userId = [1 , 2 , 4 , 5];
// console.log(userId);

            
            /// Question No 5////

// var used ;
// used = [true , false];
// console.log(used);


            /// Question No 6////

// var userI ;
// userI = ["Hello" ,23,true ];
// console.log(userI);


            /// Question No 5////
// var hamz ;
// hamz = ["SSC","HSC","BSC","PHD","M,phil","BCOM","MS"];
// document.write(hamz);

// var arr = [
//     ["1) HSC","2) SSC"],
//     ["3) M.PHIL","4) MA"],
//     ["5) PHD","6) BA"]
// ]

// for(var row = 0; row < arr.length; row++){
//     for(var col = 0; col < arr[row].length;col++){
//         console.log(arr[row][col])
//     }
// }

            /// Question No 6////


// var Name = ["HAMZA","USMAN","AHMED"];
// var Mark = [340,450,240];

// var per = (Mark[0]/500 *100);
// var per1 = (Mark[1]/500 * 100);
// var per2 = (Mark[2]/500 *100);

// document.write("Score Of "+Name[0]+" is "+Mark[0]+" and per is = " + per +"% </br>")
// document.write("Score Of "+Name[1]+" is "+Mark[1]+" and per is = " + per1 +"%</br>")
// document.write("Score Of "+Name[2]+" is "+Mark[2]+" and per is = " + per2 +"%</br>")

            /// Question No 9////
// var cName = [" Brown "," Pink "," purple "," Green "];
// console.log(cName); 

// //  A
// cName.unshift("RED");
// console.log(cName)

// //  B
// cName.push("Blue");
// console.log(cName)

//     // C
// cName.unshift("RED","BLUE");
// console.log(cName)


// //  D
// cName.shift();
// console.log(cName)

// /  E
// cName.pop();
// console.log(cName)


//// F
// var innum = prompt("Enter index number");
// var coname = prompt("Enter Colour Name");
// cName.splice(num,0,coname);
// console.log(cName);


// ////  G 
// var Index = prompt("Enter index number");
// var toindex = prompt("Enter number delete");
// cName.splice(Index,toindex,0);
// console.log(cName)

            /// Question No 10////

// var a = [320,128,480,560,22,445];
// console.log(a);

// a.sort();
// console.log(a)

            /// Question No 11////
// document.write("<h1>Citites List:</h1></br>")
// var cities = [" Karachi "," Peshawar "," Sindh "," Sailkot "];
// document.write(cities)

// document.write("<h1>Selected Citites List:</h1></br>")
// var slCity = cities.slice(2,4);
// document.write(slCity)

            /// Question No 12////

// var arr = [" This " ,  " is ",   " my ", " cat "]
// console.log("ARRAY  " + arr.join());
//  console.log("String " + arr.join(''));

            /// Question No 13////
//    var num = prompt(" number of index")
//  var array = []
//   for(var i = 0; i < num; i++){
//       array.push(prompt("enter order"))
//    }
//    for(var i = 0; i < n; i++){
// document.write('Out:')    
// document.write(array[i]+"</br>")

// else{
    //     document.write("Invalid order")
    // }
    // }
//    }

            /// Question No 14////
//   var num = prompt(" number of index")
//  var arrar = []
//   for(var i = 0; i < num; i++){
//     arrar.push(prompt("enter orderd"))
//  }
// for(var i = arrar.length-1 ; i >= 0; i--){
//     document.write('Out:')
//      document.write(arrar[i]+"</br>")
// else{
//     document.write("Invalid order")
// }
// }

            /// Question No 15////
// var mbl = ["Iphone","Motrola","Samsung","Nokia",];

// for(var i = 0; i <= mbl.length;i++){
//     console.log(mbl[i])
// };
// else{
//     console.log("Invaid Phone")
// }

           // // chap no 1 complete/////


////chap 2 LOOP And arrays////

// question no 1//

// var multi_Array = [
//     [, ,]  ,  [, , ,  ,]
// ];

// question no 2//

// var matrix = [
//         [0,1,2,3],
//         [2,9,8,6],
//         [23,4,5,6]
//     ]

// document.write(matrix[0]+'<br>');
// document.write(matrix[1]+'<br>');
// document.write(matrix[2]+'<br>')
   
// question no 3//

// for (var i = 1;i<=10;i++){
//     console.log(i+"</br>")
// }

// question no 4//
// var table_num = +prompt("Enter Table number");
// var table_length = +prompt("Enter Table length");
// for(var i = 1; i<=table_length;i++){
//     document.write(table_num +" x "+i+" = "+ table_num*i+"<br>")
// }

// // question no 5//
// var fruit_name = ["mango","Apple","banana","grapps","nuts","nuts"];
// for(var e = 0;e < fruit_name.length;e++){
//     document.write(fruit_name[e]+'<br>')
// }

// for(var e = 0;e < fruit_name.length;e++){
//     document.write("Element at index "+ e + " is " + fruit_name[e]+'<br>');
// }

// // question no 6//
// document.write('<h2>Counting<h2>')
// for(var f = 1; f <= 15;f++){
//     document.write(f + ',')
// } 
// document.write('<h2>Reverse count<h2>')
// for(var f = 10; f >= 1;f--){
//     document.write(f + ',')
// } 
// document.write('<h2>Even<h2>')
// for(var f = 0; f <=20;f+=2){
//     document.write(f + ',')
// } 
// document.write('<h2>Odd<h2>')
// for(var f = 1; f <= 19;f+=2){
//     document.write(f + ',')
// } 
// document.write('<h2>series<h2>')
// for(var f = 2; f <=20 ;f+=2){
//     document.write(f + "k"+',')
// } 

// // question no 7//

// var A = ["Mango","Apple","Banana","Grapps","Cookie"];
// var user = prompt("Enter Furite Name");
// var maych = false;

// for (var g = 0 ; g < A.length;g++){
//     if(user===A[g]){
//         document.write(user + " is Avaliable at index "+ g +" in our mart ")
//   maych=true;
//   break;
//   }
// }

// if (maych === false){
//     document.write( "We are Sorry "+user +" is not Avaliable ")

// }

// // question no 8//
// for (var i=0; i<=largest;i++){
    //     if (array[i]>largest) {
    //         var largest=array[i];
    //     }
    // }
    // document.write("arrays item : " + array + "</br>" );
    // document.write("the largest number is " + largest);
    

    
    //  Question No 09   //
    
    // var array = [24, 53, 78, 91, 12]
    // var smallest= 100000000;
    
    // for (i=0; i<=smallest;i++){
    //     if (array[i]<smallest) {
    //         var smallest=array[i];
    //     }
    // }
    // document.write("Aaray item  " + array + "</br>");
    // document.write("the Smallest number is " + smallest);
    
    
    
    //  Question No 10  //
    
    // for(var i=5 ; i<=100 ; i+=5){
    //         document.write(i +"  ," )
    //     }