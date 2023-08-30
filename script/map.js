fetch('https://api.mozambiquehe.re/maprotation?auth=df7a2916db613fe7330f449f6a2ee05d')
  .then(response => response.json())
  .then(data => {
    // Récupérez le nom de la map actuelle et de la prochaine map -> API Apex
    const currentMapName = data.current.map;
    const nextMapName = data.next.map;

    // Rotation Map
    const container_map = document.getElementById("rotation");
    const title_rota = document.getElementById("title");
    const content_rota = document.getElementById("content")

    // content de la map
    const olympus =
    `
    Utopie nichée dans les nuages surplombant la planète Psamathe,<br>
    Olympus était autrefois la ville où les plus grands esprits des Terres Sauvages pouvaient se réunir et échanger des idées<br>
    afin de faire progresser la science et les arts. Un mystérieux accident dans un centre de recherche expérimental a donné naissance à la Faille<br>
    (une énorme bulle d’énergie de phase), et l'élite intellectuelle des Terres Sauvages s'est empressée de quitter la ville.<br>
    Peu de temps après, Hammond Robotics, avec l’aide du Syndicat Mercenaire, a fait d'Olympus le nouveau théâtre des Jeux Apex.<br>
    Depuis, un vaisseau de la flotte Icarus a introduit à Olympus un virus mortel ainsi que des plantes Medusa terriblement invasives.<br>
    Le temps qu'un remède au virus soit trouvé, les plantes ont pris racine et maintenu le navire amarré. Par ailleurs,<br>
    après une tentative catastrophique visant à téléporter Olympus grâce à la technologie phasique,<br>
    la ville est partie en vrille et ses structures se sont parsemées sur tout le terrain pendant qu'elle se stabilisait.<br>
    Ces changements ont affecté le déroulement des Jeux Apex en créant de nouveaux défis pour toutes les Légendes.<br>
    `;

    const broken_moon =
    `
    La lune de Boréas, Cleo, était autrefois entière...<br>
    jusqu'à ce qu'un météore et un mythe la fassent voler en éclats.<br>
    Ce qu'ignoraient les habitants de Boréas, c'est que ce météore n'avait pas simplement fracturé la lune<br>
    et causé d'importants dégâts à sa surface,<br>
    mais aussi entraîné leur propre planète sur la voie de la destruction.<br>
    Ce n'est que lorsque des chercheurs ont fait le lien entre la lune et la multiplication d'événements météorologiques<br>
    dévastateurs que les nations de Boréas se sont unies et engagées à soigner Cleo, donnant naissance au projet Hope. Jusqu'alors inoccupé,<br>
    le satellite est devenu une colonie fourmillant de chercheurs, d'ingénieurs et de bâtisseurs.<br>
    Les ouvriers ont recollé les morceaux,<br>
    la roche céleste a fait place à des champs et de nouvelles technologies ont fait leur apparition.<br><br>
    Hélas, le passage des années et la lenteur des progrès ont fini par détourner les cœurs et les ressources de Hope.<br>
    Le Comité de rétablissement de Cleo n'a eu d'autre solution<br>
    que de privatiser la lune pour trouver de nouveaux financements par le biais de propriétés,<br>
    de centres commerciaux et de concessions funéraires de luxe. Aujourd’hui, Cleo mêle des initiatives publiques et privées,<br>
    au rang desquelles se trouvent les Jeux Apex, dans l'espoir de sauver Cleo et Boréas.<br>
    `;

    // Affichage de la map en fonction du nom
    switch(currentMapName){
        case "Olympus":
            container_map.src = "images/maps/olympus.jpg";
            title_rota.innerHTML = "OLYMPUS";
            content_rota.innerHTML = olympus;
            break;
        case "Broken Moon":
            container_map.src = "images/maps/broken-moon.jpg";
            title_rota.innerHTML = "BROKEN MOON";
            content_rota.innerHTML = broken_moon;
            break;
        case "Storm Point":
            container_map.src = "images/maps/stormpoint.jpg";
            title_rota.innerHTML = "STORM POINT";
            break;
        case "Worlds Edge":
            container_map.src = "images/maps/worlds-edge.jpg";
            title_rota.innerHTML = "WORLDS EDGE";
            break;
        case "Kings Canyon":
            container_map.src = "images/maps/kings-canyon.jpg";
            title_rota.innerHTML = "KINGS CANYON";
            break;
    }

    // Affichage de la map
    console.log(`current map: ${currentMapName}`);
    console.log(`next map: ${nextMapName}`);

  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
  });