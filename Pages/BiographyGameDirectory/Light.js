function initSun(scene)
{
  const Suncolor = 0xf6ebb9;
  const SunPosX = 60;
  const SunPosY = 40;
  const SunPosZ = 600;
  const intensity = 3;
  const light = new THREE.AmbientLight(Suncolor, intensity);
  light.position.set(SunPosX,SunPosY,SunPosZ);

  light.castShadow = true;

  const Sun = new THREE.Mesh(
    new THREE.SphereBufferGeometry(20,20,20),
    new THREE.MeshPhongMaterial({color: Suncolor})
  );
  Sun.position.set(SunPosX,SunPosY,SunPosZ);

  scene.add(Sun);
  scene.add(light);
}

function initSkyBox(scene){
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([
    'https://r105.threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg',
    'https://r105.threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg',
    'https://r105.threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg',
    'https://r105.threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg',
    'https://r105.threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg',
    'https://r105.threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg',
  ]);
  scene.background = texture;
}