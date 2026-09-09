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
    createPlatform(900,200,100,0.01,"light grey");
    createPlatform(400,600,0.25,50,"light grey");
    createPlatform(100,500,150, 20,"light grey");
    createPlatform(500,400,100,50,"light grey");
    createPlatform(900,400,100,50,"light grey");
    createPlatform(300,200,100,50,"light grey");
    createPlatform(100,100,0.1,500,);
    createPlatform(1200,300,100,50,"light grey");
    createPlatform(600,175,100,0.01,"light grey");


    // TODO 3 - Create Collectables
    createCollectable("waste", 350, 150,);
    createCollectable("waste", 1225, 250,);
    createCollectable("waste", 1300, 700,);
    createCollectable("waste", 750, 100,);
    createCollectable("waste", 200, 470,);



    
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
