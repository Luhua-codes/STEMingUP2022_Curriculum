class Polygon{ //abstract class
    constructor(numSides) { //when the new keyword is used with the class name, this method is called to make a new object
        this.numSides = numSides;
    }

    //abstract methods: child classes that extend from this class must implement them
    area(){};
    perimeter(){};

    print() {
        console.log(`This is a ${this.constructor.name} with ${this.numSides} sides.`);
    }
}

class Rectangle extends Polygon{ //extends (inherits from) Polygon -> can use methods and properties of Polygon
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
}

class Square extends Rectangle{ //can inherit from a class that extends another class -> can use methods/properties of all ancestors
    constructor(sideLength) {
        super(sideLength, sideLength); //length and width are the same
    }

    //calls inherited methods since they are not re-implemented
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