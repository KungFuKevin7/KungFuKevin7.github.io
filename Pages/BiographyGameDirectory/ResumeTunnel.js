const Tunnelstart = 650;
function ResumeTunnel(scene)
{
    addMotorway(scene, 800, 60, 500, 0, true);

    for(let i = Tunnelstart; i < 1100; i += 100)
    {
        scene.add(addTunnel(i));
    }
    
    scene.add(addTunnel(650));

    //Welcoming Sign
    scene.add(addTunnelSignLong(600,'https://i.imgur.com/cQQGNjK.png'));

    //Soft Skills sign
    scene.add(addTunnelSign(700, "https://i.imgur.com/fLru6yp.png",false)); 

    //lorry on the right hand side (Software Departments)
    scene.add(addLorry(800, 0xFFFFFF, "https://i.imgur.com/JVhCMeM.png", true));
   
    //Matrix Signs: Programming Languages I + II
    scene.add(addTunnelSignLong(850, 'https://i.imgur.com/6xEMuMy.png'));
    scene.add(addTunnelSignLong(950, 'https://i.imgur.com/0l2NnAA.png'));

    //Education Signs
    scene.add(addTunnelSign(1025, 'https://i.imgur.com/eh0jiyX.png', false));
    scene.add(addTunnelSign(1075, 'https://i.imgur.com/vK8pJYW.png', false));

    //Lorry on the right hand side (Work Experience)
    scene.add(addLorry(1150, 0x3f4bcc, "https://i.imgur.com/Z4FXo4d.png", true));

}
