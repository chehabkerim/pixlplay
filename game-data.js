/* ==========================================================================
   game-data.js — the single source of truth for the Pixlplay lobby.
   --------------------------------------------------------------------------
   ADD A NEW GAME = add one object to the GAMES array below. Nothing else to
   touch: the home page reads everything (cards, the category filter pills,
   the per-category accent colour, the featured banner) straight from here. A
   brand-new category gets its own filter pill automatically.

   Each entry:
     id          unique slug
     name        display title — this is what the search box matches against
     category    a filter category (Arcade, Puzzle, Adventure, …)
     coverImage  path to the cover art PNG (square / 1:1 — see covers/README)
     path        link target — the game's own entry HTML (real folder on disk)
     blurb       short tagline shown on the card title / featured banner
     featured    (optional) true => shown in the "Featured Game of the Week"
                 banner at the top. Mark exactly one game.
     comingSoon  (optional) true => not playable yet. Shown in the bottom
                 "Coming Soon" banner instead of the grid; no link.
   ========================================================================== */

const GAMES = [
  {
    id: 'pixelball26',
    name: 'Pixel Ball 26',
    category: 'Arcade',
    coverImage: 'assets/covers/pixelball26.png',
    path: 'pixel-ball-26/Pixel%20Ball%2026.html',
    blurb: 'Arcade soccer with a pixel kick.',
    featured: true
  },
  {
    id: 'pixelsiege',
    name: 'Pixel Siege',
    category: 'Arcade',
    coverImage: 'assets/covers/pixelsiege.png',
    path: 'pixel%20siege/index.html',
    blurb: 'Defend your turn, storm theirs.'
  },
  {
    id: 'ghosttownotto',
    name: 'Ghost Town: Otto',
    category: 'Arcade',
    coverImage: 'assets/covers/ghosttownotto.png',
    path: 'ghost-town-otto/index.html',
    blurb: 'Hunt ghosts through a haunted mansion.'
  },
  {
    id: 'wordg',
    name: 'WordG',
    category: 'Puzzle',
    coverImage: 'assets/covers/wordg.png',
    path: 'wordg/index.html',
    blurb: 'A fresh multi-board word puzzle, daily.'
  },
  {
    id: 'clumsymonkey',
    name: 'Clumsy Monkey',
    category: 'Adventure',
    coverImage: 'assets/covers/clumsymonkey.png',
    path: 'clumsy-monkey/monkey.html',
    blurb: 'Swing, stumble and survive.'
  },
  {
    id: 'worldatwar',
    name: 'World at War',
    category: 'Action',
    coverImage: 'assets/covers/worldatwar.png',
    path: '',
    blurb: 'Gritty black-and-white wartime action.',
    comingSoon: true
  }
];

/* Expose to the lobby renderer (plain <script> include, no modules/build). */
window.GAMES = GAMES;
