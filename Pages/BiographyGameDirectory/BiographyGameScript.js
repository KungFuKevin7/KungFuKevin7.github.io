'use strict';

/* global THREE, dat */

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true});
  //renderer.shadowMap.enabled = true;
  //renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.antialias = true;
  renderer.physicallyCorrectLights = true;

  const fov = 45;
  const aspect = 2;
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  
  const UserCar = Car(0xFF0000, 0xFFFFFF); //Player

  let CockpitView = false;
  //Standard Topdown view
  camera.position.set(UserCar.position.x, UserCar.position.y + 20, UserCar.position.z - 30);
  camera.lookAt(UserCar.position.x, UserCar.position.y, UserCar.position.z);
  camera.rotation.set(Math.PI / 10, Math.PI, 0);

  const scene = new THREE.Scene();

  //Set Background to the following colour
  //scene.background = new THREE.Color(0x101050);
  scene.background = new THREE.Color(0x4579FE);
 
  //Key / Mouse Variables
  let keyPressCount = 0;

  //Create mainlevel
  MainLevel(scene, UserCar);

  //Tunnel Level
  ResumeTunnel(scene);

  //FunFacts Level
  FunFactsAboutMe(scene);
  
    let PlaneAdded = false; //to prevent spawning multiple aircraft
    const bannerPlaneTarget = -45;
    let bannerPlane = addPlaneWithBanner(1375, -150, "https://i.imgur.com/nTmkkRT.png");
    scene.add(bannerPlane);

  //Victory Lane "Level"
  VictoryLane(scene);
  
  initSun(scene);

  //Control Handler for phones

  window.addEventListener('touchmove', () =>{
      if((UserCar.position.z > 580 && UserCar.position.z < 1150) && (UserCar.position.x < -18 && UserCar.position.x > -38))
      {
        UserCar.position.z += 0.0;
        camera.position.z += 0.0;
      }
      else if(UserCar.position.z < 1342.5){ 
        UserCar.position.z += 5.0;
        camera.position.z += 5.0;
      }
  });

  //Control Handler for Keyboard
  window.addEventListener('keydown', checkKeyPress,false);
  function checkKeyPress(key){

    let Velocity = acceleration(keyPressCount);
    UserCar.rotation.y = RotateCar(key.keyCode);
    //If in cockpit view, --> Rotate Camera accordingly
    if(CockpitView == true){
      camera.rotation.y = RotateView(key.keyCode);
      camera.updateProjectionMatrix();
    }

    //Key binds
    if(key.keyCode == "87") // 87 = "W"
    {
      if((UserCar.position.z > 580 && UserCar.position.z < 1150) && (UserCar.position.x < -18 && UserCar.position.x > -38))
      {
        UserCar.position.z += 0.0;
        camera.position.z += 0.0;
      }
      else if(UserCar.position.z < 1342.5){ 
        UserCar.position.z += Velocity;
        camera.position.z += Velocity;
      }
      
    }else if(key.keyCode == "83") //83 = "S"
    {
      if(UserCar.position.x < -10 && UserCar.position.z < 510)
      {
        UserCar.position.z -= 0.0;
        camera.position.z -= 0.0;
      }      
      if(UserCar.position.z < 1150 && UserCar.position.x < -18 && UserCar.position.x > -38)
      {
        UserCar.position.z += 0.0;
        camera.position.z += 0.0;
      }
      else if(UserCar.position.z > 6){
        UserCar.position.z -= Velocity;
        camera.position.z -= Velocity;
      }
    }else if(key.keyCode == "81") //81 ="Q"
    {
      //Tunnel Outside Right
      if((UserCar.position.x > -48 && UserCar.position.x < -15) && (UserCar.position.z > 550 && UserCar.position.z < 1200))
      {
        UserCar.position.x += 0.0;
        camera.position.x += 0.0;
      }
      //Out Of Bounds Z-axis
      else if(UserCar.position.z < 1342.5){
        if(UserCar.position.x < 8){ //Armco Lefthand side
          UserCar.position.x += Velocity;
          UserCar.position.z += Velocity;
   
          camera.position.z += Velocity;
          camera.position.x += Velocity;
        }
      }
      

    }else if(key.keyCode == "69")  //69 ="E"
    {
      //Tunnel Right hand side
      if((UserCar.position.x < -7 && UserCar.position.x > -20) && (UserCar.position.z > 550 && UserCar.position.z < 1150)){
        UserCar.position.x -= 0;
        camera.position.x -= 0;
      }
      //Armco right hand side
      else if(UserCar.position.z < 500 && UserCar.position.x < -7.5){}
      //Out Of Bounds
      else if(UserCar.position.x < -75){}
      else if(UserCar.position.z > 1342.5){}
      else{
        UserCar.position.x -= Velocity;
        UserCar.position.z += Velocity;
        camera.position.x -= Velocity;
        camera.position.z += Velocity;
      }
    }else if(key.keyCode == "68"){ //68 = "D"
      //Out of Bounds
      if(UserCar.position.x > -75){
        //Outside Tunnel
        if(UserCar.position.x < -8 && (UserCar.position.z > 550 && UserCar.position.z < 1100))
        {
          UserCar.position.x -= Velocity;
          camera.position.x -= Velocity;
        }
        //Tunnel Wall Right
        else if(UserCar.position.x < -7 && (UserCar.position.z > 550 && UserCar.position.z < 1150))
        {
          UserCar.position.x -= 0;
          camera.position.x -= 0;
        }
        //RightSide Armco
        else if(UserCar.position.x < -7 && UserCar.position.z < 507)
        {
          UserCar.position.x -= 0;
          camera.position.x -= 0;
        }else{
          UserCar.position.x -= Velocity;
          camera.position.x -= Velocity;
        }
      }else
      {
        UserCar.position.x -= 0;
        camera.position.x -= 0;
      }

    }else if(key.keyCode == "65"){ //65 = "A"
      //Left hand barriers
      if(UserCar.position.x < 7.5){
        //Off Track Left
        if((UserCar.position.x > -46 && UserCar.position.x < -7.5) && (UserCar.position.z > 580 && UserCar.position.z < 1200))
        {
          UserCar.position.x += 0.0;
          camera.position.x += 0.0;
        }  
        else if(UserCar.position.x < 10 && UserCar.position.x > -20){
          UserCar.position.x += Velocity;
          camera.position.x += Velocity;
        }
        else{
          UserCar.position.x += Velocity;
          camera.position.x += Velocity;
        }
      }
    }
    //DRS + PRESS HOLD OVERTAKE
    else if(key.keyCode == "32") //32 = "Space Bar"
    {
      if(UserCar.position.z < 1342.5){ 
        UserCar.position.z += 2.5; //2.5 for Real Use, 10.0 for Debugging;
        camera.position.z += 2.5;  
      }
    }

    //Camera
    else if(key.keyCode == "70"){ //70 = "F"
      if(CockpitView == false){ //Go to Cockpit view
        camera.position.set(UserCar.position.x, UserCar.position.y + 2.5, UserCar.position.z - 1);
        camera.lookAt(0,1.5,2000);
        camera.fov = 90;
        camera.updateProjectionMatrix();
        CockpitView = true;
      }
      else if(CockpitView == true){//Go to standard view
        camera.position.set(UserCar.position.x, UserCar.position.y + 20, UserCar.position.z - 30);
        camera.lookAt(UserCar.position.x, UserCar.position.y, UserCar.position.z);
        camera.rotation.set(Math.PI / 10, Math.PI, 0);
        camera.fov = 45;
        camera.updateProjectionMatrix();
        CockpitView = false;
      }
    }

    //SocialMediaBtns
    else if(key.keyCode == "49"){ //49 = "1"
      redirectToURL("https://www.linkedin.com/in/kevin-voet-99292524a/");
    }else if(key.keyCode == "50"){ //50 = "2"
      redirectToURL("https://github.com/KungFuKevin7");
    }else if(key.keyCode == "51"){ //51 = "3"
      redirectToURL("https://www.instagram.com/k3vin_v03t/");
    }else if(key.keyCode == "52"){ //52 = "4"
      redirectToURL("https://twitter.com/KevinVoet2002");
    }

    //Extra Features
    {
      //play guitar when driving near the guitar prop
      if ((UserCar.position.z > 770 && UserCar.position.z < 772.6) && UserCar.position.x < -40){
        playGuitar();
      }
      if((UserCar.position.z > 1320  && UserCar.position.z < 1330) && (UserCar.position.x > -70 && UserCar.position.x < -50)){      
        if(!PlaneAdded){
          for(let i = -150; i < bannerPlaneTarget; i+= 0.01){
            setTimeout(function(){
              bannerPlane.position.x = i;
            },50);
          }
          PlaneAdded = true;
        }
      }
    }
    keyPressCount++; //increment to increase the velocity

  }

  window.addEventListener('keyup', checkKeyUp, false);
  function checkKeyUp(key){
    keyPressCount = 0;
  }



  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
