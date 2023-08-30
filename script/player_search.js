function search_player(){
  // Vérification des champs


  player, plateform

  fetch(`https://api.mozambiquehe.re/bridge?auth=df7a2916db613fe7330f449f6a2ee05d&player=${player}&platform=${plateform}`)
  .then(response => response.json())
  .then(data => {

    // Créer une bannière du Joueur

    /**
     * Pseudo (global.name) -> Avatar (global.avatar)
     * level (global.level) - Rank (global.rank.rankName) - Image (global.rank.rankImg)
     * Battle Pass (global.battlepass.level)
     * Plateforme (global.plateform) - image (font awesome)
     * last Légend Select (realtime.selectedLegend) - Image Legend sans skin (all.{Nomlegend}.ImgAssets.icon) - nom Skin Legend (legends.gameInfo.skin)
     * Kills BR (total.kills.value) - Wins (total.wins_season_{seasonNumber}.win)
     * Connecté (realtime.isOnline) - Le jeux (si connecté) (realtime.isInGame)
     */

  })
  .catch(error => {
    console.error('Le joueur que vous recherchez est actuellement introuvable', error);
  });
}
