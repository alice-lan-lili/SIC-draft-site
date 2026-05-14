import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  twinkle: number;
  /** 0 = single pixel, 1 = tight +, 2 = tiny soft dot */
  variant: 0 | 1 | 2;
};

const POINTER_OUT = -10000;

const HERO_STAGE_SELECTOR = '.page-hero-stage, .home-gic-hero-stage';
const CTA_BAND_SELECTOR = '.home-gic-cta-band';

export default function StarField({ speed = 0.38 }: { speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: POINTER_OUT, y: POINTER_OUT, active: false });
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let rafId = 0;

    function buildStars(w: number, h: number): Star[] {
      const stars: Star[] = [];
      const count = Math.min(420, Math.floor((w * h) / 3400));
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        const variant: 0 | 1 | 2 = roll < 0.72 ? 0 : roll < 0.92 ? 1 : 2;
        const size =
          variant === 0
            ? Math.random() * 0.45 + 0.28
            : variant === 1
              ? Math.random() * 0.35 + 0.55
              : Math.random() * 0.5 + 0.42;
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          speed: (Math.random() * 0.22 + 0.04) * speed,
          twinkle: Math.random() * Math.PI * 2,
          variant,
        });
      }
      return stars;
    }

    let stars = buildStars(width, height);
    let heroTopInset = 0;

    const getHeroTopInset = () => {
      let maxBottom = 0;
      document.querySelectorAll(HERO_STAGE_SELECTOR).forEach((node) => {
        const r = node.getBoundingClientRect();
        if (r.height < 4) return;
        if (r.bottom <= 0 || r.top >= window.innerHeight) return;
        maxBottom = Math.max(maxBottom, r.bottom);
      });
      return Math.min(window.innerHeight, Math.max(0, Math.round(maxBottom)));
    };

    const setPointer = (clientX: number, clientY: number) => {
      pointerRef.current = { x: clientX, y: clientY, active: true };
    };

    const clearPointer = () => {
      pointerRef.current.active = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      setPointer(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setPointer(t.clientX, t.clientY);
    };

    const onTouchEnd = () => {
      clearPointer();
    };

    if (!reduceMotion) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', clearPointer);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd, { passive: true });
      window.addEventListener('touchcancel', onTouchEnd, { passive: true });
    }

    const getFooterHeight = () => {
      const el = document.querySelector('.site-footer');
      return el ? el.getBoundingClientRect().height : 0;
    };

    const applyCanvasFrame = () => {
      heroTopInset = getHeroTopInset();
      const fh = getFooterHeight();
      const h = Math.max(120, window.innerHeight - fh - heroTopInset);
      canvas.style.top = `${heroTopInset}px`;
      canvas.style.left = '0';
      canvas.style.right = '0';
      canvas.style.bottom = `${fh}px`;
      canvas.style.width = '100%';
      canvas.style.height = `${h}px`;
      return { w: window.innerWidth, h };
    };

    const resize = () => {
      const { w, h } = applyCanvasFrame();
      const dimsChanged = w !== width || h !== height;
      width = w;
      height = h;
      canvas.width = width;
      canvas.height = height;
      if (dimsChanged) stars = buildStars(width, height);
    };

    const PROX_RADIUS = 420;

    type CtaCanvasRect = { x: number; y: number; w: number; h: number };

    const getCtaCanvasRect = (): CtaCanvasRect | null => {
      const el = document.querySelector(CTA_BAND_SELECTOR);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const top = r.top - heroTopInset;
      const bottom = r.bottom - heroTopInset;
      if (bottom < 0 || top > height) return null;
      return { x: r.left, y: top, w: r.width, h: r.height };
    };

    const starOverlapsCta = (sx: number, sy: number, pad: number, cta: CtaCanvasRect | null) => {
      if (!cta) return false;
      return (
        sx >= cta.x - pad &&
        sx <= cta.x + cta.w + pad &&
        sy >= cta.y - pad &&
        sy <= cta.y + cta.h + pad
      );
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const { x: px, y: py, active } = pointerRef.current;
      const ctaRect = getCtaCanvasRect();
      const t = performance.now() * 0.0011;

      stars.forEach((star) => {
        if (!reduceMotion) {
          star.y += star.speed;
          if (star.y > height + 2) {
            star.y = -2;
            star.x = Math.random() * width;
          }
        }

        const drawX = star.x;
        const drawY = star.y;
        let proximity = 0;

        if (!reduceMotion && active) {
          const localPx = px;
          const localPy = py - heroTopInset;
          const dx = star.x - localPx;
          const dy = star.y - localPy;
          const dist = Math.hypot(dx, dy);
          if (dist < PROX_RADIUS) {
            const u = 1 - dist / PROX_RADIUS;
            proximity = u * u;
          }
        }

        const tw = reduceMotion ? 1 : 0.88 + Math.sin(t + star.twinkle) * 0.12;
        const baseAlpha = isDark ? (star.variant === 2 ? 0.32 : star.variant === 1 ? 0.36 : 0.42) : 0.11;
        const hoverAlpha = !reduceMotion && active ? proximity * (isDark ? 0.38 : 0.28) : 0;
        const useGlow = !reduceMotion && active && proximity > 0.035;
        const glowPad =
          ctaRect != null ? (useGlow ? 22 : 12) : !reduceMotion && active && proximity > 0.12 ? 14 : 4;
        if (starOverlapsCta(drawX, drawY, glowPad, ctaRect)) return;

        let alpha = Math.min(isDark ? 0.88 : 0.52, (baseAlpha + hoverAlpha) * tw);

        const drawPin = (cx: number, cy: number, a: number) => {
          const xi = Math.floor(cx);
          const yi = Math.floor(cy);
          if (isDark) {
            ctx.fillStyle = `rgba(248, 250, 255, ${a})`;
            ctx.fillRect(xi, yi, 1, 1);
          } else {
            ctx.fillStyle = `rgba(38, 34, 30, ${a})`;
            ctx.fillRect(xi, yi, 1, 1);
          }
        };

        const drawPlus = (cx: number, cy: number, a: number) => {
          const xi = Math.floor(cx);
          const yi = Math.floor(cy);
          const c = isDark ? `rgba(255, 255, 255, ${a})` : `rgba(32, 28, 26, ${a})`;
          ctx.fillStyle = c;
          ctx.fillRect(xi, yi, 1, 1);
          const armAlpha = Math.min(0.42, a * 0.55);
          ctx.fillStyle = isDark ? `rgba(230, 236, 255, ${armAlpha})` : `rgba(32, 28, 26, ${armAlpha * 0.95})`;
          ctx.fillRect(xi - 1, yi, 1, 1);
          ctx.fillRect(xi + 1, yi, 1, 1);
          ctx.fillRect(xi, yi - 1, 1, 1);
          ctx.fillRect(xi, yi + 1, 1, 1);
        };

        if (star.variant === 0) {
          ctx.save();
          if (useGlow) {
            ctx.shadowBlur = 5 + proximity * 14;
            ctx.shadowColor = isDark
              ? `rgba(220, 230, 255, ${0.18 + proximity * 0.35})`
              : `rgba(70, 58, 44, ${0.12 + proximity * 0.22})`;
          }
          drawPin(drawX, drawY, alpha);
          ctx.restore();
        } else if (star.variant === 1) {
          ctx.save();
          if (useGlow) {
            ctx.shadowBlur = 6 + proximity * 16;
            ctx.shadowColor = isDark
              ? `rgba(230, 236, 255, ${0.2 + proximity * 0.38})`
              : `rgba(70, 58, 44, ${0.1 + proximity * 0.26})`;
            alpha = Math.min(isDark ? 0.92 : 0.55, alpha + proximity * 0.12);
          }
          drawPlus(drawX, drawY, alpha);
          ctx.restore();
        } else {
          const drawR = Math.max(0.35, star.size * 0.55);
          ctx.save();
          if (useGlow) {
            ctx.shadowBlur = 8 + proximity * 18;
            ctx.shadowColor = isDark
              ? `rgba(210, 220, 255, ${0.14 + proximity * 0.28})`
              : `rgba(80, 68, 52, ${0.1 + proximity * 0.22})`;
          } else if (!reduceMotion && active && proximity > 0.012) {
            ctx.shadowBlur = 2 + proximity * 8;
            ctx.shadowColor = isDark
              ? `rgba(230, 236, 255, ${0.06 + proximity * 0.14})`
              : `rgba(55, 48, 40, ${0.05 + proximity * 0.12})`;
          }
          ctx.fillStyle = isDark
            ? `rgba(236, 242, 255, ${alpha * 0.92})`
            : `rgba(36, 32, 28, ${alpha})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, drawR, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      if (!reduceMotion) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const onLayout = () => {
      resize();
    };

    resize();
    window.addEventListener('resize', onLayout);
    window.addEventListener('scroll', onLayout, { passive: true });

    const footerEl = document.querySelector('.site-footer');
    const roFooter =
      footerEl && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            resize();
          })
        : null;
    if (footerEl && roFooter) roFooter.observe(footerEl);

    const roHero =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            resize();
          })
        : null;
    document.querySelectorAll(`${HERO_STAGE_SELECTOR}, ${CTA_BAND_SELECTOR}`).forEach((el) => roHero?.observe(el));

    const rafSync = requestAnimationFrame(() => {
      resize();
    });

    tick();

    return () => {
      cancelAnimationFrame(rafSync);
      roFooter?.disconnect();
      roHero?.disconnect();
      window.removeEventListener('resize', onLayout);
      window.removeEventListener('scroll', onLayout);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', clearPointer);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
      window.cancelAnimationFrame(rafId);
    };
  }, [speed, location.pathname]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="star-field-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
