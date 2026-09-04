$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(900,200,100,0.01,"Red");
    createPlatform(400,600,0.25,50,"Yellow");
    createPlatform(100,500,150, 20,"Blue");
    createPlatform(500,400,100,50,"Purple");
    createPlatform(900,400,100,50,"Cyan");
    createPlatform(300,200,100,50,"Orange");
    createPlatform(100,100,0.1,500,);
    createPlatform(1200,300,100,50,"white");
    createPlatform(600,175,100,0.01,"white");


    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 170,);
    createCollectable("diamond", 1225, 250,);
    createCollectable("diamond", 1300, 700,);
    createCollectable("diamond", 750, 100,);



    
    // TODO 4 - Create Cannons
    createCannon("right", 710, 1500);
    createCannon("bottom", 250, 2000);
    createCannon("bottom", 1100, 1000);
    createCannon("bottom", 1300, 1000);
    createCannon("bottom", 700, 2000);
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
