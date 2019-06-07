let options = {
    width: 1080,
    height: 1920,
    font: {
        size: '12px',
        color: 'white'
    }
};
// console.log(options);
let a = JSON.stringify(options); //JSON.stringify превращает объект js в json
console.log(a);
console.log(JSON.parse(a));//JSON.parse превращает json в объект js
