// Способы использования модулей

// 1ый способ
let number = 1;

(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}());

console.log(number);

// 2ой способ
let user = (function(){
   let privat = function() {
       console.log('I am privat');
   }; 
   return {
       sayHello: function() {
           console.log('Hello');
       }
   };
}());

console.log(user);
console.log(user.sayHello());

// 3ий способ
let user = (function(){
    let privat = function() {
        console.log('I am privat');
    };
    let sayHello = function() {
        console.log('Hello');
    };
    return {
        sayHello: sayHello
    };
 }());
 
 console.log(user);
 console.log(user.sayHello());
 