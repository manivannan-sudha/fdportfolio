const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
      const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

      class DragScroll {
        constructor(obj) {
          this.el = document.querySelector(obj.el);
          this.wrap = document.querySelector(obj.wrap);
          this.items = document.querySelectorAll(obj.item);
          this.bar = document.querySelector(obj.bar);
          this.init();
        }

        init() {
          this.progress = 0;
          this.speed = 0;
          this.oldX = 0;
          this.x = 0;
          this.playrate = 0;

          this.bindings();
          this.events();
          this.calculate();
          this.raf();
        }

        bindings() {
          [
            "events",
            "calculate",
            "raf",
            "handleWheel",
            "handleTouchStart",
            "handleTouchMove",
            "handleTouchEnd",
          ].forEach((method) => {
            this[method] = this[method].bind(this);
          });
        }

        calculate() {
          this.progress = 0;
          this.wrapWidth = this.items[0].clientWidth * this.items.length;
          this.wrap.style.width = `${this.wrapWidth}px`;
          this.maxScroll = this.wrapWidth - this.el.clientWidth;
        }

        handleWheel(e) {
          this.progress += e.deltaY;
          this.move();
        }

        handleTouchStart(e) {
          e.preventDefault();
          this.dragging = true;
          this.startX = e.clientX || e.touches[0].clientX;
        }

        handleTouchMove(e) {
          if (!this.dragging) return false;
          const x = e.clientX || e.touches[0].clientX;
          this.progress += (this.startX - x) * 2.5;
          this.startX = x;
          this.move();
        }

        handleTouchEnd() {
          this.dragging = false;
        }

        move() {
          this.progress = clamp(this.progress, 0, this.maxScroll);
        }

        events() {
          window.addEventListener("resize", this.calculate);
          window.addEventListener("wheel", this.handleWheel);

          this.el.addEventListener("touchstart", this.handleTouchStart);
          window.addEventListener("touchmove", this.handleTouchMove);
          window.addEventListener("touchend", this.handleTouchEnd);
          window.addEventListener("mousedown", this.handleTouchStart);
          window.addEventListener("mousemove", this.handleTouchMove);
          window.addEventListener("mouseup", this.handleTouchEnd);
          document.body.addEventListener("mouseleave", this.handleTouchEnd);
        }

        raf() {
          this.x = lerp(this.x, this.progress, 0.1);
          this.playrate = this.x / this.maxScroll;
          this.wrap.style.transform = `translateX(${-this.x}px)`;
          this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;
          this.speed = Math.min(100, this.oldX - this.x);
          this.oldX = this.x;

          this.items.forEach((item) => {
            item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
            const img = item.querySelector("section");
            if (img) {
              img.style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`;
            }
          });
        }
      }

      const scroll = new DragScroll({
        el: ".slider",
        wrap: ".slider-wrapper",
        item: ".slider-item",
        bar: ".slider-progress-bar",
      });

      const animateScroll = () => {
        requestAnimationFrame(animateScroll);
        scroll.raf();
      };

      animateScroll();

      const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero indexed
    const year = currentDate.getFullYear().toString().slice(-2); // Get last two digits of year

    // Update the link text with current date
    const currentDateLink = document.getElementById('currentDateLink');
    currentDateLink.textContent = `Theju | ${day}.${month}.${year}`;