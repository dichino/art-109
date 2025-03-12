//let canvas;

function setup() {
   canvas = createCanvas(windowWidth,windowHeight,WEBGL);
   canvas.position(0,0)
   canvas.style("z-index", -2)
   angleMode(DEGREES)
  }

function draw(){
    background(30)
    translate(0, 75, 0); // Moves the animation some pixels lower


    rotateX(60)

    noFill()
    stroke(1)

    for (var i = 0; i < 80; i++){

        var r = map(sin(frameCount * 0.0005), -1, 1, 10, 50) //setting less red
        var g = map(i, 0, 80, 180, 255) //more green
        var b = map(cos(frameCount), -1, 1, 150, 255)


        stroke(r,g,b, 120) //color + transcparacy

        rotate(frameCount / 40)

        beginShape()
        for ( var j = 0; j < 360; j += 30 ){
            var rad = i * 3
            var x = rad * cos(j)
            var y = rad * sin(j)
            var z = sin(frameCount* 2 + i * 5) * 50

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}