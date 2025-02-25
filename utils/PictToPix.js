import React, { useRef, useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { IntroImage } from "@/constants";

const PictToPix = (props) => {
  const canvasRef = useRef(null);
  const { theme, systemTheme } = useTheme();

  // Ensure the theme is available before using it
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedTheme = useMemo(() => (theme === "system" ? systemTheme : theme), [theme, systemTheme]);

  useEffect(() => {
    if (!mounted || window.innerWidth <= 1180) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Define colors based on theme
    const primaryColor = resolvedTheme === "dark" ? "white" : "black";

    // Load image
    const image = new Image();
    image.src = IntroImage;

    image.onload = () => {
      console.log("Started creating canvas");

      // Scale for high resolution
      const scaleFactor = window.devicePixelRatio || 1;
      canvas.width = image.width * scaleFactor;
      canvas.height = image.height * scaleFactor;
      context.scale(scaleFactor, scaleFactor);

      // Draw image to retrieve pixel data
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const pixels = imageData.data;

      // Clear the canvas for particle rendering
      context.clearRect(0, 0, image.width, image.height);

      // Convert image pixels to brightness map using a TypedArray
      const mappedImage = new Float32Array(image.width * image.height);
      for (let i = 0, len = mappedImage.length; i < len; i++) {
        const index = i * 4;
        const r = pixels[index];
        const g = pixels[index + 1];
        const b = pixels[index + 2];

        // Convert to brightness (grayscale)
        const brightness = (0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2) ** 0.5 / 255;
        mappedImage[i] = brightness > 0 ? 2.0 : 0.0;
      }

      // Particle Class (Make sure it's properly closed)
      class Particle {
        constructor(x) {
          this.x = x;
          this.y = canvas.height;
          this.velocity = 0.79;
          this.size = 2;
        }

        update() {
          const pos = Math.floor(this.y) * image.width + Math.floor(this.x);
          this.speed = mappedImage[pos] || 0;
          this.y -= Math.min(this.speed * 10 + this.velocity, 1.0);
        }

        draw() {
          context.fillStyle = primaryColor;
          context.fillRect(this.x, this.y, this.size, this.size);
        }
      }

      // Generate particles efficiently
      const particles = Array.from({ length: image.width }, (_, i) => new Particle(i));

      const animate = () => {
        context.globalAlpha = 0.5;
        particles.forEach((particle) => {
          particle.update();
          context.globalAlpha = particle.speed * 0.5;
          particle.draw();
        });
        requestAnimationFrame(animate);
      };

      animate();
    };
  }, [resolvedTheme, mounted]); // Only re-run when the theme or mount state changes

  if (!mounted) return null; // Prevent hydration mismatch

  return <canvas className="intro-canvas-logo" ref={canvasRef} {...props} />;
};

export default PictToPix;
