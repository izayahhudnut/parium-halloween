"use client";
import React, { useEffect, useRef } from "react";

export interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 4200,
  maxDelay = 8700,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const createShootingStar = () => {
      const star = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      const gradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient"
      );
      const gradientId = `gradient-${Date.now()}-${Math.random()}`;

      gradient.setAttribute("id", gradientId);
      gradient.setAttribute("x1", "0%");
      gradient.setAttribute("y1", "0%");
      gradient.setAttribute("x2", "100%");
      gradient.setAttribute("y2", "0%");

      const stop1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", trailColor);
      stop1.setAttribute("stop-opacity", "0");

      const stop2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", starColor);
      stop2.setAttribute("stop-opacity", "1");

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);

      const defs = svg.querySelector("defs") || document.createElementNS("http://www.w3.org/2000/svg", "defs");
      if (!svg.querySelector("defs")) {
        svg.appendChild(defs);
      }
      defs.appendChild(gradient);

      star.setAttribute("x", "0");
      star.setAttribute("y", "0");
      star.setAttribute("width", starWidth.toString());
      star.setAttribute("height", starHeight.toString());
      star.setAttribute("fill", `url(#${gradientId})`);
      star.setAttribute("transform", "rotate(45)");

      const startX = Math.random() * svg.clientWidth;
      const startY = Math.random() * svg.clientHeight;
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;

      star.style.transform = `translate(${startX}px, ${startY}px) rotate(45deg)`;

      svg.appendChild(star);

      const duration = (Math.sqrt(startX ** 2 + startY ** 2) / speed) * 100;

      star.animate(
        [
          {
            transform: `translate(${startX}px, ${startY}px) rotate(45deg)`,
            opacity: "1",
          },
          {
            transform: `translate(${startX - svg.clientWidth}px, ${
              startY - svg.clientHeight
            }px) rotate(45deg)`,
            opacity: "0",
          },
        ],
        {
          duration: duration,
          easing: "linear",
        }
      ).onfinish = () => {
        star.remove();
        gradient.remove();
      };
    };

    const scheduleShootingStar = () => {
      createShootingStar();
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(scheduleShootingStar, delay);
    };

    scheduleShootingStar();
  }, [
    minSpeed,
    maxSpeed,
    minDelay,
    maxDelay,
    starColor,
    trailColor,
    starWidth,
    starHeight,
  ]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};