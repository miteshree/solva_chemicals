import { useRef, useEffect } from "react";


export default function useHexCanvas() {
const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let animId;
  let hexagons = [];

  const COLORS = [
    "rgba(15, 212, 200, ",   // teal
    "rgba(26, 109, 181, ",   // blue
    "rgba(7, 24, 41, ",      // navy
    "rgba(255, 255, 255, ",  // white
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

  function init() {
    hexagons = Array.from({ length: 38 }, spawnHex).map((h) => ({
      ...h,
      life: Math.floor(Math.random() * h.maxLife),
      alpha: h.targetAlpha,
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