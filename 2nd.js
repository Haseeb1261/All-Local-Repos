// // const employee = {
// //     calcTax(){
// //         console.log("tax rate is 10%");
// //     },
// // };
// // const karanArjun={
// //     salary : 50000,
// //     calcTax(){
// //         console.log("Tax rate is 20%");
// //     },
// // };
// // // karanArjun.__proto__=employee;
// // class ToyotaCar{
// //     constructor(brand,mileage){
// //         console.log("Creating new object");
// //         this.brand=brand;
// //         this.mileage=mileage;
// //     }
// //     start(){
// //         console.log("car is started");
// //     }
// //     stop(){
// //         console.log("car is stopped");
// //     }
// // }
// // let fortuner=new ToyotaCar("Fortuner",12);
// // console.log(fortuner);
// // let lexus=new ToyotaCar("Lexus",10);
// // console.log(lexus);

// // //INHERITANCE
// // class parent{
// //     hello(){
// //         console.log("HELOOO WORLD! ..");
// //     }
// // }
// // class Child extends parent{}
// // let obj= new Child();
// // console.log(obj.hello());

// // class person{
// //      constructor(){
// //     this.walk="walk";
// //     }
// //     eat(){
// //         console.log("EAT");
// //      }
//     // sleep(){
//     //     console.log("SLEEP");
// //     // }

// //Call Back Hell Function

// // function getData(dataId,getNextData){
// //     setTimeout(()=>{
// //         console.log("hello",dataId);
// //         if(getNextData){
// //             getNextData();
// //         }
// //     },2000);
// // }
// // getData(1,()=>{
// //     getData(2,()=>{
// //         getData(3,()=>{
// //             getData(4);
// //         }); 
// //     });
// // });

// //A simple example of Call Back Hell Function
// // function searchData(val,getNext){
// //     setTimeout(()=>{
// //         console.log("VAL = ",val);
// //         if(getNext){
// //             getNext();
// //         }
// //     },2000);
// // }
// // searchData(3,()=>{
// //     searchData(4);
// // })
// function greet(name,callback){
//     console.log("hi this is "+""+name);
//     callback();
// }
// function callMe(){
//     console.log("Aisha");
// }
// greet('haseeb',callMe);

// Fetch API(Application programming interfaces )
  const URL = "https://cat-fact.herokuapp.com/facts";
  
  const getFacts = async () => {
    console.log("Getting data...");
    let response = await fetch(URL);
    console.log(response);  
    

  };
