import React, { useEffect, useRef } from 'react';

export default function GrainOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const w = 256;
    const h = 256;
    canvas.width = w;
    canvas.height = h;

    const imageData = ctx.createImageData(w, h);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 15; // very subtle grain
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 w-full h-full"
      style={{
        zIndex: 99999,
        imageRendering: 'auto',
        width: '100vw',
        height: '100vh',
        opacity: 0.12,
        mixBlendMode: 'multiply',
      }}
    />
  );
}
