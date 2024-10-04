let crsr = document.querySelector('#cursor');

let crsrb = document.querySelector('#cursor-blur');



document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+'px'
  crsrb.style.left = dets.x - 50 +'px'
  crsrb.style.top = dets.y - 50 +'px'
})

let h4all = document.querySelectorAll('#nav h4');

h4all.forEach((elem)=> {
  elem.addEventListener("mouseenter", ()=> {
    crsr.style.scale= 3;
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = 'transparent'
  })
})
h4all.forEach((elem)=> {
  elem.addEventListener("mouseleave", ()=> {
    crsr.style.scale= 1;
    crsr.style.border = "0px solid #95c11e"
    crsr.style.backgroundColor = '#95c11e' 
  })
})




document.addEventListener("DOMContentLoaded", function() {
    gsap.to('#nav', {
      backgroundColor: "#000",
      height: '90px',
      duration: 0.5,
      scrollTrigger: {
        trigger: "#nav",
        scroll: 'body',
        start: 'top -10%',
        end: '-11%',
        scrub: 1,
      }
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    gsap.to('#main', {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        markers:true,
        start: 'top -30%',
        end: 'top -80%',
        scrub: 2,
      }
    });
  });

  gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity: 0,
    duration:1,
    scrollTrigger:{
      trigger: "#about-us",
      scroller: "body",
      markers: "true",
      start: 'top 90%',
      end: "85%",
      scrub: 1,
    }
  })



  gsap.from(".card", {
    y:50,
    opacity: 0,
    duration:1,
    scrollTrigger:{
      trigger: ".card",
      start: 'top 150%',
      end: "145%",
      scrub: 1,
    }
  })
