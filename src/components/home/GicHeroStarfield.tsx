import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

type Star = {
  x: number;
  y: number;
  speed: number;
  phase: number;
  tier: 0 | 1 | 2;
};

const POINTER_OUT = -10000;

type Props = { scopeRef: RefObject<HTMLElement | null> };

export default function GicHeroStarfield({ scopeRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: POINTER_OUT, y: POINTER_OUT, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let rafId = 0;

    const buildStars = (w: number, h: number) => {
      const out: Star[] = [];
      const count = Math.min(260, Math.floor((w * h) / 2200));
      for (let i = 0; i < count; i++) {
        const r = Math.random();
        const tier: 0 | 1 | 2 = r < 0.62 ? 0 : r < 0.88 ? 1 : 2;
        out.push({
          x: Math.random() * w,
          y: Math.random() * h,
          speed: (Math.random() * 0.16 + 0.03) * (reduceMotion ? 0 : 1),
          phase: Math.random() * Math.PI * 2,
          tier,
        });
      }
      return out;
    };

    const syncPointer = (clientX: number, clientY: number) => {
      const el = scopeRef.current;
      if (!el) {
        pointerRef.current.active = false;
        return;
      }
      const r = el.getBoundingClientRect();
      if (clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) {
        pointerRef.current = {
          x: clientX - r.left,
          y: clientY - r.top,
          active: true,
        };
      } else {
        pointerRef.current.active = false;
      }
    };

    const onWinMove = (e: MouseEvent) => {
      syncPointer(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) syncPointer(t.clientX, t.clientY);
    };

    const clearPointer = () => {
      pointerRef.current.active = false;
    };

    if (!reduceMotion) {
      window.addEventListener('mousemove', onWinMove, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', clearPointer, { passive: true });
      window.addEventListener('touchcancel', clearPointer, { passive: true });
      document.documentElement.addEventListener('mouseleave', clearPointer);
    }

    const resize = () => {
      const el = scopeRef.current;
      if (!el) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w < 2 || h < 2) return;
      width = w;
      height = h;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = buildStars(width, height);
    };

    const ro =
      scopeRef.current && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            resize();
          })
        : null;
    if (scopeRef.current && ro) ro.observe(scopeRef.current);

    resize();
    const rafSync = requestAnimationFrame(() => {
      resize();
    });
    window.addEventListener('resize', resize);

    const PROX = 200;
    /** Hero is always a dark canvas; keep star treatment identical in light and dark site themes */
    const dark = true;

    const tick = () => {
      if (width >= 2 && height >= 2) {
        ctx.clearRect(0, 0, width, height);
      const { x: px, y: py, active } = pointerRef.current;
      const t = performance.now() * 0.0014;

      stars.forEach((star) => {
        if (!reduceMotion) {
          star.y += star.speed;
          if (star.y > height + 2) {
            star.y = -2;
            star.x = Math.random() * width;
          }
        }

        let proximity = 0;
        if (!reduceMotion && active) {
          const dx = star.x - px;
          const dy = star.y - py;
          const dist = Math.hypot(dx, dy);
          if (dist < PROX) {
            const u = 1 - dist / PROX;
            proximity = u * u;
          }
        }

        const tw = reduceMotion ? 1 : 0.86 + Math.sin(t + star.phase) * 0.14;
        const base = dark ? (star.tier === 2 ? 0.28 : star.tier === 1 ? 0.34 : 0.4) : 0.12;
        const hover = !reduceMotion && active ? proximity * (dark ? 0.55 : 0.32) : 0;
        let alpha = Math.min(dark ? 0.95 : 0.55, (base + hover) * tw);

        const cx = star.x;
        const cy = star.y;
        const useGlow = !reduceMotion && active && proximity > 0.04;

        if (star.tier === 0) {
          ctx.save();
          if (useGlow) {
            ctx.shadowBlur = 8 + proximity * 28;
            ctx.shadowColor = dark
              ? `rgba(180, 220, 255, ${0.25 + proximity * 0.45})`
              : `rgba(100, 140, 200, ${0.15 + proximity * 0.3})`;
          }
          const xi = Math.floor(cx);
          const yi = Math.floor(cy);
          ctx.fillStyle = dark ? `rgba(236, 244, 255, ${alpha})` : `rgba(40, 52, 72, ${alpha})`;
          ctx.fillRect(xi, yi, 1, 1);
          ctx.restore();
        } else if (star.tier === 1) {
          ctx.save();
          if (useGlow) {
            ctx.shadowBlur = 10 + proximity * 32;
            ctx.shadowColor = dark
              ? `rgba(160, 210, 255, ${0.22 + proximity * 0.42})`
              : `rgba(90, 130, 190, ${0.14 + proximity * 0.28})`;
            alpha = Math.min(dark ? 0.92 : 0.5, alpha + proximity * 0.1);
          }
          const xi = Math.floor(cx);
          const yi = Math.floor(cy);
          ctx.fillStyle = dark ? `rgba(220, 235, 255, ${alpha})` : `rgba(36, 48, 68, ${alpha})`;
          ctx.fillRect(xi, yi, 1, 1);
          const arm = Math.min(0.38, alpha * 0.5);
          ctx.fillStyle = dark ? `rgba(140, 190, 255, ${arm})` : `rgba(50, 70, 100, ${arm})`;
          ctx.fillRect(xi - 1, yi, 1, 1);
          ctx.fillRect(xi + 1, yi, 1, 1);
          ctx.fillRect(xi, yi - 1, 1, 1);
          ctx.fillRect(xi, yi + 1, 1, 1);
          ctx.restore();
        } else {
          const r = Math.max(0.35, 0.55 + Math.sin(star.phase) * 0.12);
          ctx.save();
          if (useGlow) {
            ctx.shadowBlur = 12 + proximity * 36;
            ctx.shadowColor = dark
              ? `rgba(200, 160, 255, ${0.12 + proximity * 0.35})`
              : `rgba(120, 100, 160, ${0.1 + proximity * 0.22})`;
          }
          ctx.fillStyle = dark
            ? `rgba(210, 225, 255, ${alpha * 0.88})`
            : `rgba(45, 58, 82, ${alpha})`;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      }

      if (!reduceMotion) rafId = window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(rafSync);
      ro?.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onWinMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', clearPointer);
      window.removeEventListener('touchcancel', clearPointer);
      document.documentElement.removeEventListener('mouseleave', clearPointer);
      window.cancelAnimationFrame(rafId);
    };
  }, [scopeRef]);

  return <canvas ref={canvasRef} className="home-gic-hero__starfield" aria-hidden />;
}
