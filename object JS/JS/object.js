
var Car = function (marka, model, color, tank, consumption) {
    this.marka = marka;
    this.model = model;
    this.color = color;
    this.tank = tank;
    this.consumption = consumption;
    this.initialFuelLevel = 0;
    this.endFuelLevel = function (km) {
        var endFuel = this.initialFuelLevel - this.consumption * km / 100;
        if (endFuel >= 0) {
            return endFuel;
        } else {
            return "Kifayet qeder benzin qalmayib";
        }
    },
        this.Petrol=function(litr){
            if(litr<this.tank-this.initialFuelLevel){
                return "Tam dolmayib";
            }else if(litr==this.tank-this.initialFuelLevel){
                return "Tam doldu";
            }else
                 return "Awib-dawdi";
             
        }
        
}
var bmw = new Car("BMW", "X5", "black", 75, 20);
bmw.initialFuelLevel = 40;
console.log(bmw.Petrol(55));









