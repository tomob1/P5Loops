function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    // for(var i = 0; i < 10; i++){
    //     console.log('I want' + i + 'Ice creams')

    // }

}

function draw() {
    background(220);

    stroke(255);

    for (var lineX = 75; lineX <= 225; lineX += 75) {
        line(lineX, 0, lineX, height);
    }

}