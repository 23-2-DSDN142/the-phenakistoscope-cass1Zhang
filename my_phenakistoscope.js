const SLICE_COUNT =9;
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("two_face","png");
  pScope.load_image_sequence("Smell_People" , "png", 9.)
}

function setup_layers(pScope){

  new PLayer(null, 67,45,66);  //lets us draw the whole circle background, ignoring the boundaries

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



function smell(x, y, animation, pScope){
  translate(x,y-650)
  scale(6)
  pScope.draw_image_from_sequence("Smell_People", 0, 0, animation.frame);  

}



//function faces(x, y, animation, pScope){
  
  //scale(animation.frame*2);

  //ellipse(0,0,50,50); // draw head
  //fill(30);
  //ellipse(-10,-10,10,10); //draw eye
  //ellipse(10,-10,10,10); // draw eye
  //arc(0,10,20,10,0,180); // draw mouth



//function squares(x, y, animation, pScope){
//scale(2)

  // this is how you set up a background for a specific layer
  //let angleOffset = (360 / SLICE_COUNT) / 2
  //let backgroundArcStart = 270 - angleOffset;
  //let backgroundArcEnd = 270 + angleOffset;

  //fill(66, 135, 245)
  //arc(x,y,400,400,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  //fill(255)
  //rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw


