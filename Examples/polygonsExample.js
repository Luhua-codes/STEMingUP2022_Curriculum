class Polygon {
    constructor(numSides) { //when the new keyword is used with the class name, this method is called to make a new object
        this.numSides = numSides;
    }

    print() {
        console.log(`This is a ${this.constructor.name} with ${this.numSides} sides.`);
    }
}

class Rectangle extends Polygon { //extends (inherits from) Polygon -> can use methods and properties of Polygon
    constructor(width, length) {
        super(4); //calls the constructor from Polygon, and supplies 4 sides as numSides
        this.width = width;
        this.length = length;
    }

    area() { //implement area method
        return this.length * this.width;
    }

    perimeter() { //implement perimeter method
        return 2 * this.length + 2 * this.width;
    }

    print() {
        console.log(`This is a ${this.constructor.name} with width ${this.width} and length ${this.length}. The area is ${this.area()} and the perimeter is ${this.perimeter()}.`);
    }

    //should not directly access internal properties from outside the class -> getter methods allow safe access
    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    //should not be able to directly modify internal properties from outside the class -> setter methods allow safe access
    setWidth(width) {
        this.width = width;
    }

    setLength(length) {
        this.length = length;
    }
}

class Square extends Rectangle { //can inherit from a class that extends another class -> can use methods/properties of all ancestors
    constructor(sideLength) {
        super(sideLength, sideLength); //length and width are the same
    }

    //calls inherited methods (area, perimeter, print) since they are not re-implemented
    //square width/length values will always be the same, should only return 1 value -> re-implement setters and getters to be different from Rectangle
    getSideLength() {
        return this.width;
    }

    setSideLength(sideLength) {
        this.width = sideLength;
        this.length = sideLength;
    }
}

let myPolygon = new Polygon(10);
console.log(myPolygon); //log json
myPolygon.print(); //calls Polygon.print()

let myRectangle = new Rectangle(2, 4);
console.log(myRectangle); //log json
myRectangle.print(); //calls Rectangle.print()

let mySquare = new Square(3);
console.log(mySquare); //log json
mySquare.print(); //calls Rectangle.print()