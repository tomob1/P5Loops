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

    // for (var lineX = 75; lineX <= width; lineX += 75) {
    //     line(lineX, 0, lineX, height);
    // }

    for(var x = 0; x <=80; x++){
        circle(x * 10, height/2, 10)
    }

}