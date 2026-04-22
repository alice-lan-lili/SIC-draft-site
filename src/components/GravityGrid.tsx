import { useEffect, useRef } from 'react';

export default function GravityGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    const spacing = 50;
    
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = 0; x < width + spacing; x += spacing) {
        ctx.beginPath();
        for (let y = 0; y < height + spacing; y += spacing) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 350;
          
          let drawX = x;
          let drawY = y;
          
          if (dist < maxDist) {
            const force = Math.pow((maxDist - dist) / maxDist, 2);
            drawX -= (dx / dist) * force * 25;
            drawY -= (dy / dist) * force * 25;
          }
          
          if (y === 0) {
            ctx.moveTo(drawX, drawY);
          } else {
            ctx.lineTo(drawX, drawY);
          }
        }
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y < height + spacing; y += spacing) {
        ctx.beginPath();
        for (let x = 0; x < width + spacing; x += spacing) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 350;
          
          let drawX = x;
          let drawY = y;
          
          if (dist < maxDist) {
            const force = Math.pow((maxDist - dist) / maxDist, 2);
            drawX -= (dx / dist) * force * 25;
            drawY -= (dy / dist) * force * 25;
          }
          
          if (x === 0) {
            ctx.moveTo(drawX, drawY);
          } else {
            ctx.lineTo(drawX, drawY);
          }
        }
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'var(--color-primary)'
      }}
    />
  );
}
