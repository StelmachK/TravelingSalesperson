var CityCount = 5;
var Cities = [];
var checkboxCreatePath;
var cityCountSlider;

function setup() {
    createCanvas(400, 400)
    // inicialize cities
    Cities.push(new City());
    checkboxCreatePath = createCheckbox('Create Path', false);
    checkboxCreatePath.changed(createPath);

    cityCountSlider = createSlider(0, 15, CityCount);
    cityCountSlider.input(myInputEvent);
    cityCountSlider.position(5, height - cityCountSlider.height * 1.5)
}

function draw() {

    background(55);

    createCities(CityCount);
    createPath(checkboxCreatePath.checked());
    
    

}
function myInputEvent() {
    console.log('you are sliding: ', this.value());
    Cities = [];
    CityCount = this.value();
  }

this.createCities = function(cityCount){

    //Create City in distance more than 7 times size
    while(Cities.length < cityCount) {
        this.city = new City();
        this.canCreatecity = true;
        for (let i = 0; i < Cities.length; i++) {
            if(Cities[i].location.dist(this.city.location) <= this.city.size * 7){
                this.canCreatecity = false;
            }
        }
        if(canCreatecity){
            Cities.push(this.city);
        }
    }

    Cities.forEach(city => {
        city.displayCity();
    });
}

this.createPath = function(showPath){
    push();
    
    if(showPath){

        
        strokeWeight(0.5);
        for (var i = 0; i < Cities.length - 1; i++)
        {
            beginShape();
            vertex(Cities[i].location.x, Cities[i].location.y);
            vertex(Cities[i + 1].location.x, Cities[i + 1].location.y);
            endShape();
        };
    }
    pop();
}

function BrutForce(){

    var bestEver = 0;
    var distBetweenCities = [];

    for (var i = 0; i < Cities.length; i++) {
        for (var j = 0; j < Cities.length; j++) {
            if(j != i && !this.distBetweenCities.includes(Cities[i].location.dist(Cities[j].location)))
            {
                this.distBetweenCities.push(Cities[i].location.dist(Cities[j].location));
            }
        }
    }
}

function City(){
    this.size = width / 40;

    this.location = createVector(
        random(width * 0.1, width * 0.9), 
        random(height * 0.1, height * 0.9));

    this.displayCity = function(){
        fill(255, 0, 120, 120);
        ellipse(this.location.x, this.location.y, this.size);
    }   
}