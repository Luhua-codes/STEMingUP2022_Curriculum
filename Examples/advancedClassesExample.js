class Chair {
    constructor(seatHeight) {
        this.seatHeight = seatHeight; //inches

        //assigned with default values
        this.heightAdjustable = false;
    }

    adjustHeight() {
    };
    moveChair() {
    };

    //private method
    static #calculateTotalPrice(taxPercent, price, countChairs){
        return (price + (price * taxPercent / 100)) * countChairs;
    }

    static generateBill(price, type, countChairs){
        console.log("***BILLING INVOICE***");
        console.log(`Total due: $${Chair.#calculateTotalPrice(13, price, countChairs)} for ${countChairs} ${type}s.`);
    }
}

class OfficeChair extends Chair {
    static countOfficeChairs = 0; //keeps track of the total number of office chairs
    static #price = 200; //private variable
    static type = "Office Chair"; //new property, identifies the type of chair

    constructor(seatHeight) { //overloaded constructor with default values assigned
        super(seatHeight); //calls the constructor belonging to the superclass (Chair)
        OfficeChair.countOfficeChairs++; //whenever a new office chair is made, increase the counter
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

    static generateBill() {
        super.generateBill(this.#price, OfficeChair.type, this.countOfficeChairs);
    }
}

const officeChair0 = new OfficeChair(12);
const officeChair1 = new OfficeChair(15);
OfficeChair.generateBill();