/* Amal's Games — tiny Web Audio UI sounds for the hub, stats and ideas pages.
   Included after arcade.js: <script src="../shared/sound.js"></script>
   Sound.wire() hooks clicks/hovers/links by delegation; Sound.toggleButton() builds the 🔊 button.
   State lives in localStorage 'amals-sound' ("1" on / "0" off, default on). Audio only starts after a user gesture. */
(function () {
  const LS = 'amals-sound';
  const get = () => { try { return localStorage.getItem(LS) !== '0'; } catch { return true; } };
  const set = (on) => { try { localStorage.setItem(LS, on ? '1' : '0'); } catch { /* ignore */ } };
  let on = get(), ac = null, master = null, amb = null, unlocked = false;

  function ctx() {
    if (!ac) {
      try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; }
      master = ac.createGain(); master.gain.value = 0.5; master.connect(ac.destination);
    }
    if (ac.state === 'suspended') ac.resume().catch(() => {});
    return ac;
  }
  // one enveloped oscillator; f1 = optional glide target
  function tone(f0, f1, dur, type, vol, delay) {
    if (!on || !unlocked) return;
    const a = ctx(); if (!a) return;
    const t = a.currentTime + (delay || 0);
    const o = a.createOscillator(), g = a.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.15, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.03);
  }
  function noise(dur, vol, from, to) {
    if (!on || !unlocked) return;
    const a = ctx(); if (!a) return;
    const n = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, n, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / n);
    const s = a.createBufferSource(); s.buffer = buf;
    const f = a.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.8;
    f.frequency.setValueAtTime(from, a.currentTime); f.frequency.exponentialRampToValueAtTime(to, a.currentTime + dur);
    const g = a.createGain(); g.gain.value = vol;
    s.connect(f); f.connect(g); g.connect(master); s.start();
  }

  // ---- soft ambient loop: slow pad chords + sparse sparkle, ~0.04 gain ----
  const CHORDS = [[261.6, 329.6, 392.0, 493.9], [220.0, 261.6, 329.6, 392.0], [174.6, 220.0, 261.6, 349.2], [196.0, 246.9, 293.7, 392.0]];
  function ambientStart() {
    if (amb || !on || !unlocked) return;
    const a = ctx(); if (!a) return;
    const g = a.createGain(); g.gain.setValueAtTime(0.0001, a.currentTime); g.gain.exponentialRampToValueAtTime(0.05, a.currentTime + 2);
    const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    lp.connect(g); g.connect(master);
    amb = { g, lp, i: 0, timer: 0, oscs: [] };
    const chord = () => {
      if (!amb) return;
      const t = a.currentTime, notes = CHORDS[amb.i % CHORDS.length]; amb.i++;
      amb.oscs.forEach((o) => { try { o.g.gain.cancelScheduledValues(t); o.g.gain.setTargetAtTime(0.0001, t, 0.6); o.o.stop(t + 2.5); } catch { /* already stopped */ } });
      amb.oscs = [];
      notes.forEach((f, k) => [-4, 4].forEach((det) => {
        const o = a.createOscillator(), og = a.createGain();
        o.type = k === 0 ? 'triangle' : 'sine'; o.frequency.value = f / (k === 0 ? 2 : 1); o.detune.value = det;
        og.gain.setValueAtTime(0.0001, t); og.gain.setTargetAtTime(k === 0 ? 0.5 : 0.28, t, 0.9);
        o.connect(og); og.connect(lp); o.start(t); amb.oscs.push({ o, g: og });
      }));
      // sparkle: two high pings somewhere in the bar
      const s1 = notes[2] * 2, s2 = notes[3] * 2;
      [[s1, 1.2 + Math.random()], [s2, 3 + Math.random()]].forEach(([f, d]) => {
        const o = a.createOscillator(), og = a.createGain(); o.type = 'sine'; o.frequency.value = f;
        og.gain.setValueAtTime(0.0001, t + d); og.gain.exponentialRampToValueAtTime(0.22, t + d + 0.02); og.gain.exponentialRampToValueAtTime(0.0001, t + d + 1.1);
        o.connect(og); og.connect(g); o.start(t + d); o.stop(t + d + 1.2);
      });
      amb.timer = setTimeout(chord, 5200);
    };
    chord();
  }
  function ambientStop() {
    if (!amb) return;
    clearTimeout(amb.timer);
    const t = ac.currentTime; amb.g.gain.cancelScheduledValues(t); amb.g.gain.setTargetAtTime(0.0001, t, 0.3);
    const dead = amb; amb = null;
    setTimeout(() => dead.oscs.forEach((o) => { try { o.o.stop(); } catch { /* ignore */ } }), 1500);
  }

  const Sound = {
    get on() { return on; },
    click() { tone(880, 0, 0.05, 'square', 0.06); tone(1320, 0, 0.07, 'sine', 0.08, 0.02); },
    tick() { tone(1500, 0, 0.025, 'sine', 0.04); },
    success() { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0, 0.16, 'triangle', 0.14, i * 0.07)); },
    whoosh() { noise(0.32, 0.5, 500, 2400); tone(240, 720, 0.28, 'sine', 0.06); },
    pop() { tone(620, 980, 0.08, 'sine', 0.1); },
    setOn(v) { on = !!v; set(on); if (on) { Sound.click(); ambientStart(); } else ambientStop(); document.dispatchEvent(new CustomEvent('amals:sound', { detail: on })); },
    toggle() { Sound.setOn(!on); },
    // first gesture unlocks the context (iOS) and starts the ambient loop if enabled
    unlock() { if (unlocked) return; unlocked = true; if (ctx() && on) ambientStart(); },
    // 🔊 button: pass a className for the host page's styling
    toggleButton(className) {
      const b = document.createElement('button'); b.type = 'button'; b.className = className || ''; b.setAttribute('aria-pressed', on ? 'true' : 'false');
      const paint = () => { b.textContent = on ? '🔊 Sound on' : '🔇 Sound off'; b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.title = on ? 'Turn sound off' : 'Turn sound on'; };
      paint(); b.addEventListener('click', () => { Sound.unlock(); Sound.toggle(); });
      document.addEventListener('amals:sound', paint);
      return b;
    },
    // delegation: clicks on buttons/links tick, same-site links whoosh, star buttons chime, mouse hover ticks
    wire() {
      const unlockEv = () => Sound.unlock();
      ['pointerdown', 'keydown', 'touchend'].forEach((e) => document.addEventListener(e, unlockEv, { passive: true, capture: true }));
      document.addEventListener('visibilitychange', () => { if (!document.hidden && ac && ac.state === 'suspended') ac.resume().catch(() => {}); });
      document.addEventListener('click', (e) => {
        const el = e.target.closest && e.target.closest('button, a[href], .chip, .tab, select, [data-sound]');
        if (!el || !on) return;
        Sound.unlock();
        if (el.matches('.arc-stars button, .stars button')) { Sound.success(); return; }
        const a = el.closest('a[href]');
        if (a && !a.hash && !e.metaKey && !e.ctrlKey && !e.shiftKey && !a.target && a.origin === location.origin) {
          Sound.whoosh();                                   // let the whoosh breathe before the page swaps
          e.preventDefault(); setTimeout(() => { location.href = a.href; }, 140); return;
        }
        Sound.click();
      }, true);
      if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.addEventListener('pointerover', (e) => {
          const el = e.target.closest && e.target.closest('button, a[href], .chip, .tab, .game, .skin');
          if (el && on && unlocked && !el.contains(e.relatedTarget)) Sound.tick();
        }, true);
      }
    },
  };
  window.Sound = Sound;
})();
