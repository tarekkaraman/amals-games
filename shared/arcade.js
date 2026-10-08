/* Amal's Games — shared arcade layer: player profiles, per-player save keys, activity log,
   leaderboards, ratings and comments. Plain JS, no dependencies.
   Included by every game as <script src="../shared/arcade.js"></script>.
   Everything lives in localStorage on this device (the family iPad). */
(function () {
  const PROFILES = [
    { name: 'Amal', emoji: '👧' }, { name: 'Tarek', emoji: '👨' }, { name: 'Rowena', emoji: '👩' }, { name: 'Abla', emoji: '🧕' },
    { name: 'Ramsey', emoji: '🧒' }, { name: 'Uncle Jamie', emoji: '🧔' }, { name: 'Auntie Lara', emoji: '👩‍🦰' }, { name: 'Ollie', emoji: '🧑' }, { name: 'Zac', emoji: '👦' },
  ];
  const GAMES = {
    'dubai-dash': { name: 'Dubai Dash', emoji: '🏙️', unit: 'pts' }, 'amal-turbo': { name: 'Amal Turbo', emoji: '🏎️', unit: 'pts' },
    'animal-spot': { name: 'Animal Spot!', emoji: '🔍', unit: 'pts' }, 'block-blitz': { name: 'Block Blitz', emoji: '🧩', unit: 'pts' },
    'bubble-pop': { name: 'Bubble Pop', emoji: '🫧', unit: 'pts' }, 'amal-world': { name: 'Amal World', emoji: '🏃', unit: '⭐' },
    'falcon-flight': { name: 'Falcon Flight', emoji: '🦅', unit: 'pts' }, 'sky-hop': { name: 'Sky Hop', emoji: '🚀', unit: 'm' },
    'memory-match': { name: 'Memory Match', emoji: '🃏', unit: '⭐' },
  };
  // avatar images live next to this script: shared/avatars/<slug>.png (fallback: emoji)
  const BASE = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  const slug = (n) => n.toLowerCase().replace(/[^a-z]+/g, '-');
  const avatarTag = (name, size) => '<img class="arc-av" src="' + BASE + 'avatars/' + slug(name) + '.png" alt="" width="' + size + '" height="' + size + '" onerror="this.outerHTML=\'<span>\'+this.dataset.e+\'</span>\'" data-e="' + Arcade.emoji(name) + '">';
  const PKEY = 'amals-profile', IKEY = 'amals-ideas-v1', AKEY = 'amals-activity-v1', CKEY = 'amals-comments-v1';
  const get = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } };
  const json = (k, d) => { try { return JSON.parse(get(k)) || d; } catch { return d; } };
  const gameIdFromPath = () => { const m = location.pathname.match(/\/([a-z0-9-]+)\/[^/]*$/); return m && GAMES[m[1]] ? m[1] : null; };

  const Arcade = {
    PROFILES, GAMES,
    hasProfile() { return PROFILES.some((x) => x.name === get(PKEY)); },
    profile() { const p = get(PKEY); return PROFILES.some((x) => x.name === p) ? p : 'Amal'; },
    emoji(name) { const p = PROFILES.find((x) => x.name === (name || Arcade.profile())); return p ? p.emoji : '🙂'; },
    setProfile(name) { if (PROFILES.some((x) => x.name === name)) { set(PKEY, name); document.dispatchEvent(new CustomEvent('arcade:profile', { detail: name })); } },
    key(base) { return base + '::' + Arcade.profile(); },

    // ---- activity: who played what, when, and how well ----
    activity() { return json(AKEY, []); },
    log(ev) { const a = Arcade.activity(); a.unshift(Object.assign({ player: Arcade.profile(), ts: Date.now() }, ev)); if (a.length > 600) a.length = 600; set(AKEY, JSON.stringify(a)); },
    start(gameId) { gameId = gameId || gameIdFromPath(); if (gameId) Arcade.log({ type: 'start', game: gameId }); },
    // record a finished game: {score, label?, extra?}. Games call this on their end screen.
    record(gameId, score, extra) { gameId = gameId || gameIdFromPath(); if (!gameId) return; Arcade.log({ type: 'finish', game: gameId, score: Math.round(score || 0), extra: extra || null }); },
    leaderboard(gameId) {
      const best = {};
      Arcade.activity().forEach((e) => { if (e.type === 'finish' && e.game === gameId) { if (!best[e.player] || e.score > best[e.player].score) best[e.player] = { player: e.player, score: e.score, ts: e.ts, extra: e.extra }; } });
      return Object.values(best).sort((a, b) => b.score - a.score);
    },

    // ---- ideas / ratings (shared with the Ideas page) ----
    ideas() { return json(IKEY, { ideas: [], ratings: {} }); },
    saveIdeas(s) { set(IKEY, JSON.stringify(s)); },
    rating(gameId) { const r = Arcade.ideas().ratings[gameId]; return r && typeof r === 'object' ? (r[Arcade.profile()] || 0) : 0; },
    rate(gameId, stars) { const s = Arcade.ideas(); if (!s.ratings[gameId] || typeof s.ratings[gameId] !== 'object') s.ratings[gameId] = {}; s.ratings[gameId][Arcade.profile()] = stars; Arcade.saveIdeas(s); Arcade.log({ type: 'rate', game: gameId, score: stars }); },

    // ---- comments & reactions on leaderboards ----
    comments(gameId) { return json(CKEY, []).filter((c) => !gameId || c.game === gameId); },
    comment(gameId, text) { const all = json(CKEY, []); all.unshift({ id: Date.now(), game: gameId, player: Arcade.profile(), text: String(text).slice(0, 140), ts: Date.now(), reacts: {} }); if (all.length > 400) all.length = 400; set(CKEY, JSON.stringify(all)); Arcade.log({ type: 'comment', game: gameId }); },
    react(commentId, emoji) { const all = json(CKEY, []); const c = all.find((x) => x.id === commentId); if (!c) return; c.reacts = c.reacts || {}; const who = c.reacts[emoji] || []; const me = Arcade.profile(); c.reacts[emoji] = who.includes(me) ? who.filter((n) => n !== me) : who.concat(me); set(CKEY, JSON.stringify(all)); },
    deleteComment(commentId) { set(CKEY, JSON.stringify(json(CKEY, []).filter((x) => x.id !== commentId))); },

    // ---- UI ----
    css() {
      if (document.getElementById('arcade-css')) return;
      const st = document.createElement('style'); st.id = 'arcade-css';
      st.textContent = `
        .arc-chip{display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border-radius:999px;background:rgba(0,0,0,.45);color:#fff;font-weight:900;font-size:.9rem;border:2px solid rgba(255,255,255,.25);cursor:pointer;font-family:inherit;backdrop-filter:blur(6px)}
        .arc-chip:active{transform:scale(.96)}
        .arc-av{border-radius:50%;object-fit:cover;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.35)}
        .arc-chip .arc-av{width:26px;height:26px;margin:-4px 0} .arc-p .arc-av{width:64px;height:64px}
        .arc-overlay{position:fixed;inset:0;background:rgba(8,6,30,.82);display:grid;place-items:center;z-index:9999;padding:16px;font-family:"SF Pro Rounded",ui-rounded,"Segoe UI",system-ui,sans-serif;color:#fff}
        .arc-panel{background:#16204d;border-radius:24px;padding:22px;max-width:560px;width:100%;box-shadow:0 20px 50px rgba(0,0,0,.5),inset 0 0 0 2px rgba(255,255,255,.18);text-align:center;max-height:92vh;overflow:auto}
        .arc-panel h2{font-size:1.6rem;margin:0 0 4px} .arc-panel p{margin:0 0 14px;color:#c7bff0;font-weight:700}
        .arc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
        .arc-p{display:flex;flex-direction:column;align-items:center;gap:4px;padding:14px 6px;border-radius:16px;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.14);cursor:pointer;font-family:inherit;color:#fff;font-weight:900;font-size:.95rem}
        .arc-p span{font-size:2.2rem} .arc-p.on{border-color:#ffd23f;background:rgba(255,210,63,.18)}
        .arc-close{margin-top:14px;padding:12px 24px;border-radius:999px;border:none;font-family:inherit;font-weight:900;font-size:1rem;background:linear-gradient(180deg,#ffe066,#ffb703);color:#3a2600;cursor:pointer}
        .arc-close:disabled{opacity:.4}
        .arc-rate{display:flex;flex-direction:column;align-items:center;gap:6px;margin:10px 0;font-family:inherit}
        .arc-rate b{font-size:.95rem;color:#fff;font-weight:900} .arc-stars{display:flex;gap:4px}
        .arc-stars button{background:none;border:none;font-size:1.9rem;cursor:pointer;filter:grayscale(1) opacity(.4);transition:transform .12s}
        .arc-stars button.lit{filter:none} .arc-stars button:active{transform:scale(1.25)}
        .arc-thanks{font-size:.85rem;color:#3fe0a8;font-weight:900;min-height:1.1em}
      `;
      document.head.appendChild(st);
    },
    chip() {
      Arcade.css();
      const b = document.createElement('button'); b.className = 'arc-chip'; b.type = 'button';
      const paint = () => { b.innerHTML = avatarTag(Arcade.profile(), 26) + ' ' + Arcade.profile(); };
      paint(); b.addEventListener('click', () => Arcade.picker(paint));
      document.addEventListener('arcade:profile', paint);
      return b;
    },
    // forced = can't be dismissed until someone is chosen
    picker(onPick, forced) {
      Arcade.css();
      const ov = document.createElement('div'); ov.className = 'arc-overlay';
      ov.innerHTML = '<div class="arc-panel"><h2>Who’s playing?</h2><p>' + (forced ? 'Pick yourself first — your scores, stars and ideas are saved under your name.' : 'Scores and progress are saved separately for each person.') + '</p><div class="arc-grid"></div><button class="arc-close">' + (forced ? 'Let’s play!' : 'Done') + '</button></div>';
      const grid = ov.querySelector('.arc-grid'); const close = ov.querySelector('.arc-close');
      let chosen = Arcade.hasProfile();
      const render = () => { grid.innerHTML = ''; PROFILES.forEach((p) => { const el = document.createElement('button'); el.type = 'button'; el.className = 'arc-p' + (chosen && p.name === Arcade.profile() ? ' on' : ''); el.innerHTML = avatarTag(p.name, 64) + p.name; el.addEventListener('click', () => { Arcade.setProfile(p.name); chosen = true; close.disabled = false; render(); if (onPick) onPick(p.name); }); grid.appendChild(el); }); close.disabled = forced && !chosen; };
      render();
      close.addEventListener('click', () => { if (forced && !chosen) return; ov.remove(); });
      document.body.appendChild(ov);
      return ov;
    },
    // call on page load: forces a choice if nobody is selected yet, logs the visit
    require(gameId) { if (!Arcade.hasProfile()) Arcade.picker(null, true); else if (gameId !== false) Arcade.start(gameId); },
    ratingWidget(gameId, label) {
      Arcade.css(); gameId = gameId || gameIdFromPath() || 'hub';
      const w = document.createElement('div'); w.className = 'arc-rate';
      const cur = Arcade.rating(gameId);
      w.innerHTML = '<b>' + (label || 'Rate this game, ' + Arcade.profile() + '!') + '</b><div class="arc-stars"></div><div class="arc-thanks">' + (cur ? 'You gave it ' + cur + ' ⭐' : '') + '</div>';
      const stars = w.querySelector('.arc-stars'); const thanks = w.querySelector('.arc-thanks');
      const paint = (n) => stars.querySelectorAll('button').forEach((b, i) => b.classList.toggle('lit', i < n));
      for (let i = 1; i <= 5; i++) { const b = document.createElement('button'); b.type = 'button'; b.textContent = '⭐'; b.setAttribute('aria-label', i + ' stars'); b.addEventListener('click', () => { Arcade.rate(gameId, i); paint(i); thanks.textContent = ['', 'Thanks! We’ll make it better 💪', 'Thanks for rating!', 'Nice — thanks!', 'Awesome, thank you! 🎉', 'Five stars — you’re the best! 🎉'][i]; }); stars.appendChild(b); }
      paint(cur);
      return w;
    },
    avatar(name, size) { return avatarTag(name || Arcade.profile(), size || 32); },
    ago(ts) { const s = Math.max(0, (Date.now() - ts) / 1000); if (s < 60) return 'just now'; if (s < 3600) return Math.floor(s / 60) + ' min ago'; if (s < 86400) return Math.floor(s / 3600) + ' h ago'; const d = Math.floor(s / 86400); return d === 1 ? 'yesterday' : d + ' days ago'; },
  };
  window.Arcade = Arcade;
})();
