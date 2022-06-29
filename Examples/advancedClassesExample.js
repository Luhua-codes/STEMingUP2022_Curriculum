class Chair {
    static countChairs = 0; //keeps track of the total number of chairs

    constructor(colour, seatSize, seatHeight) {
        Chair.countChairs++; //whenever a new chair is made, increase the counter

        this.colour = colour;
        this.seatSize = seatSize; //inches
        this.seatHeight = seatHeight; //inches

        //assigned with default values
        this.backSupport = false;
        this.headSupport = false;
        this.padding = false;
        this.armRests = false;
        this.heightAdjustable = false;
    }

    //abstract methods
    adjustHeight() {
    };

    moveChair() {
    };
}

class OfficeChair extends Chair {
    constructor(colour, seatSize, seatHeight) { //overloaded constructor with default values assigned
        super(colour, seatSize, seatHeight); //calls the constructor belonging to the superclass (Chair)
        this.type = "Office Chair"; //new property, identifies the type of chair

        //default values that are different for an office chair
        this.backSupport = true;
        this.headSupport = true;
        this.padding = true;
        this.armRests = true;
        this.heightAdjustable = true;
    }

    //implement the abstract methods
    adjustHeight(height) {
        if (height >= this.seatHeight && this.heightAdjustable) { //higher than minimum height, chair height is adjustable
            console.log(`Chair height changed to ${height}.`);
        } else
            console.log(`Height cannot be decreased lower than the seat height (${this.seatHeight}.`);
    };

    moveChair(x, y) {
        console.log(`Chair moved to coordinates (${x}, ${y}).`);
    };
}

const officeChair0 = new OfficeChair("Black", 15, 12);
console.log(officeChair0);
console.log(`There are ${Chair.countChairs} chair(s) in the room.`);