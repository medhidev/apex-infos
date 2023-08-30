fetch('https://api.mozambiquehe.re/servers?auth=df7a2916db613fe7330f449f6a2ee05d')
  .then(response => response.json())
  .then(data => {

    // Les différents serveurs ORIGIN
    // const euWest = data.Origin_login.EU-West.Status;
    // const euWest = data.Origin_login.EU-West.Status;
    // const euWest = data.Origin_login.EU-West.Status;

  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
  });