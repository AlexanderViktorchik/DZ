let fun = () => {
    console.log(this); //window
}
fun();



let obj = {
    age: 20,
    name: 'Ivan',
    sayAge: function () {
        let say = () => {
            console.log(this); //object
        }
        say();
    }
}
obj.sayAge();


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this); //button
    }
    show();
});


function calcOrDouble (nunber, basis = 2) {
    console.log(nunber*basis);
}

calcOrDouble(4, 3);
calcOrDouble(7);