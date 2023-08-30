fetch('https://api.mozambiquehe.re/maprotation?auth=df7a2916db613fe7330f449f6a2ee05d')
  .then(response => response.json())
  .then(data => {
    // Récupérez le nom de la map actuelle et de la prichaine map
    const currentMapName = data.current.map;
    const nextMapName = data.next.map;

    // const container_map = document.querySelector("img");
    const container_map = document.getElementById("rotation");

    // Affichage de la map en fonction du nom
    switch(currentMapName){
        case "Olympus":
            container_map.src = "images/maps/olympus.jpg";
            break;
        case "Broken Moon":
            container_map.src = "images/maps/broken-moon.jpg";
            break;
        case "Storm Point":
            container_map.src = "images/maps/stormpoint.jpg";
            break;
        case "Worlds Edge":
            container_map.src = "images/maps/worlds-edge.jpg";
            break;
        case "Kings Canyon":
            container_map.src = "images/maps/kings-canyon.jpg";
            break;

        default:
            container_map.src = "images/maps/invalid.jpg";
    }

    // Affichage de la map
    console.log(`current map: ${currentMapName}`);
    console.log(`next map: ${nextMapName}`);

  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
  });