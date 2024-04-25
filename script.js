function loco(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`
    document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger: "#page2>h1>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom top",
        scrub:0.5,
    },
    stagger:0.2,
    color:"white"
})

function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./Frames/frames00007.png
  ./Frames/frames00010.png
  ./Frames/frames00013.png
  ./Frames/frames00016.png
  ./Frames/frames00019.png
  ./Frames/frames00022.png
  ./Frames/frames00025.png
  ./Frames/frames00028.png
  ./Frames/frames00031.png
  ./Frames/frames00034.png
  ./Frames/frames00037.png
  ./Frames/frames00040.png
  ./Frames/frames00043.png
  ./Frames/frames00046.png
  ./Frames/frames00049.png
  ./Frames/frames00052.png
  ./Frames/frames00055.png
  ./Frames/frames00058.png
  ./Frames/frames00061.png
  ./Frames/frames00064.png
  ./Frames/frames00067.png
  ./Frames/frames00070.png
  ./Frames/frames00073.png
  ./Frames/frames00076.png
  ./Frames/frames00079.png
  ./Frames/frames00082.png
  ./Frames/frames00085.png
  ./Frames/frames00088.png
  ./Frames/frames00091.png
  ./Frames/frames00094.png
  ./Frames/frames00097.png
  ./Frames/frames00100.png
  ./Frames/frames00103.png
  ./Frames/frames00106.png
  ./Frames/frames00109.png
  ./Frames/frames00112.png
  ./Frames/frames00115.png
  ./Frames/frames00118.png
  ./Frames/frames00121.png
  ./Frames/frames00124.png
  ./Frames/frames00127.png
  ./Frames/frames00130.png
  ./Frames/frames00133.png
  ./Frames/frames00136.png
  ./Frames/frames00139.png
  ./Frames/frames00142.png
  ./Frames/frames00145.png
  ./Frames/frames00148.png
  ./Frames/frames00151.png
  ./Frames/frames00154.png
  ./Frames/frames00157.png
  ./Frames/frames00160.png
  ./Frames/frames00163.png
  ./Frames/frames00166.png
  ./Frames/frames00169.png
  ./Frames/frames00172.png
  ./Frames/frames00175.png
  ./Frames/frames00178.png
  ./Frames/frames00181.png
  ./Frames/frames00184.png
  ./Frames/frames00187.png
  ./Frames/frames00190.png
  ./Frames/frames00193.png
  ./Frames/frames00196.png
  ./Frames/frames00199.png
  ./Frames/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()


var clutter2 = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter2 += `<span>${dets}</span>`
    document.querySelector("#page4>h1").innerHTML = clutter2;
})
gsap.to("#page4>h1>span",{
    scrollTrigger:{
        trigger: "#page4>h1>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom top",
        scrub:0.5,
    },
    stagger:0.2,
    color:"white"
})

function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  function files(index) {
  var data = `
 ./Bridges/bridges00004.png
./Bridges/bridges00007.png
./Bridges/bridges00010.png
./Bridges/bridges00013.png
./Bridges/bridges00016.png
./Bridges/bridges00019.png
./Bridges/bridges00022.png
./Bridges/bridges00025.png
./Bridges/bridges00028.png
./Bridges/bridges00031.png
./Bridges/bridges00034.png
./Bridges/bridges00037.png
./Bridges/bridges00040.png
./Bridges/bridges00043.png
./Bridges/bridges00046.png
./Bridges/bridges00049.png
./Bridges/bridges00052.png
./Bridges/bridges00055.png
./Bridges/bridges00058.png
./Bridges/bridges00061.png
./Bridges/bridges00064.png
./Bridges/bridges00067.png
./Bridges/bridges00070.png
./Bridges/bridges00073.png
./Bridges/bridges00076.png
./Bridges/bridges00079.png
./Bridges/bridges00082.png
./Bridges/bridges00085.png
./Bridges/bridges00088.png
./Bridges/bridges00091.png
./Bridges/bridges00094.png
./Bridges/bridges00097.png
./Bridges/bridges00100.png
./Bridges/bridges00103.png
./Bridges/bridges00106.png
./Bridges/bridges00109.png
./Bridges/bridges00112.png
./Bridges/bridges00115.png
./Bridges/bridges00118.png
./Bridges/bridges00121.png
./Bridges/bridges00124.png
./Bridges/bridges00127.png
./Bridges/bridges00130.png
./Bridges/bridges00133.png
./Bridges/bridges00136.png
./Bridges/bridges00139.png
./Bridges/bridges00142.png
./Bridges/bridges00145.png
./Bridges/bridges00148.png
./Bridges/bridges00151.png
./Bridges/bridges00154.png
./Bridges/bridges00157.png
./Bridges/bridges00160.png
./Bridges/bridges00163.png
./Bridges/bridges00166.png
./Bridges/bridges00169.png
./Bridges/bridges00172.png
./Bridges/bridges00175.png
./Bridges/bridges00178.png
./Bridges/bridges00181.png
./Bridges/bridges00184.png
./Bridges/bridges00187.png
./Bridges/bridges00190.png
./Bridges/bridges00193.png
./Bridges/bridges00196.png
./Bridges/bridges00199.png
./Bridges/bridges00202.png
  `;
  return data.split("\n")[index];
  }
  
  const frameCount = 67;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
  }
  canvas1()
  
  var clutter3 = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter3 += `<span>${dets}</span>`
    document.querySelector("#page6>h1").innerHTML = clutter3;
})
gsap.to("#page6>h1>span",{
    scrollTrigger:{
        trigger: "#page6>h1>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom top",
        scrub:0.5,
    },
    stagger:0.2,
    color:"white"
})

function canvas2(){
    const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  function files(index) {
  var data = `
  
  https://thisismagma.com/assets/home/lore/seq/1.webp?2
  https://thisismagma.com/assets/home/lore/seq/2.webp?2
  https://thisismagma.com/assets/home/lore/seq/3.webp?2
  https://thisismagma.com/assets/home/lore/seq/4.webp?2
  https://thisismagma.com/assets/home/lore/seq/5.webp?2
  https://thisismagma.com/assets/home/lore/seq/6.webp?2
  https://thisismagma.com/assets/home/lore/seq/7.webp?2
  https://thisismagma.com/assets/home/lore/seq/8.webp?2
  https://thisismagma.com/assets/home/lore/seq/9.webp?2
  https://thisismagma.com/assets/home/lore/seq/10.webp?2
  https://thisismagma.com/assets/home/lore/seq/11.webp?2
  https://thisismagma.com/assets/home/lore/seq/12.webp?2
  https://thisismagma.com/assets/home/lore/seq/13.webp?2
  https://thisismagma.com/assets/home/lore/seq/14.webp?2
  https://thisismagma.com/assets/home/lore/seq/15.webp?2
  https://thisismagma.com/assets/home/lore/seq/16.webp?2
  https://thisismagma.com/assets/home/lore/seq/17.webp?2
  https://thisismagma.com/assets/home/lore/seq/18.webp?2
  https://thisismagma.com/assets/home/lore/seq/19.webp?2
  https://thisismagma.com/assets/home/lore/seq/20.webp?2
  https://thisismagma.com/assets/home/lore/seq/21.webp?2
  https://thisismagma.com/assets/home/lore/seq/22.webp?2
  https://thisismagma.com/assets/home/lore/seq/23.webp?2
  https://thisismagma.com/assets/home/lore/seq/24.webp?2
  https://thisismagma.com/assets/home/lore/seq/25.webp?2
  https://thisismagma.com/assets/home/lore/seq/26.webp?2
  https://thisismagma.com/assets/home/lore/seq/27.webp?2
  https://thisismagma.com/assets/home/lore/seq/28.webp?2
  https://thisismagma.com/assets/home/lore/seq/29.webp?2
  https://thisismagma.com/assets/home/lore/seq/30.webp?2
  https://thisismagma.com/assets/home/lore/seq/31.webp?2
  https://thisismagma.com/assets/home/lore/seq/32.webp?2
  https://thisismagma.com/assets/home/lore/seq/33.webp?2
  https://thisismagma.com/assets/home/lore/seq/34.webp?2
  https://thisismagma.com/assets/home/lore/seq/35.webp?2
  https://thisismagma.com/assets/home/lore/seq/36.webp?2
  https://thisismagma.com/assets/home/lore/seq/37.webp?2
  https://thisismagma.com/assets/home/lore/seq/38.webp?2
  https://thisismagma.com/assets/home/lore/seq/39.webp?2
  https://thisismagma.com/assets/home/lore/seq/40.webp?2
  https://thisismagma.com/assets/home/lore/seq/41.webp?2
  https://thisismagma.com/assets/home/lore/seq/42.webp?2
  https://thisismagma.com/assets/home/lore/seq/43.webp?2
  https://thisismagma.com/assets/home/lore/seq/44.webp?2
  https://thisismagma.com/assets/home/lore/seq/45.webp?2
  https://thisismagma.com/assets/home/lore/seq/46.webp?2
  https://thisismagma.com/assets/home/lore/seq/47.webp?2
  https://thisismagma.com/assets/home/lore/seq/48.webp?2
  https://thisismagma.com/assets/home/lore/seq/49.webp?2
  https://thisismagma.com/assets/home/lore/seq/50.webp?2
  https://thisismagma.com/assets/home/lore/seq/51.webp?2
  https://thisismagma.com/assets/home/lore/seq/52.webp?2
  https://thisismagma.com/assets/home/lore/seq/53.webp?2
  https://thisismagma.com/assets/home/lore/seq/54.webp?2
  https://thisismagma.com/assets/home/lore/seq/55.webp?2
  https://thisismagma.com/assets/home/lore/seq/56.webp?2
  https://thisismagma.com/assets/home/lore/seq/57.webp?2
  https://thisismagma.com/assets/home/lore/seq/58.webp?2
  https://thisismagma.com/assets/home/lore/seq/59.webp?2
  https://thisismagma.com/assets/home/lore/seq/60.webp?2
  https://thisismagma.com/assets/home/lore/seq/61.webp?2
  https://thisismagma.com/assets/home/lore/seq/62.webp?2
  https://thisismagma.com/assets/home/lore/seq/63.webp?2
  https://thisismagma.com/assets/home/lore/seq/64.webp?2
  https://thisismagma.com/assets/home/lore/seq/65.webp?2
  https://thisismagma.com/assets/home/lore/seq/66.webp?2
  https://thisismagma.com/assets/home/lore/seq/67.webp?2
  https://thisismagma.com/assets/home/lore/seq/68.webp?2
  https://thisismagma.com/assets/home/lore/seq/69.webp?2
  https://thisismagma.com/assets/home/lore/seq/70.webp?2
  https://thisismagma.com/assets/home/lore/seq/71.webp?2
  https://thisismagma.com/assets/home/lore/seq/72.webp?2
  https://thisismagma.com/assets/home/lore/seq/73.webp?2
  https://thisismagma.com/assets/home/lore/seq/74.webp?2
  https://thisismagma.com/assets/home/lore/seq/75.webp?2
  https://thisismagma.com/assets/home/lore/seq/76.webp?2
  https://thisismagma.com/assets/home/lore/seq/77.webp?2
  https://thisismagma.com/assets/home/lore/seq/78.webp?2
  https://thisismagma.com/assets/home/lore/seq/79.webp?2
  https://thisismagma.com/assets/home/lore/seq/80.webp?2
  https://thisismagma.com/assets/home/lore/seq/81.webp?2
  https://thisismagma.com/assets/home/lore/seq/82.webp?2
  https://thisismagma.com/assets/home/lore/seq/83.webp?2
  https://thisismagma.com/assets/home/lore/seq/84.webp?2
  https://thisismagma.com/assets/home/lore/seq/85.webp?2
  https://thisismagma.com/assets/home/lore/seq/86.webp?2
  https://thisismagma.com/assets/home/lore/seq/87.webp?2
  https://thisismagma.com/assets/home/lore/seq/88.webp?2
  https://thisismagma.com/assets/home/lore/seq/89.webp?2
  https://thisismagma.com/assets/home/lore/seq/90.webp?2
  https://thisismagma.com/assets/home/lore/seq/91.webp?2
  https://thisismagma.com/assets/home/lore/seq/92.webp?2
  https://thisismagma.com/assets/home/lore/seq/93.webp?2
  https://thisismagma.com/assets/home/lore/seq/94.webp?2
  https://thisismagma.com/assets/home/lore/seq/95.webp?2
  https://thisismagma.com/assets/home/lore/seq/96.webp?2
  https://thisismagma.com/assets/home/lore/seq/97.webp?2
  https://thisismagma.com/assets/home/lore/seq/98.webp?2
  https://thisismagma.com/assets/home/lore/seq/99.webp?2
  https://thisismagma.com/assets/home/lore/seq/100.webp?2
  https://thisismagma.com/assets/home/lore/seq/101.webp?2
  https://thisismagma.com/assets/home/lore/seq/102.webp?2
  https://thisismagma.com/assets/home/lore/seq/103.webp?2
  https://thisismagma.com/assets/home/lore/seq/104.webp?2
  https://thisismagma.com/assets/home/lore/seq/105.webp?2
  https://thisismagma.com/assets/home/lore/seq/106.webp?2
  https://thisismagma.com/assets/home/lore/seq/107.webp?2
  https://thisismagma.com/assets/home/lore/seq/108.webp?2
  https://thisismagma.com/assets/home/lore/seq/109.webp?2
  https://thisismagma.com/assets/home/lore/seq/110.webp?2
  https://thisismagma.com/assets/home/lore/seq/111.webp?2
  https://thisismagma.com/assets/home/lore/seq/112.webp?2
  https://thisismagma.com/assets/home/lore/seq/113.webp?2
  https://thisismagma.com/assets/home/lore/seq/114.webp?2
  https://thisismagma.com/assets/home/lore/seq/115.webp?2
  https://thisismagma.com/assets/home/lore/seq/116.webp?2
  https://thisismagma.com/assets/home/lore/seq/117.webp?2
  https://thisismagma.com/assets/home/lore/seq/118.webp?2
  https://thisismagma.com/assets/home/lore/seq/119.webp?2
  https://thisismagma.com/assets/home/lore/seq/120.webp?2
  https://thisismagma.com/assets/home/lore/seq/121.webp?2
  https://thisismagma.com/assets/home/lore/seq/122.webp?2
  https://thisismagma.com/assets/home/lore/seq/123.webp?2
  https://thisismagma.com/assets/home/lore/seq/124.webp?2
  https://thisismagma.com/assets/home/lore/seq/125.webp?2
  https://thisismagma.com/assets/home/lore/seq/126.webp?2
  https://thisismagma.com/assets/home/lore/seq/127.webp?2
  https://thisismagma.com/assets/home/lore/seq/128.webp?2
  https://thisismagma.com/assets/home/lore/seq/129.webp?2
  https://thisismagma.com/assets/home/lore/seq/130.webp?2
  https://thisismagma.com/assets/home/lore/seq/131.webp?2
  https://thisismagma.com/assets/home/lore/seq/132.webp?2
  https://thisismagma.com/assets/home/lore/seq/133.webp?2
  https://thisismagma.com/assets/home/lore/seq/134.webp?2
  https://thisismagma.com/assets/home/lore/seq/135.webp?2
  https://thisismagma.com/assets/home/lore/seq/136.webp?2
  
  `;
  return data.split("\n")[index];
  }
  
  const frameCount = 136;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page7`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: "#page7",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
  }
  canvas2()
  

  gsap.to("#page7-cir",{
    scrollTrigger:{
        trigger:"#page7-cir",
        scroller:"#main",
        start:"top bottom",
        end:"bottom top",
        scrub:2,
    },
    scale:3,
    duration:2
  })
  gsap.to("#page7-cir-in",{
    scrollTrigger:{
        trigger:"#page7-cir-in",
        scroller:"#main",
        start:"top bottom",
        end:"bottom top",
        scrub:1,
    },
   backgroundColor:"#093CCD75"
  })

  gsap.from("#page8-bottom h3,#page8-bottom button ",{
    opacity:0,
 stagger:0.4,
 duration:5,
 scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    // markers:true,
    start:"top 30%",
    end:"top 50%",
    scrub:3
 },
});

gsap.from("#page9-left",{
    opacity:0,
//  stagger:0.4,
 duration:5,
 scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"bottom 60%",
    scrub:3
 },
});

gsap.from(".page10-ryt-in",{
    opacity:0.2,
 stagger:0.4,
 duration:2,
 scrollTrigger:{
    trigger:"#page10-ryt",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"bottom 80%",
    scrub:2
 },
});



gsap.from("#page11>h1",{
    opacity:0.0,
//  stagger:0.4,
 duration:1,
 scrollTrigger:{
    trigger:"#page11",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 50%",
    scrub:2
 },
});
gsap.from(".page11-ryt h3,.page11-ryt p,.page11-ryt button",{
    opacity:0.0,
 stagger:0.4,
 duration:1,
 scrollTrigger:{
    trigger:".page11-ryt",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 30%",
    scrub:2
 },
});

gsap.from("#page12-in h3,#page12-in p",{
    opacity:0.0,
 stagger:0.4,
 duration:1,
 scrollTrigger:{
    trigger:"#page12-in",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 30%",
    scrub:2
 },
});

gsap.from("#page13 h3,#page13 button",{
    opacity:0.0,
 stagger:0.4,
 duration:1,
 scrollTrigger:{
    trigger:"#page13",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 30%",
    scrub:2
 },
});

function canvas3(){
  const canvas = document.querySelector("#page10-2>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0001.webp
./Spin2/0002.webp
./Spin2/0003.webp
./Spin2/0004.webp
./Spin2/0005.webp
./Spin2/0006.webp
./Spin2/0007.webp
./Spin2/0008.webp
./Spin2/0009.webp
./Spin2/0010.webp
./Spin2/0011.webp
./Spin2/0012.webp
./Spin2/0013.webp
./Spin2/0014.webp
./Spin2/0015.webp
./Spin2/0016.webp
./Spin2/0017.webp
./Spin2/0018.webp
./Spin2/0019.webp
./Spin2/0020.webp
./Spin2/0021.webp
./Spin2/0022.webp
./Spin2/0023.webp
./Spin2/0024.webp
./Spin2/0025.webp
./Spin2/0026.webp
./Spin2/0027.webp
./Spin2/0028.webp
./Spin2/0029.webp
./Spin2/0030.webp
./Spin2/0031.webp
./Spin2/0032.webp
./Spin2/0033.webp
./Spin2/0034.webp
./Spin2/0035.webp
./Spin2/0036.webp
./Spin2/0037.webp
./Spin2/0038.webp
./Spin2/0039.webp
./Spin2/0040.webp
./Spin2/0041.webp
./Spin2/0042.webp
./Spin2/0043.webp
./Spin2/0044.webp
./Spin2/0045.webp
./Spin2/0046.webp
./Spin2/0047.webp
./Spin2/0048.webp
./Spin2/0049.webp
./Spin2/0050.webp
./Spin2/0051.webp
./Spin2/0052.webp
./Spin2/0053.webp
./Spin2/0054.webp
./Spin2/0055.webp
./Spin2/0056.webp
./Spin2/0057.webp
./Spin2/0058.webp
./Spin2/0059.webp
./Spin2/0060.webp
./Spin2/0061.webp
./Spin2/0062.webp
./Spin2/0063.webp
./Spin2/0064.webp
./Spin2/0065.webp
./Spin2/0066.webp
./Spin2/0067.webp
./Spin2/0068.webp
./Spin2/0069.webp
./Spin2/0070.webp
./Spin2/0071.webp
./Spin2/0072.webp
./Spin2/0073.webp
./Spin2/0074.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp
./Spin2/0075.webp


`;
return data.split("\n")[index];
}

const frameCount = 105;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page10-2`,
  start: `top bottom`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page10-2",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas3()

gsap.to("#page10-2-txt",{
  scrollTrigger:{
      trigger:"#page10-2",
      scroller:"#main",
      // markers:true,
      start:"top bottom",
      end:"bottom top",
      scrub:2,
  },
  // transform: y
  // scale:3,
  // duration:2
})
