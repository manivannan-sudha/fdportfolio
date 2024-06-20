const dataArray = [
    { id: 1, name: "Among Us - Woodland", link:"amongus.html" },
    { id: 2, name: "Earth's Rhythm - Woodland", link: "earth.html"},
    { id: 3, name: "Ankle Boots", link:"ankleboots.html" },
    { id: 4, name: "Boxy Crop Jacket", link:"boxycropjacket.html" },
    { id: 5, name: "Sneakers", link:"sneakers.html" },
    { id: 6, name: "Open Jacket", link:"openjacket.html" },
    { id: 7, name: "Safety Boots & Trousers", link: "safetyboot-trouser.html" },
    { id: 8, name: "Oxford Shoes", link: "oxfordshoe.html" },
    { id: 9, name: "Cyber Nexus Cyber" },
    { id: 10, name: "Solar Villa Solar" },
    { id: 11, name: "Neon Nexus Nook" },
    { id: 12, name: "Cosmic Citadel Cosmic" },
    { id: 13, name: "Digital Realm Zone" },
    { id: 14, name: "Galactic Haven Galactic" },
    { id: 15, name: "Stellar Hub Stellar" },
    { id: 16, name: "Among Us - Woodland", link:"amongus.html" },
    { id: 17, name: "Earth's Rhythm - Woodland", link: "earth.html"},
    { id: 18, name: "Ankle Boots", link:"ankleboots.html" },
    { id: 19, name: "Boxy Crop Jacket", link:"boxycropjacket.html" },
    { id: 20, name: "Sneakers", link:"sneakers.html" },
    { id: 21, name: "Open Jacket", link:"openjacket.html" },
    { id: 22, name: "Safety Boots & Trousers", link: "safetyboot-trouser.html" },
    { id: 23, name: "Oxford Shoes", link: "oxfordshoe.html" },
    { id: 24, name: "Cyber Nexus Cyber" },
    { id: 25, name: "Solar Villa Solar" },
    { id: 26, name: "Neon Nexus Nook" },
    { id: 27, name: "Cosmic Citadel Cosmic" },
    { id: 28, name: "Digital Realm Zone" },
    { id: 29, name: "Galactic Haven Galactic" },
    { id: 30, name: "Stellar Hub Stellar" },
  ];
  

  {
    gsap.from(".letter", 2, {
      top: "100px",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  
    gsap.to(".j", 1, {
      top: "20px",
      ease: "power2.inOut",
      delay: 3,
    });
  
    gsap.to(".header", 4, {
      scale: 2,
      ease: "power2.inOut",
      delay: 4,
    });
  
    gsap.to(".circle", 1, {
      opacity: 1,
      ease: "power1.inOut",
      delay: 4,
    });
  
    gsap.to("span", 2, {
      opacity: 0,
      ease: "power1.inOut",
      delay: 4.5,
    });
  
    gsap.to(".circle", 3, {
      scale: 10,
      ease: "power1.inOut",
      delay: 6,
      stagger: {
        amount: 0.75,
      },
    });
  
    gsap.to(".t .circle", 3, {
      top: "48px",
      left: "-180px",
      ease: "power1.inOut",
      delay: 6,
    });
  
    gsap.to(".j .circle", 3, {
      top: "50px",
      left: "-50px",
      ease: "power1.inOut",
      delay: 6,
    });
  
    gsap.to(".u .circle", 3, {
      top: "48px",
      left: "180px",
      ease: "power1.inOut",
      delay: 6.5,
    });
  
    gsap.to(".u .circle", 2, {
      opacity: 0,
      scale: 0,
      ease: "power1.inOut",
      delay: 12.5,
    });
    gsap.to(".t .circle", 2, {
      opacity: 0,
      scale: 0,
      ease: "power1.inOut",
      delay: 12.5,
    });
    gsap.to(".j .circle", 2, {
      opacity: 0,
      scale: 0,
      ease: "power1.inOut",
      delay: 12.5,
      onComplete: function () {
        setTimeout(function () {
          document.querySelector(".teaser").style.display = "none";
          document.body.style.height = "3200vh";
          document.querySelector(".main").style.display = "block";
          document.querySelector(".main").style.display = "block";
          run();
        }, 1310);
      },
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");
    const gallery = document.querySelector(".gallery");
    const noOfItems = 30;
    const radius = 900;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angleIncrement = (2 * Math.PI) / noOfItems;
  
    for (let i = 0; i < noOfItems; i++) {
      const item = document.createElement("div");
      item.className = "item";
      
      const p = document.createElement("p");
      const count = document.createElement("span");
      p.textContent = dataArray[i].name;
      count.textContent = `(${Math.floor(Math.random() * 50) + 1})`; // Random number generation
      p.appendChild(count);
      item.appendChild(p);
      gallery.appendChild(item);
  
      const angle = i * angleIncrement;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const rotation = (angle * 180) / Math.PI;
  
      gsap.set(item, {
        x: x + "px",
        y: y + "px",
        rotation: rotation,
      });
      
      //links
      item.addEventListener("click", function() {
        window.open(dataArray[i].link, '_blank');
      });


      //hovers
      item.addEventListener("mouseover", function() {
        const imgSrc = `./images/image${i + 1}.jpg`;
        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%";
        cursor.appendChild(img);
  
        gsap.to(img, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "power3.out",
        });
      });
  
      item.addEventListener("mouseout", function() {
        const imgs = cursor.getElementsByTagName("img");
        if (imgs.length) {
          const lastImg = imgs[imgs.length - 1];
          Array.from(imgs).forEach((img, index) => {
            if (img !== lastImg) {
              gsap.to(img, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "power3.out",
                onComplete: () => {
                  setTimeout(() => {
                    img.remove();
                  }, 1000);
                },
              });
            }
          });
  
          gsap.to(lastImg, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.out",
            delay: 0.25,
          });
        }
      });
    }
      function updatePosition(){
        const scrollAmount = window.scrollY * 0.0001;
        document.querySelectorAll(".item").forEach(function(item, index){
            const angle = index * angleIncrement + scrollAmount;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const rotation = (angle * 180) / Math.PI;

            gsap.to(item, {
                duration : 0.05,
                x : x + "px",
                y : y + "px",
                rotation : rotation,
                ease : "elastic.out(1, 0.3)",
            })
        })
      }
    

    updatePosition();
    document.addEventListener("scroll", updatePosition);
  });
  