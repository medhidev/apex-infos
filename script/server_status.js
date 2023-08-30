fetch('https://api.mozambiquehe.re/servers?auth=df7a2916db613fe7330f449f6a2ee05d')
  .then(response => response.json())
  .then(data => {

  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
  });