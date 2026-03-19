import { useRef, useEffect } from "react";


export default function useHexCanvas() {
const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let animId;
  let hexagons = [];
  let benzRings = [];
  let naphRings = [];

  const COLORS = [
    "rgba(15, 212, 200, ",   // teal
    "rgba(26, 109, 181, ",   // blue
    "rgba(7, 24, 41, ",      // navy
    "rgba(255, 255, 255, ",  // white
  ];

  const BENZ_COLORS = [
    "rgba(15, 212, 200, ",
  "rgba(0, 229, 255, ",
  "rgba(64, 196, 255, ",
  "rgba(100, 220, 210, ",
  "rgba(26, 109, 181, ",
  "rgba(255, 255, 255, ",
  ];

  const NAPH_COLORS = [
  "rgba(80, 200, 180, ",
  "rgba(50, 180, 230, ",
  "rgba(150, 230, 255, ",
  "rgba(0, 210, 200, ",
  "rgba(120, 200, 240, ",
  "rgba(200, 240, 255, ",
];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function hexPath(ctx, x, y, r) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const px = x + r * Math.cos(angle);
      const py = y + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function spawnHex() {
    const r = Math.random() * 28 + 14;
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r,
      targetR: r,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0,
      targetAlpha: Math.random() * 0.18 + 0.04,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.004,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      life: 0,
      maxLife: Math.random() * 400 + 200,
      filled: Math.random() > 0.5,
    };
  }

  function drawBenz(x,y, size, rotation, alpha, color, filled = false) {
    ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.1;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const r = size;

       // Benzene hexagon points
      const hex = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        hex.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
      }
     // Draw hexagon
      ctx.beginPath();
      hex.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
      ctx.closePath();
      if(filled) {
        ctx.fillStyle = color;
        ctx.fill();
      }else{
        ctx.stroke();
      }

      // Fused pentagon (imidazole) on right side
      const sA = hex[0];
      const sB = hex[5];
      const midX = (sA.x + sB.x) / 2;
      const midY = (sA.y + sB.y) / 2;
      const perpX = -(sB.y - sA.y);
      const perpY = sB.x - sA.x;
      const perpLen = Math.sqrt(perpX * perpX + perpY * perpY);
      const offset = r * 0.88;
      const apex   = { x: midX + (perpX / perpLen) * offset, y: midY + (perpY / perpLen) * offset };
      const wOff   = r * 0.36;
      const wA     = { x: sA.x + (perpX / perpLen) * wOff, y: sA.y + (perpY / perpLen) * wOff };
      const wB     = { x: sB.x + (perpX / perpLen) * wOff, y: sB.y + (perpY / perpLen) * wOff };

      ctx.beginPath();
      ctx.moveTo(sA.x, sA.y);
      ctx.lineTo(wA.x, wA.y);
      ctx.lineTo(apex.x, apex.y);
      ctx.lineTo(wB.x, wB.y);
      ctx.lineTo(sB.x, sB.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(sA.x, sA.y);
      ctx.lineTo(wA.x, wA.y);
      ctx.lineTo(apex.x, apex.y);
      ctx.lineTo(wB.x, wB.y);
      ctx.lineTo(sB.x, sB.y);
      ctx.stroke();

      // Double bonds inside benzene
      [[0,1],[2,3],[4,5]].forEach(([a, b]) => {
        const pA = hex[a];
        const pB = hex[b];
        const cx2 = (pA.x + pB.x) / 2;
        const cy2 = (pA.y + pB.y) / 2;
        const nx = -(pB.y - pA.y) * 0.12;
        const ny =  (pB.x - pA.x) * 0.12;
        const t  = 0.72;
        ctx.beginPath();
        ctx.moveTo(pA.x * t + cx2 * (1 - t) + nx, pA.y * t + cy2 * (1 - t) + ny);
        ctx.lineTo(pB.x * t + cx2 * (1 - t) + nx, pB.y * t + cy2 * (1 - t) + ny);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      ctx.restore();
  }

  function spawnBenz() {
      const size = Math.random() * 35+25;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        color: BENZ_COLORS[Math.floor(Math.random() * BENZ_COLORS.length)],
        alpha: 0,
        targetAlpha: Math.random() * 0.16 + 0.04,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.005,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        life: 0,
        maxLife: Math.random() * 380 + 180,
        filled: Math.random() > 0.5,
      };
    }

    // ── Naphthalene (two fused hexagons) ────────
function drawNaphthalene(x, y, size, rotation, alpha, color, filled=false) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.1;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const r = size;

  // Helper to get hexagon points centered at cx, cy
  function hexPoints(cx, cy) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      pts.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
    }
    return pts;
  }

  // Two hexagons side by side — shared bond on right of hex1 / left of hex2
  // Distance between centers = r * sqrt(3)
  const offset = r * Math.sqrt(3);
  const hex1 = hexPoints(-offset / 2, 0);
  const hex2 = hexPoints( offset / 2, 0);

  // Draw hex 1
  ctx.beginPath();
  hex1.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.closePath();
  if(filled){
    ctx.fillStyle = color;
    ctx.fill();
  }else{
    ctx.stroke();
  }
  


  // Draw hex 2
  ctx.beginPath();
  hex2.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.closePath();
 if(filled){
    ctx.fillStyle = color;
    ctx.fill();
  }else{
    ctx.stroke();
  }

  // Alternating double bonds hex1 — pairs [0,1] [2,3] [4,5]
  [[0,1],[2,3],[4,5]].forEach(([a, b]) => {
    const pA = hex1[a];
    const pB = hex1[b];
    const cx2 = (pA.x + pB.x) / 2;
    const cy2 = (pA.y + pB.y) / 2;
    const nx = -(pB.y - pA.y) * 0.12;
    const ny =  (pB.x - pA.x) * 0.12;
    const t  = 0.72;
    ctx.beginPath();
    ctx.moveTo(pA.x * t + cx2 * (1 - t) + nx, pA.y * t + cy2 * (1 - t) + ny);
    ctx.lineTo(pB.x * t + cx2 * (1 - t) + nx, pB.y * t + cy2 * (1 - t) + ny);
    ctx.stroke();
  });

  // Alternating double bonds hex2
  [[0,1],[2,3],[4,5]].forEach(([a, b]) => {
    const pA = hex2[a];
    const pB = hex2[b];
    const cx2 = (pA.x + pB.x) / 2;
    const cy2 = (pA.y + pB.y) / 2;
    const nx = -(pB.y - pA.y) * 0.12;
    const ny =  (pB.x - pA.x) * 0.12;
    const t  = 0.72;
    ctx.beginPath();
    ctx.moveTo(pA.x * t + cx2 * (1 - t) + nx, pA.y * t + cy2 * (1 - t) + ny);
    ctx.lineTo(pB.x * t + cx2 * (1 - t) + nx, pB.y * t + cy2 * (1 - t) + ny);
    ctx.stroke();
  });

  ctx.globalAlpha = 1;
  ctx.restore();
}

function spawnNaph() {
  const size = Math.random() * 38+28;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size,
    color: NAPH_COLORS[Math.floor(Math.random() * NAPH_COLORS.length)],
    alpha: 0,
    targetAlpha: Math.random() * 0.15 + 0.04,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.004,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    life: 0,
    maxLife: Math.random() * 360 + 200,
    filled: Math.random() > 0.5,
  };
}

        // ── Shared fade helper ───────────────────
    function updateAlpha(obj) {
      const p = obj.life / obj.maxLife;
      if (p < 0.15)      obj.alpha = (p / 0.15) * obj.targetAlpha;
      else if (p > 0.8)  obj.alpha = ((1 - p) / 0.2) * obj.targetAlpha;
      else               obj.alpha = obj.targetAlpha;
    }

  function init() {
    hexagons = Array.from({ length: 30 }, spawnHex).map((h) => ({
      ...h,
      life: Math.floor(Math.random() * h.maxLife),
      alpha: h.targetAlpha,
    }));

    benzRings = Array.from({ length: 20 }, spawnBenz).map((b) => ({
        ...b, life: Math.floor(Math.random() * b.maxLife), alpha: b.targetAlpha,
      }));

      naphRings = Array.from({ length: 20 }, spawnNaph).map((n) => ({
  ...n, life: Math.floor(Math.random() * n.maxLife), alpha: n.targetAlpha,
}));

  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // dark navy base gradient
    const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bg.addColorStop(0, "#071829");
    bg.addColorStop(0.5, "#0d2a40");
    bg.addColorStop(1, "#1a3a5c");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //draw hexagons
    hexagons.forEach((h, i) => {
      h.life++;
      h.x += h.vx;
      h.y += h.vy;
      h.rotation += h.rotSpeed;

      // fade in/out over lifetime
      const progress = h.life / h.maxLife;
      if (progress < 0.15) {
        h.alpha = (progress / 0.15) * h.targetAlpha;
      } else if (progress > 0.8) {
        h.alpha = ((1 - progress) / 0.2) * h.targetAlpha;
      } else {
        h.alpha = h.targetAlpha;
      }

      // respawn when done
      if (h.life >= h.maxLife) {
        hexagons[i] = spawnHex();
        return;
      }

      ctx.save();
      ctx.translate(h.x, h.y);
      ctx.rotate(h.rotation);
      hexPath(ctx, 0, 0, h.r);

      if (h.filled) {
        ctx.fillStyle = `${h.color}${h.alpha})`;
        ctx.fill();
      } else {
        ctx.strokeStyle = `${h.color}${h.alpha + 0.08})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      ctx.restore();
    });

    // Draw benzimidazole rings
      benzRings.forEach((b, i) => {
        b.life++; b.x += b.vx; b.y += b.vy; b.rotation += b.rotSpeed;
        updateAlpha(b);
        if (b.life >= b.maxLife) { benzRings[i] = spawnBenz(); return; }
        if (b.filled) {
        drawBenz(b.x, b.y, b.size, b.rotation, b.alpha, `${b.color}${b.alpha})`, true);
      } else {
        drawBenz(b.x, b.y, b.size, b.rotation, b.alpha, `${b.color}${b.alpha})`, false);
      }
      });

      // Draw naphthalene rings
naphRings.forEach((n, i) => {
  n.life++; n.x += n.vx; n.y += n.vy; n.rotation += n.rotSpeed;
  updateAlpha(n);
  if (n.life >= n.maxLife) { naphRings[i] = spawnNaph(); return; }
  if(n.filled) {
  drawNaphthalene(n.x, n.y, n.size, n.rotation, n.alpha, `${n.color}${n.alpha})`, true);
  }else{
  drawNaphthalene(n.x, n.y, n.size, n.rotation, n.alpha, `${n.color}${n.alpha})`, false);
  } 
});

    animId = requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  return () => {
    cancelAnimationFrame(animId);
    ro.disconnect();
  };
}, []);

return canvasRef;

}