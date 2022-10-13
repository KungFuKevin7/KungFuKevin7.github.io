/*-----------------------------------------------------
  Collection of THREE.Group Objects used in this game,
  to help for an uncluttered code structure
------------------------------------------------------*/

const Textureloader = new THREE.TextureLoader();

const irontexture = new THREE.MeshBasicMaterial({
  map: Textureloader.load("https://img2.goodfon.com/wallpaper/nbig/f/9a/metal-grunge-metallic-steel-4347.jpg"),
});

function addMotorway(scene, lengthSize, widthSize, ZValue, XValue, withGrass){
  if(withGrass == true){
    const geometry = new THREE.PlaneBufferGeometry( widthSize + 100, lengthSize);
    const material = new THREE.MeshPhongMaterial( {color: 0x009a17, side: THREE.DoubleSide} );
    const Grass = new THREE.Mesh( geometry, material );
    //rotate plane 90DEG
    Grass.receiveShadow = true;
    Grass.rotation.x = Math.PI * -.5;
    Grass.position.z = (lengthSize / 2) + ZValue;
    Grass.position.x = XValue;
    Grass.position.y -=0.05;
    scene.add(Grass);
  }

    const AsphaltGEO = new THREE.PlaneBufferGeometry( (widthSize / 2) -5, lengthSize);
    const AsphaltMAT = new THREE.MeshPhongMaterial( {color: 0x505050, side: THREE.DoubleSide});
    const Asphalt = new THREE.Mesh( AsphaltGEO, AsphaltMAT );
    //rotate plane 90DEG
    Asphalt.receiveShadow = true;
    Asphalt.rotation.x = Math.PI * -.5;
    Asphalt.position.z = (lengthSize / 2) + ZValue;
    Asphalt.position.x = XValue;
    Asphalt.position.y +=0.01;
    scene.add(Asphalt);
}

function LeftHander(ZValue)
{
  const LeftHander= new THREE.Group();
  const AsphaltGEO = new THREE.PlaneBufferGeometry( 80, 30);
  const AsphaltMAT = new THREE.MeshPhongMaterial( {color: 0x505050, side: THREE.DoubleSide});
  const Asphalt = new THREE.Mesh( AsphaltGEO, AsphaltMAT );
  Asphalt.rotation.x = Math.PI * -.5;
  Asphalt.rotation.z = Math.PI /4;
  LeftHander.add(Asphalt);

  const Armco = new THREE.Mesh(
    new THREE.BoxBufferGeometry(85,1.5,1),
    irontexture
  );
  Armco.rotation.y = Math.PI /4;
  Armco.position.x = -12.5;
  Armco.position.z = -12;
  LeftHander.add(Armco);

  LeftHander.position.y +=0.1;
  LeftHander.position.x -=30;
  LeftHander.position.z = ZValue;

  return LeftHander;
}

function Car(colorHexCode, SecondcolorHexCode)
{
    const car = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({color: colorHexCode, shininess:150});
    const secondMaterial = new THREE.MeshPhongMaterial({color: SecondcolorHexCode, shininess:150});
    const Chassis = new THREE.Mesh(
      new THREE.BoxBufferGeometry(4,1,3),
      material
    );
    Chassis.castShadow =true;
    Chassis.receiveShadow = true;
    car.add(Chassis);
    const FrontWingHolder = new THREE.Mesh(
      new THREE.BoxBufferGeometry(2,1,1),
      material
    );
    FrontWingHolder.castShadow =true;
    FrontWingHolder.receiveShadow = true;
    FrontWingHolder.position.x -=3;
    car.add(FrontWingHolder);

    const FrontWingTip = new THREE.Mesh(
      new THREE.ConeBufferGeometry( 0.75, 2, 4 ),
      material
    );
    FrontWingTip.castShadow =true;
    FrontWingTip.receiveShadow = true;
    FrontWingTip.rotation.x =(Math.PI/4);    
    FrontWingTip.rotation.z =(Math.PI/2);
    FrontWingTip.position.x -=5;
    car.add(FrontWingTip);

    const FrontWing= new THREE.Mesh(
      new THREE.BoxBufferGeometry( 1.5, 0.1, 4.8 ),
      secondMaterial
    );
    FrontWing.castShadow =true;
    FrontWing.receiveShadow = true;
    FrontWing.position.x -=6;
    car.add(FrontWing);

    const EngineCover = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3,1,1),
        material
    );
    EngineCover.castShadow =true;
    EngineCover.receiveShadow = true;
    EngineCover.position.y +=1;
    EngineCover.position.x +=0.5;
    car.add(EngineCover);

const RearWingHolder = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2,1,1),
        material
    );
    RearWingHolder.castShadow =true;
    RearWingHolder.receiveShadow = true;
    RearWingHolder.position.x +=3;
    car.add(RearWingHolder);


const RearWing = new THREE.Mesh(
        new THREE.BoxBufferGeometry(1,1,3),
        secondMaterial
    );
    RearWing.castShadow =true;
    RearWing.receiveShadow = true;
    RearWing.position.y +=1;
    RearWing.position.x +=4;
    car.add(RearWing);

const FRTyre = new THREE.Mesh(
        new THREE.CylinderBufferGeometry( 1, 1, 1, 32 ),
        new THREE.MeshBasicMaterial({color: 0x000000})
    );
    FRTyre.castShadow =true;
    FRTyre.receiveShadow = true;
    FRTyre.rotation.z = Math.PI/2;
    FRTyre.rotation.y = Math.PI/2;
    FRTyre.position.x -=3;
    FRTyre.position.z -= 2;
    FRTyre.name = "FRTyre";
    car.add(FRTyre);


const FLTyre = new THREE.Mesh(
        new THREE.CylinderBufferGeometry( 1, 1, 1, 32 ),
        new THREE.MeshBasicMaterial({color: 0x000000})
    );
    FLTyre.castShadow =true;
    FLTyre.receiveShadow = true;
    FLTyre.rotation.z = Math.PI/2;
    FLTyre.rotation.y = Math.PI/2;
    FLTyre.position.x -=3;
    FLTyre.position.z += 2;
    FRTyre.name = "FLTyre";
    car.add(FLTyre);

const FrontSuspension = new THREE.Mesh( 
      new THREE.CylinderBufferGeometry( 0.25, 0.25, 5, 16 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
    );
    FrontSuspension.castShadow =true;
    FrontSuspension.receiveShadow = true;
    FrontSuspension.rotation.z = Math.PI/2;
    FrontSuspension.rotation.y = Math.PI/2;
    FrontSuspension.position.x -=3;

    car.add(FrontSuspension);

const RLTyre = new THREE.Mesh(
        new THREE.CylinderBufferGeometry( 1, 1, 1, 32 ),
        new THREE.MeshBasicMaterial({color: 0x000000})
    );
    RLTyre.castShadow =true;
    RLTyre.receiveShadow = true;
    RLTyre.rotation.z = Math.PI/2;
    RLTyre.rotation.y = Math.PI/2;
    RLTyre.position.x +=3;
    RLTyre.position.z += 2;
    car.add(RLTyre);


const RRTyre = new THREE.Mesh(
        new THREE.CylinderBufferGeometry( 1, 1, 1, 32 ),
        new THREE.MeshBasicMaterial({color: 0x000000})
    );
    RRTyre.castShadow =true;
    RRTyre.receiveShadow = true;
    RRTyre.rotation.z = Math.PI/2;
    RRTyre.rotation.y = Math.PI/2;
    RRTyre.position.x +=3;
    RRTyre.position.z -= 2;
    car.add(RRTyre);

const RearSuspension = new THREE.Mesh( 
      new THREE.CylinderBufferGeometry( 0.25, 0.25, 5, 16 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
    );
    RearSuspension.castShadow =true;
    RearSuspension.receiveShadow = true;
    RearSuspension.rotation.z = Math.PI/2;
    RearSuspension.rotation.y = Math.PI/2;
    RearSuspension.position.x +=3;

    car.add(RearSuspension);

    car.position.x = -5;
    car.position.z = 5;
    car.rotation.y = Math.PI/2;
    //1.01 to prevent z-fighting
    car.position.y +=1.01;
    return car;
}

function addSign(colorHexCode, signZ, signX, ImagePath){
  
  const sign = new THREE.Group();
  const material = new THREE.MeshPhongMaterial({color: colorHexCode});
  const Border = new THREE.Mesh(
      new THREE.BoxBufferGeometry(0,8,10),
      new THREE.MeshBasicMaterial({color: 0xFFFFFF})
  );
  Border.castShadow =true;
  Border.receiveShadow = true;
  Border.position.y += 5;
  sign.add(Border);

  const Sign = new THREE.Mesh(
      new THREE.BoxBufferGeometry(0,7.5,9.5),
      material //Normal color: 0x30FF00
  );
  Sign.castShadow =true;
  Sign.receiveShadow = true;
  Sign.position.x += 0.1;
  Sign.position.y += 5;
  sign.add(Sign);

  const PlaceholderL = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,2,1),
      new THREE.MeshBasicMaterial({color: 0xFFFFFF})
  );
  PlaceholderL.castShadow =true;
  PlaceholderL.receiveShadow = true;
  PlaceholderL.position.z -= 3;

  sign.add(PlaceholderL);

const PlaceholderR = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,2,1),
      new THREE.MeshBasicMaterial({color: 0xFFFFFF})
  );
  PlaceholderR.castShadow =true;
  PlaceholderR.receiveShadow = true;
  PlaceholderR.position.z += 3;

  sign.add(PlaceholderR);

  const Imgloader = new THREE.TextureLoader(); // Create ImgLoader Object

  const imageTexture = new THREE.MeshBasicMaterial({                  //Create material of image using ImgLoader
    map: Imgloader.load(ImagePath),
    side: THREE.DoubleSide
  });

  const SignImage = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,7.5),
    imageTexture
  );

  SignImage.rotation.y = Math.PI / 2;
  SignImage.position.y += 5;
  SignImage.position.x += 0.61;
  sign.add(SignImage)
  
  const light = new THREE.PointLight(0xFFFFFF, 100);
  light.position.set(0,9.5,0);
  //light.castShadow = true; 
  
  //sign.add(light);

  sign.position.z += signZ;
  sign.position.x -= 20 + signX;
  sign.rotation.y = Math.PI/2;

  return sign;
}

function addTree(ZValue)
{
  const tree = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(0.7, 1, 5, 18), 
    new THREE.MeshPhongMaterial({ color: 0x8B4513 }));
  trunk.position.y = 2.5;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  tree.add(trunk);

  const crown = new THREE.Mesh(
    new THREE.SphereBufferGeometry(4, 12, 6),
    new THREE.MeshPhongMaterial({ color: 0x2b5423 })
  );
  crown.position.y = 7;
  crown.castShadow = true;
  crown.receiveShadow = false;
  tree.add(crown);

  tree.position.x = 17.5;
  tree.position.z = ZValue;
  return tree;
}

function addArmco(ZValue, isRight){
  const armco = new THREE.Group();

  const ironbar = new THREE.Mesh(
    new THREE.BoxBufferGeometry(5,1,1),
    irontexture
  );
  ironbar.castShadow = true;
  ironbar.receiveShadow = true;
  ironbar.position.y += 0.5;
  armco.add(ironbar);

  const holder = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1.5,1),
        new THREE.MeshPhongMaterial({ color:0x000000 })
  ); 
  holder.castShadow = true;
  holder.receiveShadow = true;
  holder.position.z -= 1;
 
  armco.add(holder);


    armco.position.z += ZValue;
    armco.position.y += 0.5;

  if(isRight == false){
    armco.position.x = 12.5;
    armco.rotation.y = Math.PI / -2;
  }else if(isRight == true){
    armco.position.x = -12.5;
    armco.rotation.y = Math.PI / 2;
  }

  return armco;
}

function addHighwaySignSingle(ZValue, XValue, ImagePath)
{
  const HighwaySign = new THREE.Group(); 

  const HighwaySignHolder = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,15,1),
    irontexture
  );
  HighwaySignHolder.castShadow = true;
  HighwaySignHolder.receiveShadow = true;
  HighwaySignHolder.position.y += 7.5;
  HighwaySignHolder.position.x += 15;
  HighwaySign.add(HighwaySignHolder);

  const HighwaySignHolderII = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,15,1),
    irontexture
  );
  HighwaySignHolderII.castShadow = true;
  HighwaySignHolderII.receiveShadow = true;
  HighwaySignHolderII.position.y += 7.5;
  HighwaySignHolderII.position.x += -15;
  HighwaySign.add(HighwaySignHolderII);

const HighwaySignHorizontal = new THREE.Mesh(
  new THREE.BoxBufferGeometry(31,1,1),
  irontexture
  );
  HighwaySignHorizontal.castShadow = true;
  HighwaySignHorizontal.receiveShadow = true;
  HighwaySignHorizontal.position.y += 15.5;
  HighwaySignHorizontal.position.x -= 0;
  HighwaySign.add(HighwaySignHorizontal);

const HighSign = new THREE.Mesh(
  new THREE.BoxBufferGeometry(30,8,1),
  new THREE.MeshPhongMaterial({color: 0x009a17, side: THREE.DoubleSide})
  );
  HighSign.castShadow = true;
  HighSign.receiveShadow = true;
  HighSign.position.y += 12;
  HighSign.position.z += 1;
  HighwaySign.add(HighSign);

  const Textureloader = new THREE.TextureLoader();

  const myimg = new THREE.MeshPhongMaterial({
    map: Textureloader.load(ImagePath),
  });

const SignImg = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(30,8),
    myimg
  );
  SignImg.castShadow = true;
  SignImg.receiveShadow = true;
  SignImg.position.y += 12;
  SignImg.position.z += 1.51;
  HighwaySign.add(SignImg);

  //const lightL = new THREE.PointLight(0xFFFFFF, 25);
  //lightL.position.set(-7.5,7.5,3);
  //lightL.castShadow = true; 

  //const lightR = new THREE.PointLight(0xFFFFFF, 25);
  //lightR.position.set(7.5,7.5,3);
  //lightR.castShadow = true; 
  
  //HighwaySign.add(lightL);
  //HighwaySign.add(lightR);
  //const helper = new THREE.PointLightHelper(lightR);
  //scene.add(helper);



  HighwaySign.rotation.y += Math.PI;
  HighwaySign.position.x = XValue;
  HighwaySign.position.z += ZValue;

  return HighwaySign;
}

function addHighwaySign(ZValue, ImgR, ImgL)
{
  const HighwaySign = new THREE.Group(); 

  const TextureloaderR = new THREE.TextureLoader();
  const ImageRight = new THREE.MeshPhongMaterial({
    map: TextureloaderR.load(ImgR),
  });

  const TextureloaderL = new THREE.TextureLoader();
  const ImageLeft = new THREE.MeshPhongMaterial({
    map: TextureloaderL.load(ImgL),
  });

  const HighwaySignHolder = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1,15,1),
  irontexture
  );
  HighwaySignHolder.castShadow = true;
  HighwaySignHolder.receiveShadow = true;
  HighwaySignHolder.position.y += 7.5;
  HighwaySignHolder.position.x += 15;
  HighwaySign.add(HighwaySignHolder);

  const HighwaySignHolderII = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,15,1),
    irontexture
  );
  HighwaySignHolderII.castShadow = true;
  HighwaySignHolderII.receiveShadow = true;
  HighwaySignHolderII.position.y += 7.5;
  HighwaySignHolderII.position.x += -15;
  HighwaySign.add(HighwaySignHolderII);

const HighwaySignHorizontal = new THREE.Mesh(
  new THREE.BoxBufferGeometry(31,1,1),
  irontexture
  );
  HighwaySignHorizontal.castShadow = true;
  HighwaySignHorizontal.receiveShadow = true;
  HighwaySignHorizontal.position.y += 15.5;
  HighwaySignHorizontal.position.x -= 0;
  HighwaySign.add(HighwaySignHorizontal);

const HighSignL = new THREE.Mesh(
  new THREE.BoxBufferGeometry(11,8,1),
  new THREE.MeshPhongMaterial({color: 0x009a17, side: THREE.DoubleSide})
  );
  HighSignL.castShadow = true;
  HighSignL.receiveShadow = true;
  HighSignL.position.y += 12;
  HighSignL.position.x += 7;
  HighSignL.position.z += 1;
  HighwaySign.add(HighSignL);

const HighSignR = new THREE.Mesh(
    new THREE.BoxBufferGeometry(11,8,1),
    new THREE.MeshPhongMaterial({color: 0x009a17, side: THREE.DoubleSide})
  );
  HighSignR.castShadow = true;
  HighSignR.receiveShadow = true;
  HighSignR.position.y += 12;
  HighSignR.position.x -= 7;
  HighSignR.position.z += 1;
  HighwaySign.add(HighSignR);

const LeftSignImg = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(11,8),
    ImageLeft
  );
  LeftSignImg.castShadow = true;
  LeftSignImg.receiveShadow = true;
  LeftSignImg.position.y += 12;
  LeftSignImg.position.x += 7;
  LeftSignImg.position.z += 1.51;
  HighwaySign.add(LeftSignImg);

const RightSignImg = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(11,8),
    ImageRight
  );
  RightSignImg.castShadow = true;
  RightSignImg.receiveShadow = true;
  RightSignImg.position.y += 12;
  RightSignImg.position.x += -7;
  RightSignImg.position.z += 1.51;
  HighwaySign.add(RightSignImg);

  //const light = new THREE.PointLight(0xFFFFFF, 25);
  //light.position.set(0,16,1);
  //light.castShadow = true; 

  //HighwaySign.add(light);

  HighwaySign.rotation.y += Math.PI;
  HighwaySign.position.z += ZValue;

  return HighwaySign;
}

function addLantern(XValue, ZValue){
    const Lantern = new THREE.Group();
    const LanternPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,15,1),
    irontexture
    );
    LanternPole.castShadow = true;
    LanternPole.receiveShadow = true;
    LanternPole.position.y += 7.5;
    Lantern.add(LanternPole);

    const LightHolder = new THREE.Mesh(
    new THREE.BoxBufferGeometry(7,1,1),
    irontexture
    );
    LightHolder.castShadow = true;
    LightHolder.receiveShadow = true;
    LightHolder.position.y += 15.5;
    Lantern.add(LightHolder);

    const RightLightCap = new THREE.Mesh(
      new THREE.BoxBufferGeometry(2,1,2),
      irontexture
    );
    RightLightCap.castShadow = true;
    RightLightCap.receiveShadow = true;
    RightLightCap.position.y += 14.5;
    RightLightCap.position.x += 3;
    Lantern.add(RightLightCap);

    const LeftLightCap = new THREE.Mesh(
      new THREE.BoxBufferGeometry(2,1,2),
      irontexture
    );
    LeftLightCap.castShadow = true;
    LeftLightCap.receiveShadow = true;
    LeftLightCap.position.y += 14.5;
    LeftLightCap.position.x -= 3;
    Lantern.add(LeftLightCap);

    //const lightRight = new THREE.DirectionalLight(0xFFFFFF, 1);
      //lightRight.position.set(2.98,14,0);
      //Lantern.add(lightRight);

    //const lightLeft = new THREE.DirectionalLight(0xFFFFFF, 1);
      //lightLeft.position.set(-2.98,14,0);
      //Lantern.add(lightLeft);

    Lantern.position.x= XValue;
    Lantern.position.z = ZValue;
    

    return Lantern;
}

function addFlag(ZValue)
{
  const Flag = new THREE.Group();
  
  const FlagPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,20,1),
    irontexture
  );
  FlagPole.castShadow = true;
  FlagPole.receiveShadow = true;
  FlagPole.position.y += 10;

  Flag.add(FlagPole);

  const UpperColour = new THREE.Mesh(
    new THREE.BoxBufferGeometry(7.5,2.5,1),
     new THREE.MeshPhongMaterial({color: 0xFF0000, side: THREE.DoubleSide})
  );
  UpperColour.castShadow = true;
  UpperColour.receiveShadow = true;
  UpperColour.position.x += 4.25;
  UpperColour.position.y += 18.75;

  Flag.add(UpperColour);

  const LowerColour = new THREE.Mesh(
    new THREE.BoxBufferGeometry(7.5,2.5,1),
     new THREE.MeshPhongMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
  );
  LowerColour.castShadow = true;
  LowerColour.receiveShadow = true;
  LowerColour.position.x += 4.25;
  LowerColour.position.y += 16.25;

  Flag.add(LowerColour);

  const FlagTip = new THREE.Mesh(
     new THREE.SphereBufferGeometry(1,32,6),
     new THREE.MeshPhongMaterial({color: 0xFFFF00, side: THREE.DoubleSide})
  );
  FlagTip.castShadow = true;
  FlagTip.receiveShadow = true;

  FlagTip.position.y += 20.5;

  Flag.add(FlagTip);
  
  Flag.position.x -=25;
  Flag.position.z = ZValue;

  return Flag;
}

function addAirplane(ZValue, ColorHex)
{
  const Airplane = new THREE.Group();
  const Fuselage = new THREE.Mesh(
    new THREE.CylinderBufferGeometry( 5, 5, 30, 10 ),
    new THREE.MeshPhongMaterial( {color: 0xffffff} )
  );
  Fuselage.castShadow = true;
  Fuselage.receiveShadow = true;
  Fuselage.rotation.z += Math.PI/2;
  Fuselage.position.y = 7.5;
  Airplane.add( Fuselage );

  const Cockpit = new THREE.Mesh(
    new THREE.CylinderBufferGeometry( 1, 5, 10, 10 ),
    new THREE.MeshPhongMaterial( {color: 0xffffff} )
  );
    Cockpit.rotation.z += Math.PI/2;
    Cockpit.position.x =-20;
    Cockpit.position.y = 7.5;
    Airplane.add(Cockpit);

  const RightWing = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30, 0.5, 10),
    new THREE.MeshPhongMaterial( {color: 0xcccccc} )
  );
  RightWing.rotation.y += Math.PI/3;
  RightWing.position.z =-14;
  RightWing.position.x =2.5;
  RightWing.position.y = 5;
  Airplane.add(RightWing);

  const RightEngine = new THREE.Mesh(
    new THREE.CylinderBufferGeometry( 2, 2, 10, 10 ),
    new THREE.MeshPhongMaterial( {color: 0xEEEEEE} )
  );
    RightEngine.rotation.z += Math.PI/2;
    RightEngine.position.x =-4;
    RightEngine.position.z =-10;
    RightEngine.position.y = 2.9;
    Airplane.add(RightEngine);

  const LeftWing = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30, 0.5, 10),
    new THREE.MeshPhongMaterial( {color: 0xcccccc} )
  );
  LeftWing.rotation.y -= Math.PI/3;
  LeftWing.position.z =14;
  LeftWing.position.x =2.5;
  LeftWing.position.y = 5;
  Airplane.add(LeftWing);

   const LeftEngine = new THREE.Mesh(
    new THREE.CylinderBufferGeometry( 2, 2, 10, 10 ),
    new THREE.MeshPhongMaterial( {color: 0xEEEEEE} )
  );
    LeftEngine.rotation.z += Math.PI/2;
    LeftEngine.position.x =-4;
    LeftEngine.position.z =10;
    LeftEngine.position.y = 2.9;
    Airplane.add(LeftEngine);

  const Tail =new THREE.Mesh(
    new THREE.CylinderBufferGeometry( 5, 3, 15, 10 ),
    new THREE.MeshPhongMaterial( {color: 0xffffff} )
  );
    Tail.rotation.z += Math.PI/2;
    Tail.position.x =22.5;
    Tail.position.y = 7.5;
    Airplane.add(Tail);

  const Rudder = new THREE.Mesh(
    new THREE.BoxBufferGeometry( 10, 12.5, 1,),
    new THREE.MeshPhongMaterial( {color: ColorHex} )
  );
    Rudder.rotation.z -= Math.PI/16;
    Rudder.position.x =25;
    Rudder.position.y = 15;
    Airplane.add(Rudder);

  const LeftHorStab = new THREE.Mesh(
    new THREE.BoxBufferGeometry(15, 0.5, 10),
    new THREE.MeshPhongMaterial( {color: 0xaaaaaa} )
  );
  LeftHorStab.rotation.y -= Math.PI/3;
  LeftHorStab.position.z =6;
  LeftHorStab.position.x =25;
  LeftHorStab.position.y = 9;
  Airplane.add(LeftHorStab);

const RightHorStab = new THREE.Mesh(
    new THREE.BoxBufferGeometry(15, 0.5, 10),
    new THREE.MeshPhongMaterial( {color: 0xaaaaaa} )
  );
  RightHorStab.rotation.y += Math.PI/3;
  RightHorStab.position.z =-6;
  RightHorStab.position.x =25;
  RightHorStab.position.y = 9;
  Airplane.add(RightHorStab);

const FTyre = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(1, 1, 1,10),
    new THREE.MeshPhongMaterial( {color: 0x000000} )
);
  FTyre.position.y =1;
  FTyre.position.x = -12.5;
  FTyre.rotation.x = Math.PI/2;
  Airplane.add(FTyre);

const FTyreHolder= new THREE.Mesh(
    new THREE.CylinderBufferGeometry(0.25, 0.25, 2,10),
    new THREE.MeshPhongMaterial( {color: 0xEEEEEE} )
);
  FTyreHolder.position.y =2;
  FTyreHolder.position.x = -12.5;
  Airplane.add(FTyreHolder);

const LTyre = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(1, 1, 1,10),
    new THREE.MeshPhongMaterial( {color: 0x000000} )
);
  LTyre.position.y =1;
  LTyre.position.z = 4;
  LTyre.rotation.x = Math.PI/2;
  Airplane.add(LTyre);

const LTyreHolder= new THREE.Mesh(
    new THREE.CylinderBufferGeometry(0.25, 0.25, 4,10),
    new THREE.MeshPhongMaterial( {color: 0xEEEEEE} )
);
  LTyreHolder.position.y =4;
  LTyreHolder.position.z = 4;
  Airplane.add(LTyreHolder);


const RTyre = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(1, 1, 1,10),
    new THREE.MeshPhongMaterial( {color: 0x000000} )
);
  RTyre.position.y =1;
  RTyre.position.z = -4;
  RTyre.rotation.x = Math.PI/2;
  Airplane.add(RTyre);

const RTyreHolder= new THREE.Mesh(
    new THREE.CylinderBufferGeometry(0.25, 0.25, 4,10),
    new THREE.MeshPhongMaterial( {color: 0xEEEEEE} )
);
  RTyreHolder.position.y =4;
  RTyreHolder.position.z = -4;
  Airplane.add(RTyreHolder);

  Airplane.rotation.y = Math.PI;
  Airplane.position.z = ZValue;
  Airplane.position.x = -40;

  return Airplane;
}

function addTunnel(ZValue)
{
  const Tunnel = new THREE.Group();
  
  const WallLeft = new THREE.Mesh(  
    new THREE.BoxBufferGeometry(1, 24, 100),
    new THREE.MeshPhongMaterial( {color: 0xaaaaaa} )
  );
  WallLeft.position.x = 0;
  WallLeft.position.y = 12.5;
  Tunnel.add(WallLeft);

  const WallRight= new THREE.Mesh(  
    new THREE.BoxBufferGeometry(1, 24, 100),
    new THREE.MeshPhongMaterial( {color: 0xaaaaaa} )
  );
  WallRight.position.x = 31;
  WallRight.position.y = 12.5;
  Tunnel.add(WallRight);

  const Roof= new THREE.Mesh(  
    new THREE.BoxBufferGeometry(32, 1, 100),
    new THREE.MeshPhongMaterial( {color: 0xaaaaaa} )
  );
  Roof.position.x = 15.5;
  Roof.position.y = 25;
  Tunnel.add(Roof);

  /*const TunnelLight = new THREE.PointLight( 0xFFFF99, 50);
  TunnelLight.target.position.set(15.5, 0, 0);
  TunnelLight.position.x = 15.5;
  TunnelLight.position.y +=23;
  TunnelLight.position.z =-17.5;*/

  const LightPlane = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2,1,50),
    new THREE.MeshPhongMaterial( {color: 0xFFFF99} )
  );
    LightPlane.position.x = 15.5;
    LightPlane.position.y +=24.5;

    Tunnel.add(LightPlane);
    //Tunnel.add(TunnelLight);

  Tunnel.position.z = ZValue;
  Tunnel.position.x = -15.5;
  Tunnel.position.y +=0;

  return Tunnel;
}

function addTunnelSign(ZValue, ImagePath, isRight){
  const TunnelSign = new THREE.Group();

  const SignIMGloader = new THREE.TextureLoader();
  const ImageSign = new THREE.MeshPhongMaterial({
    map: SignIMGloader.load(ImagePath),
  });
  const BackSign = new THREE.Mesh(
      new THREE.BoxBufferGeometry(14,12,1),
      new THREE.MeshPhongMaterial({color: 0xFFFFFF})
  );
  TunnelSign.add(BackSign);

  const SignImage= new THREE.Mesh(
      new THREE.BoxBufferGeometry(12,10,0.1),
      ImageSign
  );
  SignImage.position.z -=1.5;
  TunnelSign.add(SignImage);
  
  if(isRight == true)
  {
    TunnelSign.position.x -=8;
  }else
  {
    TunnelSign.position.x = 8;
  }
  TunnelSign.position.y +=19;
  TunnelSign.position.z -=1.51;
  TunnelSign.position.z = ZValue;

  return TunnelSign;
}

function addTunnelSignLong(ZValue, ImagePath){
  const TunnelSignLong = new THREE.Group();

  const SignIMGloader = new THREE.TextureLoader();
  const ImageSignLong = new THREE.MeshPhongMaterial({
    map: SignIMGloader.load(ImagePath),
  });

  const BackSign = new THREE.Mesh(
      new THREE.BoxBufferGeometry(30,12,1),
      new THREE.MeshPhongMaterial({color: 0xFFFFFF})
  );
  BackSign.castShadow = true;
  BackSign.receiveShadow = true;
  TunnelSignLong.add(BackSign);

  const SignImageLong= new THREE.Mesh(
      new THREE.BoxBufferGeometry(29,10,0.1),
      ImageSignLong
  );
  SignImageLong.position.z = -0.51;
  SignImageLong.castShadow = true;
  SignImageLong.receiveShadow = true;
  TunnelSignLong.add(SignImageLong);
  
  //TunnelSignLong.position.x +=8;

  TunnelSignLong.position.y +=19;
  TunnelSignLong.position.z = ZValue;

  return TunnelSignLong;
}

function addLorry(ZValue, ContainerColour, RearImagePath, isRight)
{
  const Lorry = new THREE.Group();
  
  const Cockpit = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10,12,10),
    new THREE.MeshPhongMaterial({color: 0xFF0000})
  );

  Lorry.add(Cockpit);

  const Glass= new THREE.Mesh(
    new THREE.BoxBufferGeometry(10.1, 5, 8),
    new THREE.MeshPhongMaterial({color: 0x00AAFF})
  );
  Glass.position.y +=2;
  Glass.position.z +=2

  Lorry.add(Glass);

  const Container = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10,11,30),
    new THREE.MeshPhongMaterial({color: ContainerColour})
  );
  Container.position.y -=0.5;
  Container.position.z -=20;
  Lorry.add(Container);

  const FRTyre = new THREE.Mesh(
      new THREE.CylinderBufferGeometry( 2.5, 2.5, 1, 32 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
  );
  FRTyre.castShadow =true;
  FRTyre.receiveShadow = true;
  FRTyre.rotation.z = Math.PI/2;
  FRTyre.position.x -=5;
  FRTyre.position.y =-5;
  Lorry.add(FRTyre);

 const FLTyre = new THREE.Mesh(
      new THREE.CylinderBufferGeometry( 2.5, 2.5, 1, 32 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
  );
  FLTyre.castShadow =true;
  FLTyre.receiveShadow = true;
  FLTyre.rotation.z = Math.PI/2;
  FLTyre.position.x +=5;
  FLTyre.position.y =-5;
  Lorry.add(FLTyre);

  const MRTyre = new THREE.Mesh(
      new THREE.CylinderBufferGeometry( 2.5, 2.5, 1, 32 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
  );
  MRTyre.castShadow =true;
  MRTyre.receiveShadow = true;
  MRTyre.rotation.z = Math.PI/2;
  MRTyre.position.x -=5;
  MRTyre.position.z = -10;
  MRTyre.position.y =-5;
  Lorry.add(MRTyre);

 const MLTyre = new THREE.Mesh(
      new THREE.CylinderBufferGeometry( 2.5, 2.5, 1, 32 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
  );
  MLTyre.castShadow =true;
  MLTyre.receiveShadow = true;
  MLTyre.rotation.z = Math.PI/2;
  MLTyre.position.x +=5;
  MLTyre.position.y =-5;
  MLTyre.position.z = -10;
  Lorry.add(MLTyre);  


  const RRTyre = new THREE.Mesh(
      new THREE.CylinderBufferGeometry( 2.5, 2.5, 1, 32 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
  );
  RRTyre.castShadow =true;
  RRTyre.receiveShadow = true;
  RRTyre.rotation.z = Math.PI/2;
  RRTyre.position.x -=5;
  RRTyre.position.z = -30;
  RRTyre.position.y =-5;
  Lorry.add(RRTyre);

 const RLTyre = new THREE.Mesh(
      new THREE.CylinderBufferGeometry( 2.5, 2.5, 1, 32 ),
      new THREE.MeshBasicMaterial({color: 0x000000})
  );
  RLTyre.castShadow =true;
  RLTyre.receiveShadow = true;
  RLTyre.rotation.z = Math.PI/2;
  RLTyre.position.x +=5;
  RLTyre.position.y =-5;
  RLTyre.position.z = -30;
  Lorry.add(RLTyre);      


  const LorryImgLoader = new THREE.TextureLoader();

  const BackImage = new THREE.MeshPhongMaterial({
    map: LorryImgLoader.load(RearImagePath),
  });

  const RearImage = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,11),
    BackImage
  )
  RearImage.position.z -= 35.1;
  RearImage.position.y -= 0.5;
  RearImage.rotation.y =Math.PI;
  Lorry.add(RearImage);

  /*const Dimlight = new THREE.DirectionalLight(
    0xFFFFFF, 1
  );
  Dimlight.position.set(0, -3.5, 5.1);
  Dimlight.target.position.set(0,-3,20);
  Dimlight.target.updateMatrixWorld();
  Lorry.add(Dimlight);*/

  if(isRight == true){
    Lorry.position.x = -6;
  }else
  {
    Lorry.position.x = 6;
  }

  Lorry.position.y +=7.5;
  Lorry.position.z = ZValue;
  return Lorry;
}

function addKerbStone(XValue, ZValue)
  {
    const Kerbstone = new THREE.Group();
    const RedStone = new THREE.Mesh(
      new THREE.BoxBufferGeometry(3,0.1,4),
      new THREE.MeshPhongMaterial({color: 0xFF0000})
    );
    Kerbstone.add(RedStone);

    const WhiteStone = new THREE.Mesh(
      new THREE.BoxBufferGeometry(3,0.1,4),
      new THREE.MeshPhongMaterial({color: 0xFFFFFF})
    );
    WhiteStone.position.z += 4
    Kerbstone.add(WhiteStone);

   const RedStoneII = new THREE.Mesh(
      new THREE.BoxBufferGeometry(3,0.1,4),
      new THREE.MeshPhongMaterial({color: 0xFF0000})
    );
    RedStoneII.position.z +=8;
    Kerbstone.add(RedStoneII);

    const WhiteStoneII = new THREE.Mesh(
      new THREE.BoxBufferGeometry(3,0.1,4),
      new THREE.MeshPhongMaterial({color: 0xFFFFFF})
    );
    WhiteStoneII.position.z += 12
    Kerbstone.add(WhiteStoneII);
    
    Kerbstone.position.x = XValue;
    Kerbstone.position.z = ZValue;
    return Kerbstone; 
}

function addWhiteLine(XValue, ZValue, Rotation)
{
  const WhiteLine = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,0.1,50),
    new THREE.MeshBasicMaterial({color: 0xFFFFFF})
  );
    WhiteLine.position.x = XValue;
    WhiteLine.position.z = ZValue;
    WhiteLine.position.y+= 0.1;
    WhiteLine.rotation.y = Rotation;
  return WhiteLine;
}

function addMarkerBoard(XValue, ZValue, ImagePath)
{
//load image 
const Textureloader = new THREE.TextureLoader();

const SignImg = new THREE.MeshBasicMaterial({
  map: Textureloader.load(ImagePath), side: THREE.DoubleSide
});

  const MarkerBoard = new THREE.Group();
  const Board = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4,2,1),
    new THREE.MeshBasicMaterial({color: 0xFFFFFF})
  );
  const Image = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(4,2),
    SignImg
  );

  MarkerBoard.add(Board);
  Image.position.z = 0.51;
  MarkerBoard.add(Image);
  MarkerBoard.position.z = ZValue;
  MarkerBoard.position.x = XValue;
  MarkerBoard.position.y += 1;
  MarkerBoard.rotation.y = Math.PI;
  return MarkerBoard;
}

function addTexturedPlane(XValue, ZValue, widthSize, lengthSize, ImagePath)
{
  const Textureloader = new THREE.TextureLoader();

  const LoadedTexture = new THREE.MeshBasicMaterial({
    map: Textureloader.load(ImagePath), side: THREE.DoubleSide
  });

  const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(lengthSize, widthSize),
    LoadedTexture
  );

    plane.position.x = XValue;
    plane.position.y += 0.15;
    plane.position.z = ZValue;
    plane.rotation.x = Math.PI/2;

    return plane;
}

function addBoard(ZValue, XValue, ImagePath){
  const Board = new THREE.Group();

  const Textureloader = new THREE.TextureLoader();

  const LoadedTexture = new THREE.MeshBasicMaterial({
    map: Textureloader.load(ImagePath), side: THREE.DoubleSide
  });

  const Stand = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(2,2,0.5,6),
    new THREE.MeshBasicMaterial({color: 0xCCCCCC})
  );

  const TextSign = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2,5),
    LoadedTexture
  );
  TextSign.position.y +=2.5;

  const TextSignBack = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2,5),
    new THREE.MeshBasicMaterial(LoadedTexture)
  );
  TextSignBack.rotation.y = Math.PI;
  TextSignBack.position.y +=2.5;
  TextSignBack.position.z -=0.01;

  Board.add(TextSignBack);
  Board.add(Stand);
  Board.add(TextSign);

  Board.position.y +=0.25;
  Board.rotation.y = Math.PI /2;

  Board.position.x = XValue;
  Board.position.z = ZValue;
  return Board;
}

function addGuitar(ZValue,XValue,Rotation){
  const Guitar = new THREE.Group();

  const Body0 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(5,5,2.5,12),
    new THREE.MeshPhongMaterial({color: 0xC19A6B})
  );
  Body0.rotation.x += Math.PI/2;
  Body0.position.y += 5;
  Guitar.add(Body0);

  const Body1 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(4,4,2.5,12),
    new THREE.MeshPhongMaterial({color: 0xC19A6B})
  );
  Body1.rotation.x += Math.PI / 2;
  Body1.position.y +=5;
  Body1.position.x += 5;
  Guitar.add(Body1);

  const SoundHole = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(2,2,1,12),
    new THREE.MeshPhongMaterial({color: 0x00000})
  );
  SoundHole.rotation.x += Math.PI/2;
  SoundHole.position.z += 0.9;
  SoundHole.position.x += 3;
  SoundHole.position.y += 5;
  Guitar.add(SoundHole);

  const Neck = new THREE.Mesh(
    new THREE.BoxBufferGeometry(20,3,1),
    new THREE.MeshPhongMaterial({color: 0x855E42})
  );
  //Neck.rotation.x += Math.PI/2;
  Neck.position.z += 0.74;
  Neck.position.x += 18.5;
  Neck.position.y += 5;
  Guitar.add(Neck);

  const Headstock = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6,4,1),
    new THREE.MeshPhongMaterial({color: 0xC19A6B})
  );
  Headstock.rotation.y += Math.PI/10;
  Headstock.position.set(31,5,-0.1);
  Guitar.add(Headstock);

  //Bridge
  const Bridge = new THREE.Mesh(
      new THREE.BoxBufferGeometry(0.5,3.5,1),
      new THREE.MeshBasicMaterial({color: 0x855E42})
    )
    Bridge.position.z += 1.5;
    Bridge.position.y =5;
    Guitar.add(Bridge);

  //Head
  const Head = new THREE.Mesh(
      new THREE.BoxBufferGeometry(0.5,2.95,1),
      new THREE.MeshBasicMaterial({color: 0xCCCCCC})
    )
    Head.position.z += 1.2;
    Head.position.y = 5;
    Head.position.x = 28;
    Guitar.add(Head);

  //Frets
  for(let i = 10; i <30; i +=2)
  {
    const Fret = new THREE.Mesh(
      new THREE.BoxBufferGeometry(0.2,2.95,1),
      new THREE.MeshBasicMaterial({color: 0xCCCCCC})
    )
    Fret.position.z += 0.75;
    Fret.position.y =5;
    Fret.position.x = i;
    Guitar.add(Fret);
  }

  //Strings
  for(let i =0; i < 3; i+= 0.5)
  {
    const GuitarString = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(0.1,0.1,28,6),
      new THREE.MeshBasicMaterial({color: 0xAAAAAA})
    )
    GuitarString.rotation.z +=Math.PI / 2;
    GuitarString.position.z += 1.5;
    GuitarString.position.y =i + 3.75;
    GuitarString.position.x =14;
    Guitar.add(GuitarString);
  }

  for(let i=0; i < 1.5; i+=0.5)
  {
    const TuningPeg = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,6,0.5),
      new THREE.MeshBasicMaterial({color: 0xAAAAAA})
    )
    //TuningPeg.rotation.z +=Math.PI / 2;
    TuningPeg.position.z += 0.25 - i;
    TuningPeg.position.y = 5;
    TuningPeg.position.x = 30 + (i* 3);
    Guitar.add(TuningPeg);
  }

  Guitar.position.z = ZValue
  Guitar.position.x = XValue;
  Guitar.rotation.y = Math.PI;
  Guitar.rotation.z =Rotation;
  return Guitar
}

function addCPU(ZValue,XValue,ImagePath)
{
  const CPU = new THREE.Group();
  const Circuit = new THREE.Mesh(
      new THREE.BoxBufferGeometry(8,8,1),
      new THREE.MeshBasicMaterial({color: 0x046307})
    )
  CPU.add(Circuit);
  CPU.position.y = 4;
  CPU.position.z = ZValue;
  CPU.position.x = XValue;

  const Processor = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4,4,1),
    new THREE.MeshBasicMaterial({color: 0xAAAAAA})
  )
  Processor.position.y = 0;
  Processor.position.z -=0.5;
  CPU.add(Processor);

const LogoLoader = new THREE.TextureLoader();

const LoadedLogo = new THREE.MeshBasicMaterial({
  map: LogoLoader.load(ImagePath), side: THREE.DoubleSide
});

  const CPUImage = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(3.75,3.75),
    new THREE.MeshBasicMaterial(LoadedLogo,{
    side: THREE.DoubleSide})
  )
  CPUImage.rotation.y = Math.PI;
  CPUImage.position.y=0;
  CPUImage.position.z -=1.01;
  CPU.add(CPUImage);

  for(let i =-1.5; i < 2; i++)
  {
    const PinsHor = new THREE.Mesh(
      new THREE.BoxBufferGeometry(0.5,6,1),
      new THREE.MeshBasicMaterial({color: 0x505050})
    )
    PinsHor.position.y = 0;
    PinsHor.position.z -=0.25;
    PinsHor.position.x = i;
    CPU.add(PinsHor);
  }

  for(let i =0; i < 4; i++)
  {
    const PinsVer = new THREE.Mesh(
      new THREE.BoxBufferGeometry(6,0.5,1),
      new THREE.MeshBasicMaterial({color: 0x505050})
    )
    PinsVer.position.y = i - 1.5;
    PinsVer.position.z -=0.25;
    PinsVer.position.x = 0;
    CPU.add(PinsVer);
  }

  return CPU;
}

function addGameController(ZValue, XValue)
{
  const GameController = new THREE.Group();
  
  const Case = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12,6,2),
    new THREE.MeshBasicMaterial({color: 0xBBBBBB})
  );
  Case.position.y+=5;
  GameController.add(Case);

  for (let i =-1; i <= 1; i+=2){
    const LeftCase = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(4,4,2,16),
      new THREE.MeshBasicMaterial({color: 0xBBBBBB})
    );
    LeftCase.rotation.x +=Math.PI/2;
    LeftCase.position.y += 4
    LeftCase.position.x -= 6 * i;
    GameController.add(LeftCase);
  }

  const DPadVer = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5,4,1),
    new THREE.MeshBasicMaterial({color: 0x505050})
  );
  DPadVer.position.z = 1;
  DPadVer.position.x -= 6;
  DPadVer.position.y = 4;
  GameController.add(DPadVer);
  
  const DPadHor = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4,1.5,1),
    new THREE.MeshBasicMaterial({color: 0x505050})
  )
  DPadHor.position.z = 1;
  DPadHor.position.x -= 6;
  DPadHor.position.y = 4;
  GameController.add(DPadHor);

for(let i = 6; i > 1.9; i -= 4){
  if(i == 6){
    const ButtonHor = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(1,1,2,6),
      new THREE.MeshBasicMaterial({color: 0x00FF00})
    );
    ButtonHor.rotation.x +=Math.PI/2;
    ButtonHor.position.x = 6;
    ButtonHor.position.y = i;
    ButtonHor.position.z = 0.5;
    GameController.add(ButtonHor);
  }else
  {
    const ButtonHor = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(1,1,2,6),
      new THREE.MeshBasicMaterial({color: 0x0000FF})
    );
    ButtonHor.rotation.x +=Math.PI/2;
    ButtonHor.position.x = 6;
    ButtonHor.position.y = i;
    ButtonHor.position.z = 0.5;
    GameController.add(ButtonHor);
  }
}

  for(let i = 4; i < 8.1; i += 4){
    if(i == 4){
      const ButtonVer = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(1,1,2,6),
        new THREE.MeshBasicMaterial({color: 0xFF0000})
      );
      ButtonVer.rotation.x +=Math.PI/2;
      ButtonVer.position.x = i;
      ButtonVer.position.y = 4;
      ButtonVer.position.z = 0.5;
      GameController.add(ButtonVer);
    }else
    {
      const ButtonVer = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(1,1,2,6),
        new THREE.MeshBasicMaterial({color: 0xFF00FF})
      );
      ButtonVer.rotation.x +=Math.PI/2;
      ButtonVer.position.x = i;
      ButtonVer.position.y = 4;
      ButtonVer.position.z = 0.5;
      GameController.add(ButtonVer);
    }
  }

  for(let i = 0; i < 2; i++){
    const StartBtn = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1.5,0.5,1),
      new THREE.MeshBasicMaterial({color: 0x505050})
    );
    StartBtn.position.z  = 1;
    StartBtn.position.x = -1 + (i * 2);
    StartBtn.position.y = 6;
    GameController.add(StartBtn);
  }

    const Wire = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,5,1),
      new THREE.MeshBasicMaterial({color: 0x000000})
    );
    Wire.position.y = 10;
    GameController.add(Wire); 

  GameController.rotation.y = (-Math.PI/2) - (Math.PI/4);
  GameController.position.x = XValue;
  GameController.position.z = ZValue;

  return GameController;
}

function addBass(XValue, ZValue, MyImage){
  const Bass = new THREE.Group;

  const BodyBig = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(5,5,2.5,12),
    new THREE.MeshBasicMaterial({color: 0x222222})
  );
  BodyBig.rotation.x += Math.PI / 2;
  BodyBig.position.y +=5;
  BodyBig.position.x -= 10;
  Bass.add(BodyBig);

  const BodySmall = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(4,4,2.5,12,12 ,false,2.5, 4.5),
    new THREE.MeshBasicMaterial({color: 0x222222})
  );
  BodySmall.rotation.x += Math.PI / 2;
  BodySmall.position.x -=4;
  BodySmall.position.y +=5;
  Bass.add(BodySmall);

  const Neck = new THREE.Mesh(
    new THREE.BoxBufferGeometry(20,4,1),
    new THREE.MeshPhongMaterial({color: 0x855E42})
  );
  Neck.position.z += 1;
  Neck.position.x += 5;
  Neck.position.y += 5;
  Bass.add(Neck);

  const ArrowHead = new THREE.Mesh(
    new THREE.ConeBufferGeometry(3,10,8),
    new THREE.MeshPhongMaterial({color: 0x855E42})
  );
  ArrowHead.rotation.z -= (Math.PI/2);
  ArrowHead.position.z += 1;
  ArrowHead.position.x += 20;
  ArrowHead.position.y += 5;
  Bass.add(ArrowHead);

  for(let i =0; i < 3; i++){
    const VolumeButton = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(0.5,0.5,1),
      new THREE.MeshPhongMaterial({color: 0xCCCCCC})
    )
    VolumeButton.rotation.x += (Math.PI/2);
    VolumeButton.position.z += 1.5;
    VolumeButton.position.x = -12.5 + (i* 1.5);
    VolumeButton.position.y = 2.5 - (i/2);
    Bass.add(VolumeButton);
  }

  const Bridge = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,3,1),
    new THREE.MeshPhongMaterial({color: 0xCCCCCC})
  )
  //Bridge.rotation.x += (Math.PI/2);
  Bridge.position.z += 1.5;
  Bridge.position.x = -12.5;
  Bridge.position.y = 5;
  Bass.add(Bridge);

  for(let i =0; i < 4; i+= 2){
    const PickUp = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,2,1),
      new THREE.MeshBasicMaterial({color: 0x000000})
    )
    //Bridge.rotation.x += (Math.PI/2);
    PickUp.position.z += 1.5;
    PickUp.position.x = -10 + i;
    PickUp.position.y = 5;
    Bass.add(PickUp);
  }

  const NeckLoader = new THREE.TextureLoader();

  const NeckTexture = new THREE.MeshBasicMaterial({
    map: NeckLoader.load(MyImage), side: THREE.DoubleSide
  });

  const NeckImg = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(20,4),
    NeckTexture
  );
  NeckImg.position.x += 5;
  NeckImg.position.y += 5;
  NeckImg.position.set(5,5,1.6)
  Bass.add(NeckImg);

  Bass.rotation.y = Math.PI;
  Bass.position.x = XValue;
  Bass.position.z = ZValue;
  return Bass;
}

function addCup(ZValue,XValue){
  const Cup = new THREE.Group();

  const Top = new THREE.Mesh(
    new THREE.SphereBufferGeometry(5, 8, 8, 0, Math.PI *2, 0, (Math.PI/2)),
    new THREE.MeshPhongMaterial({color: 0xFFFF00})
  )
  Top.rotation.x +=Math.PI;
  Top.position.y +=11;
  Cup.add(Top);

  const Topper = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(5,5,1),
    new THREE.MeshPhongMaterial({color: 0xFFFF00})
  )
  Topper.position.y += 11;
  Cup.add(Topper);

  const Holder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(2,1,6),
    new THREE.MeshPhongMaterial({color: 0xFFFF00})
  );
  //Holder.rotation.x +=Math.PI;
  Holder.position.y +=4;
  Cup.add(Holder);

  const Stand = new THREE.Mesh(
    new THREE.BoxBufferGeometry(5,2,5),
    new THREE.MeshBasicMaterial({color: 0x855E42})
  );
  Cup.add(Stand);

  for(let i=1; i > -3; i-=2){
    const GreenGem =new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,1,1),
      new THREE.MeshBasicMaterial({color: 0x00FF00})
    )
    GreenGem.position.y +=10;
    GreenGem.position.z +=4.5 * i;
    Cup.add(GreenGem);
  }
  for(let i=1; i > -3; i-=2){
    const RedGem =new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,1,1),
      new THREE.MeshBasicMaterial({color: 0xFF0000})
    )
    RedGem.position.y +=10;
    RedGem.position.x +=4.5 * i;
    Cup.add(RedGem);
  }

  Cup.position.y += 1;
  Cup.position.z = ZValue;
  Cup.position.x = XValue;
  return Cup;
}

function addPlaneWithBanner(ZValue, XValue, ImagePath)
{
  let BanneredPlane = new THREE.Group();

  const Nose = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(3,1,8),
    new THREE.MeshPhongMaterial({color: 0xFF0000})
  );
  Nose.rotation.x += Math.PI/2;
  Nose.position.set(0,4,-10)
  BanneredPlane.add(Nose);

  const Chassis = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(3,3,12),
    new THREE.MeshPhongMaterial({color: 0xFF0000})
  );
  Chassis.rotation.x += Math.PI/2;
  Chassis.position.y += 4;
  BanneredPlane.add(Chassis);

  const Back = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(3,1,6),
    new THREE.MeshPhongMaterial({color: 0xFF0000})
  );
  Back.rotation.x -= Math.PI/2;
  Back.position.set(0,4,9);
  BanneredPlane.add(Back);

  const Tail = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,7,5),
    new THREE.MeshPhongMaterial({color: 0xFFFFFF})
  );
  Tail.rotation.x += Math.PI/12;
  Tail.position.set(0,8,9);
  BanneredPlane.add(Tail);

  const Wings = new THREE.Mesh(
    new THREE.BoxBufferGeometry(25,1,7),
    new THREE.MeshPhongMaterial({color: 0xFFFFFF})
  );
  Wings.position.y += 3;
  BanneredPlane.add(Wings);
  
  for(let i =0; i < 2; i++){
    const Cockpit = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(1,2,4),
      new THREE.MeshPhongMaterial({color: 0x00EEFF})
    )
    if(i == 1){
      Cockpit.rotation.x = Math.PI/-2;
      Cockpit.position.set(0,6.5,-4);
      BanneredPlane.add(Cockpit);
    }else{
      Cockpit.rotation.x = Math.PI/2;
      Cockpit.position.set(0,6.5,0);
      BanneredPlane.add(Cockpit);
    }


    const Propellor = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1,7.5,1),
      new THREE.MeshPhongMaterial({color:0x000000})
    );

    if(i == 1){
      Propellor.rotation.z += Math.PI/2;
    }
    Propellor.position.set(0, 3.75, -14.5);
    BanneredPlane.add(Propellor);
  }
  
  const BannerHolder = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,4),
    new THREE.MeshPhongMaterial({color:0x000000})
  );
  BannerHolder.position.set(0,4,14)
  BanneredPlane.add(BannerHolder);

  const BannerLoader = new THREE.TextureLoader();

  const BannerTexture = new THREE.MeshBasicMaterial({
    map: BannerLoader.load(ImagePath),
   side: THREE.DoubleSide});
  
  const Banner = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(30,15),
    BannerTexture
  );
  Banner.rotation.y += (Math.PI/2 + Math.PI);
  Banner.position.set(0,5,31);

  for(let i = 0; i < 4; i++){
    let numbers = ["https://i.imgur.com/fecE9zy.png",
                   "https://i.imgur.com/1GMlWxS.png",
                   "https://i.imgur.com/3ZTia4W.png",
                   "https://i.imgur.com/PpduYHr.png"]
    let BtnTxt = new THREE.MeshBasicMaterial({
      map: BannerLoader.load(numbers[i]),
      side: THREE.DoubleSide});
    const Button = new THREE.Mesh(
      new THREE.CylinderGeometry(3,3,2),
      BtnTxt
    );
    Button.rotation.z = Math.PI/2;
    Button.position.set(0, 2, 20 + (i * 7));
    BanneredPlane.add(Button)
  }

 
  BanneredPlane.add(Banner);

  BanneredPlane.rotation.y = Math.PI / -2;
  BanneredPlane.position.z = ZValue;
  BanneredPlane.position.x = XValue;
  return BanneredPlane;
}

function addBarrier(ZValue, XValue)
{
  const Barrier = new THREE.Group();
  
  for(let i = 0; i < 12; i += 6 ){
    const RedBar = new THREE.Mesh(
      new THREE.BoxBufferGeometry(3, 1, 1),
      new THREE.MeshBasicMaterial( {color: 0xFF0000} )
    );
    RedBar.position.set(i , 2, 0);
    Barrier.add(RedBar);

    const WhiteBar = new THREE.Mesh(
      new THREE.BoxBufferGeometry(3, 1, 1),
      new THREE.MeshBasicMaterial( {color: 0xFFFFFF} )
    );
    WhiteBar.position.set(i + 3, 2, 0);
    Barrier.add(WhiteBar);
  }

  for(let i =0; i < 6; i+=2){
     const Holder = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1, 2, 1),
      irontexture
    );
    Holder.position.set(i * 2 , 1, -1);
    Barrier.add(Holder);
  }

  Barrier.position.set(XValue,0,ZValue);

  return Barrier;
}