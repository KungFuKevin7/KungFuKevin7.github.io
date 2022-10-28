let MainRoadIndex = 0;
let MainLevelLength = 505;
let highSignsMainRoad = ["https://i.imgur.com/c9xim39.png", //Left Sign = Born in NL
                         "https://i.imgur.com/URVnB8D.png", //Right Sign = Indonesian Descent
                         "https://i.imgur.com/Hhdo51i.png", //Left Sign = dreamt of piloting an airplane
                         "https://i.imgur.com/69bJgjM.png", //Right Sign = Decision ICT Career
                         "https://i.imgur.com/c9eJ5Kd.png", //Left Sign = Secondary school Diploma
                         "https://i.imgur.com/ty34TdW.png", //Right Sign = Currently Student
                         "https://i.imgur.com/1oxAQSO.png", //Left Sign = Follow sign to Resume
                         "https://i.imgur.com/a77WMGi.png"];//Right Sign = Follow sign to facts about me
/*
// When using web Server Use these instead
let highSignsMainRoad = ["BiographyGameDirectory/signimages/IntroSign.png", //Left Sign = Born in NL
                         "BiographyGameDirectory/signimages/IndoDescent.png", //Right Sign = Indonesian Descent
                         "BiographyGameDirectory/signimages/PilotSign.png", //Left Sign = dreamt of piloting an airplane
                         "BiographyGameDirectory/signimages/PilotToICT.png", //Right Sign = Decision ICT Career
                         "BiographyGameDirectory/signimages/HAVOSign.png", //Left Sign = Secondary school Diploma
                         "BiographyGameDirectory/signimages/NHLStudent.png", //Right Sign = Currently Student
                         "BiographyGameDirectory/signimages/ResumeDirectionSign.png", //Left Sign = Follow sign to Resume
                         "BiographyGameDirectory/signimages/FunfactsDirectionSIgn.png"];//Right Sign = Follow sign to facts about me
 
*/

let smallSignsMainRoad = ["https://i.imgur.com/IFoP1QS.png", //Car Controls (WASD)
                          "https://i.imgur.com/sn1Obx8.jpg",           //Baby Photo
                          "https://i.imgur.com/2gmJmmf.jpg",           //Me with Computer / Airplane Photo
                          "Pages/Assets/Images/PropedeuticCertificate.jpg",           //propeadeutic diploma
                          "https://i.imgur.com/J0U4vAN.png"];//Space bar is faster Tip

function MainLevel(scene, Player){

  
    addMotorway(scene, MainLevelLength, 60, 0, 0, true); //Add Motorway

    scene.add(Player); //Add the player to the scene

    for(let i = 1; i > -23; i -=12){
      scene.add(addBarrier(0,i));
    }

    //Add a tree to the scene every 50 meters
    for(let i= 5; i < MainLevelLength; i += 50){
      scene.add(addTree(i));
    }
  
    //Every 100 meters add a lantern pole
    for(let i = 75; i < 650; i += 100)
    {
      scene.add(addLantern(16,i));
    }

    //add a standing sign every 100 meter
    for(let i = 15; i < MainLevelLength; i += 100){
      scene.add(addSign(0xFFFFFF, i, 0, smallSignsMainRoad[MainRoadIndex]));
      MainRoadIndex++;
      if(i == 15){
        scene.add(addSign(0xFFFFFF, i + 5, -42, "https://i.imgur.com/dKt62JU.png"))
      }
      if(i == 315) //add an extra sign on the lefthand side 
      {
        scene.add(addSign(0xFFFFFF, i + 10, -42, "https://i.imgur.com/0wfS1vx.jpg"));
      }     
    }

    //set Index to 0 to reuse this variable again
    MainRoadIndex = 0;

    for(let i= 0; i < (MainLevelLength + 100); i += 5){
      if(i <= MainLevelLength){
        scene.add(addArmco(i,true));
      }
      scene.add(addArmco(i,false));
    }

    for(let i = 25; i < MainLevelLength; i += 100)
    {
      if(i == 25) 
      {
        //First Sign is a welcoming sign
        scene.add(addHighwaySignSingle(i, 0, 'https://i.imgur.com/UTIhFJp.png'));
      }
      else{
        scene.add(addHighwaySign(i,highSignsMainRoad[MainRoadIndex],
          highSignsMainRoad[MainRoadIndex + 1]));
          MainRoadIndex += 2;
      }
      
    }
    
    //Special Props
    scene.add(addAirplane(240, 0x00FF50));
    scene.add(addFlag(125));
  }