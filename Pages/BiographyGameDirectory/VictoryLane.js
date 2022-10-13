function VictoryLane(scene)
{
    //Victory Lane Ground
    scene.add(addTexturedPlane(-37.5,1324,50,100, "https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY3JldGUlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"));
   
    //Thank You Sign
    scene.add(addBass(-5, 1349,"https://i.imgur.com/UO7JUCm.png"));

    //Nr. 1 Board
    scene.add(addBoard(1325, -70, "https://i.imgur.com/EFpzqrx.png"));

    //Target (Gold)
    Target = addTexturedPlane(-60, 1325, 10, 20, "https://thumbs.dreamstime.com/b/gold-texture-background-149586877.jpg");
    Target.position.y += 0.25;
    scene.add(Target);

    //Nr. 3 Board
    scene.add(addBoard(1335, -65, "https://i.imgur.com/pPLUFgs.png"));
    
    //Nr. 2 Board
    scene.add(addBoard(1315, -65, "https://i.imgur.com/jDBYYRs.png"));

    for(let i = 0; i < 40; i += 20){
        let firstColour = 0xFFFFFF;
        let secondColour = 0x00A86B;
        if(i != 0)
        {
            firstColour = 0xF98E1D;
            secondColour= 0x0020FF;
        }
        ThirdPlaceCar = Car(firstColour,secondColour);
        ThirdPlaceCar.position.z = 1335 - i;
        ThirdPlaceCar.position.x = -57;
        ThirdPlaceCar.rotation.y = 0;
        scene.add(ThirdPlaceCar);
    }
    
    scene.add(addCup(1325, -80));
}
