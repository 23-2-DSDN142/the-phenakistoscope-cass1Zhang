const SLICE_COUNT =10;
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("two_face","png");
  pScope.load_image_sequence("Smell_People" , "png", 9.)
  
}

function setup_layers(pScope){

  new PLayer(null, 67,45,66);  //lets us draw the whole circle background, ignoring the boundaries

  var layer2 =new PLayer(squares);
  layer2.mode(RING);
  layer2.set_boundary(0,400);

  var layer1 =new PLayer(faces);
  layer1.mode(SWIRL(8));
  layer1.set_boundary(200,1000);


  //var insideBackground = new PLayer(insideBlue);
  //insideBackground.mode(RING);
  //insideBackground.set_boundary(0,400);

  var outerRing = new PLayer(outsideRing);
  outerRing.mode(RING);
  outerRing.set_boundary(975,1000);


  var smellSequence = new PLayer(smell);
  smellSequence.mode(RING );
  smellSequence.set_boundary( 0, 1000 );

  var CenterImage = new PLayer(two_face);
  CenterImage.mode( RING );
  CenterImage.set_boundary( 0, 400 );

 
  

}




function two_face(x, y, animation, pScope){
  pScope.draw_image("two_face",x,y);

}

//function insideBlue(x, y, animation, pScope){
  //pScope.fill_background(196,254,253);

//}

function outsideRing(x, y, animation, pScope){
  pScope.fill_background(247, 152, 17);

}



function smell(x, y, animation, pScope){
  translate(x,y-560)
  scale(1.5)
  pScope.draw_image_from_sequence("Smell_People", 0, 0, animation.frame);  

}




function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth
}


function squares(x, y, animation, pScope){


  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(10)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw


}

