class Rectangle{
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height*this.width;
    }
}

const square = new Rectangle(10, 10);
// const square = new Rectangle(10);

console.log(square.calcArea());