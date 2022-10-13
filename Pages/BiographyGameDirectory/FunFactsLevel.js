const StartValueZ = 567.5;
const StartValueX = -56.5;
const KerbSize = 12;
const STDMargin = 14;
const StartFinishLine = StartValueZ + 62.5;
const SecondCorner = 1350;
let arrayIndex= 0;
const LargeSignImg = ["https://i.imgur.com/HKCnkBP.png", //Welcome Sign
                      "https://i.imgur.com/TOGOwhj.png", //Music Lover
                      "https://i.imgur.com/0jD1fdd.png", //Favourite Songs
                      "https://i.imgur.com/jXB1cVH.png", //Sports enjoyer
                      "https://i.imgur.com/R41wrGd.png",// Random Facts about me
                      "https://i.imgur.com/zi93eZQ.png" //Technical facts about me
                     ];

const SmallSignImg = ["",  //Welcome
                      "https://i.imgur.com/kGWeGGD.jpg",  //Me playing Guitar
                      "https://i.imgur.com/WT6z9BN.jpg",  //Me Playing Bass
                      "https://i.imgur.com/txZnO3U.jpg",  //Footballer
                      "https://i.imgur.com/21CnxTV.jpg",  //Bubble Tea Enjoyer
                      "https://i.imgur.com/O15VgzW.png"   //BSOD
                     ];


function FunFactsAboutMe(scene)
{   
    //Add Motorway
    addMotorway(scene,700, 60, StartValueZ, StartValueX, false);

    { //Turn One
        //Lefthander towards Fun facts about me
        scene.add(LeftHander(550));
 
        //Exit Kerbs
        for(let i = 0; i < (7 * KerbSize); i += 16){
            scene.add(addKerbStone(StartValueX - 13, StartValueZ + 13 + i));
        }

        //Kerbs At Apex
        for(let i = 0; i < (3 * KerbSize); i += 16){
            scene.add(addKerbStone(StartValueX+14, StartValueZ + 13 + i));
        }
    }

    //Signs
    //Every 100 pixels add a sign 6 times = (6 * 100 = 600)
    for(let i = StartFinishLine; i < StartFinishLine + 600; i += 100) 
    {
        scene.add(addSign(0xFFFFFF, i,StartValueX + 72.5, SmallSignImg[arrayIndex]));
        arrayIndex++;
    }

    arrayIndex = 0;
    
    //Big High Sign 6 times = (6 * 100 = 600)
    for(let i = StartFinishLine; i < StartFinishLine + 600; i += 100){
        scene.add(addHighwaySignSingle(i ,StartValueX  - 2, LargeSignImg[arrayIndex]));
        arrayIndex++;
    }

    //White Lines towards Raceway 
    scene.add(addWhiteLine(0, 475 ,0));
    scene.add(addWhiteLine(0, 516 ,0));
    scene.add(addWhiteLine(-17.5, 558, -Math.PI / 4));

    //Decoration
    scene.add(addGuitar(780,-40,Math.PI/4));
    
    /*Add a car*/
    {
        PropCar = Car(0x000B8D,0xFF0000)
        PropCar.position.z =  910;
        PropCar.position.x = -37.5;
        PropCar.rotation.y += (Math.PI + (Math.PI/5));
    }

    scene.add(PropCar);
    
    scene.add(addGameController(975, -35));
    scene.add(addCPU(1100,-38, "https://i.imgur.com/ekYLRbh.png"));
    

    //Finish Line
    scene.add(addWhiteLine(StartValueX + 8,StartFinishLine, Math.PI / 2));

    //90 Degree Corner
    {
        //50, 100, 150 marker boards respectively
        scene.add(addMarkerBoard(StartValueX - STDMargin - 6, 1207.5 - 50,"https://i.imgur.com/u2cOwYz.png"));
        scene.add(addMarkerBoard(StartValueX - STDMargin - 6, 1207.5 - 100,"https://i.imgur.com/FBgShMj.png"));
        scene.add(addMarkerBoard(StartValueX - STDMargin - 6, 1207.5 - 150,"https://i.imgur.com/xwfdtfr.png"));
        
        //Tarmac Corner
        scene.add(addMotorway(scene, 60, 100, 1207.5, -25, false));
        
        //Outside Kerb
        for(let i = 0; i < (10 * KerbSize); i += 16){
            scene.add(addKerbStone(StartValueX - STDMargin, SecondCorner + STDMargin - 250 + i));
        }
        //Apex Kerb
        for(let i = 0; i < (4 * KerbSize); i += 16){
            scene.add(addKerbStone(StartValueX + STDMargin, SecondCorner + 11.5 + i - 200));
        }
        //Exit Kerb
        for(let i = 0; i < (2 * KerbSize); i += 16){
            scene.add(addKerbStone(-STDMargin, SecondCorner + i - 80.5));
        }
    }

    //Chequered Finish Line
    scene.add(addTexturedPlane(-1.5, 1292, 15, 28, "https://raw.githubusercontent.com/MarkHedleyJones/markhedleyjones.github.io/master/media/calibration-checkerboard-collection/Checkerboard-A2-25mm-22x15.svg"));
}

let HasPlayed = false;
//Play guitar sounds, if it hadn't sounded
function playGuitar()
{  
    let guitarchord = new Audio('BiographyGameDirectory/signimages/GChord.mp3');
    guitarchord.loop = false;
    if(!HasPlayed){
        guitarchord.play();
        HasPlayed = true;
    }else if(HasPlayed)
    {
        HasPlayed = false;
    }
}