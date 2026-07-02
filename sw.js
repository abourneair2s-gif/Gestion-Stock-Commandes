// StockPro — Service worker minimal
// Rôle unique : rendre l'appli "installable" sur l'écran d'accueil (condition requise
// par Android/Chrome pour activer la Badging API). Ne fait aucune mise en cache.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Pas de gestion de fetch : toutes les requêtes passent normalement au réseau.
