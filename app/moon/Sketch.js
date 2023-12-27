"use client";
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const MoonSketch = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = new p5((p) => {
      let moon;
      let moonTexture;

      function setup() {
        p.createCanvas(400, 400, p.WEBGL);
        moon = new Moon(p);
      }

      function draw() {
        p.background(0);
        rotateMoon();
        moon.display();
      }

      // function preload() {
      //   // Load the texture image
      //   moonTexture = p.loadImage('/public/images/monns.png');
      // }

      function rotateMoon() {
        let angle = p.millis() * 0.0001;
        p.rotateY(angle);
        p.rotateX(angle * 0.5);
      }

      class Moon {
        constructor(p) {
          this.p = p;
          this.size = 100;
          this.craters = [];
          this.generateCraters();
        }

        generateCraters() {
          this.craters = [];
          let h = this.p.hour();
          let m = this.p.minute();
          let s = this.p.second();

          for (let i = 0; i < h; i++) {
            this.addCrater();
          }

          for (let i = 0; i < m; i++) {
            this.addCrater();
          }

          for (let i = 0; i < s; i++) {
            this.addCrater();
          }
        }

        addCrater() {
          let polar = this.p.random(0, this.p.PI);
          let azimuth = this.p.random(0, this.p.TWO_PI);

          let x = this.size * this.p.sin(polar) * this.p.cos(azimuth);
          let y = this.size * this.p.sin(polar) * this.p.sin(azimuth);
          let z = this.size * this.p.cos(polar);

          let size = this.p.random(5, 15);
          this.craters.push({ x, y, z, size });
        }

        display() {
          this.p.ambientLight(100);
          this.p.directionalLight(255, 255, 255, 1, 1, -1);

          this.p.fill(255);
          this.p.noStroke();
          // this.p.texture(moonTexture);
          this.p.sphere(this.size);

          this.p.fill(0);
          for (let i = 0; i < this.craters.length; i++) {
            let nextCrater = this.craters[(i + 1) % this.craters.length];

            this.p.push();
            this.p.translate(this.craters[i].x, this.craters[i].y, this.craters[i].z);

            let distance = this.p.dist(
              this.craters[i].x,
              this.craters[i].y,
              this.craters[i].z,
              nextCrater.x,
              nextCrater.y,
              nextCrater.z
            );
            let angle = this.p.atan2(nextCrater.y - this.craters[i].y, nextCrater.x - this.craters[i].x);

            this.p.rotateZ(angle);
            this.p.cylinder(this.craters[i].size, distance);
            this.p.pop();
          }
        }
      }
    }, sketchRef.current);

    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default MoonSketch;
