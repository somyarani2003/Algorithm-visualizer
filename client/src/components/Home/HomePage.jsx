import React, { useEffect, useRef } from "react";

const HomePage = ({ setActiveView }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 64; // navbar height
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500;
        this.speedZ = Math.random() * 3 + 1;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.z -= this.speedZ;
        if (this.z <= 0) this.reset();
      }
      draw() {
        const scale = 1000 / this.z;
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;

        ctx.beginPath();
        ctx.arc(x2d, y2d, this.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${1 - this.z / 1500})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 120 }, () => new Particle());

    function animate() {
      ctx.fillStyle = "rgba(17, 24, 39, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative w-[100vw] h-[calc(100vh-64px)] overflow-hidden bg-gray-900">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />

      {/* Overlay */}
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-br from-gray-900/40 via-purple-900/30 to-black/40"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-6 text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-float">
          Algorithm
        </h1>

        <h2 className="text-4xl sm:text-6xl font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Visualizer
        </h2>

        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-300 bg-black/20 backdrop-blur-sm px-6 py-4 rounded-xl">
          Understand complex algorithms with interactive animations.
        </p>

        <div className="flex flex-col sm:flex-row mt-8 gap-4">
         

          <button
            onClick={() => setActiveView("searching")}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
          >
            Start Searching
          </button>
           <button
            onClick={() => setActiveView("sorting")}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
          >
            Start Sorting
          </button>
        </div>

        <p className="mt-12 text-gray-400 text-sm">
          Created by{" "}
          <span className="text-cyan-400 font-semibold">
            Somya Rani, Rajibul Molla & Aditya Kumar
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .animate-float {
          animation: float 3.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
