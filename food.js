class Food{
    constructor(){
        this.image=loadImage("Images/Milk.png");
        this.foodStock=0;
    }

    getFoodstock(){
      this.lastFed=lastFed;
    }

    updateFoodstock(foodStock){
       this.foodStock=foodStock;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock=1;
        }
        return this.foodStock;
    }

    display(){
        var x=80;
        var y=100;

        imageMode(CENTER);
        image(this.image,700,200,70,70);
    }
}
