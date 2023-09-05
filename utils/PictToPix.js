import React, { useRef, useEffect } from "react";

// Image data [Base64]
import { IntroImage } from "@/constants";

// Scroll Out
// import ScrollOut from "scroll-out";

let isAnimate = false;

const PictToPix = (props) => {
  const canvasRef = useRef(null);

  // ------------------------ Mount ------------------------ //
  useEffect(() => {
    if (window.innerWidth > 1180) {
      // Image
      const image = new window.Image();
      image.src = IntroImage;
      image.onload = () => {
        console.log('started creating canvas')

        // Canvas
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        console.log(context)

        // Assign Canvas width and height
        canvas.width = image.width;
        canvas.height = image.height;

        // Particle Parameters
        let particleArray = [];
        const numberOfParticle = canvas.width;

        // Draw image
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        // Get Iamge Data
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
        // Clear Iamge
        context.clearRect(0, 0, canvas.width, canvas.height);

        const calculateRGB2Grey = (red, green, blue) => {
          return Math.sqrt(
            red ** 2 * 0.299 + green ** 2 * 0.587 + blue ** 2 * 0.114
          );
        };

        let mappedImage = [];
        // Transform image pixels to rain effect
        for (let row = 0; row < canvas.height; row++) {
          let singleRow = [];
          for (let col = 0; col < canvas.width; col++) {
            const red = pixels.data[row * pixels.width * 4 + col * 4];
            const green = pixels.data[row * pixels.width * 4 + col * 4 + 1];
            const blue = pixels.data[row * pixels.width * 4 + col * 4 + 2];
            const color = "rgb(" + red + "," + green + "," + blue + ")";

            const brightness = Math.min(
              2.55,
              calculateRGB2Grey(red, green, blue) / 100
            );
            const cell = [brightness, color];
            singleRow.push(cell);
          }
          mappedImage.push(singleRow);
        }

        class Particle {
          constructor(x) {
            // Particle position
            // this.x = Math.random() * canvas.width;
            this.x = x;
            this.y = canvas.height;
            // Particle speed
            this.speed = 0.0;
            this.velocity = 0.75;
            // Particle size
            this.size = 1;
            // mappedImage position
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
          }
          update() {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);

            // Increase Brightness -> Increase Speed
            if (mappedImage[this.position1]) {
              if (mappedImage[this.position1][this.position2]) {
                this.speed = mappedImage[this.position1][this.position2][0];
              }
            } else {
              this.speed = 0;
            }

            let movement = Math.min(this.speed * 10 + this.velocity, 1.0);
            this.y -= movement;
          }
          draw() {
            context.beginPath();
            if (mappedImage[this.position1]) {
              if (mappedImage[this.position1][this.position2]) {
                context.fillStyle =
                  mappedImage[this.position1][this.position2][1];
              }
            } else {
              context.fillStyle = "black";
            }
            context.rect(this.x, this.y, this.size, this.size);
            context.fill();
          }
        }

        const init = () => {
          for (let i = 0; i < numberOfParticle; i++) {
            particleArray.push(new Particle(i));
          }
        };

        let animateFrame;
        const animate = () => {
          context.globalAlpha = 0.2;
          for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
            context.globalAlpha = particleArray[i].speed * 0.5;
            particleArray[i].draw();
          }
          animateFrame = window.requestAnimationFrame(animate);
        };

        init();
        animate();

        // Scroll out
        // ScrollOut({
        //   targets: ".intro-canvas-logo",

        //   /* Triggered when an element is shown */
        //   onShown: function (element, ctx, scrollingElement) {
        //     if (!isAnimate) {
        //       // Start Animation
        //       init();
        //       animate();

        //       // Cancel Animation Frame & Clear Variables
        //       setTimeout(function () {
        //         if (!isAnimate) {
        //           window.cancelAnimationFrame(animateFrame);

        //           particleArray = [];
        //           isAnimate = false;

        //           // console.log("Cancel Animation Frame");
        //         }
        //       }, 25000);

        //       // Set Variables
        //       isAnimate = true;
        //     }
        //   },

        //   /* Triggered when an element is hidden */
        //   onHidden: function (element, ctx, scrollingElement) {
        //     if (isAnimate) {
        //       // Clear Canvas
        //       context.clearRect(0, 0, canvas.width, canvas.height);

        //       // Cancel Animation Frame
        //       try {
        //         window.cancelAnimationFrame(animateFrame);
        //       } catch {}

        //       // Clear Variables
        //       particleArray = [];
        //       isAnimate = false;

        //       // console.log("Cancel Animation Frame");
        //     }
        //   },
        // });
      };
    }
  }, []);
  return <canvas className="intro-canvas-logo" ref={canvasRef} {...props} />;
};

export default PictToPix;