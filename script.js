function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();

//--code for navBar Animation //
navbarAnimation = () =>
{
  gsap.to("#nav-part1 svg", {
    transform: 'translateY(-100%)',
    scrollTrigger: {
      scroller: '#main',
      trigger: '#page1',
      start: "top 0",
      end: 'top -5%',
      scrub:true,
    }
  }),
    gsap.to("#nav-part2 #links", {
      transform: 'translateY(-100%)',
      opacity:0,
      scrollTrigger: {
        scroller:'#main',
        trigger: '#page1',
        start: 'top 0',
        end: 'top -5%',
        scrub:2,
      }
    })
}
navbarAnimation();
// PLAY btn on video videoconAnimation //
videoconAnimation = () =>
{
  var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter", function () {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1,
  })
});
videocon.addEventListener("mouseleave", function () {
  gsap.to(playbtn, {
    opacity: 0,
    scale: 0,
  })
});

videocon.addEventListener("mousemove", function (dets) {
  gsap.to(playbtn, {
    
    left: dets.x-50,
    top:dets.y-45,
  })
})

}

videoconAnimation();

// CHANGE THE COURSE loadingAnimation //
loadingAnimation = () =>
{
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    duration:0.8,
  })
  gsap.from("#page1 #video-container", {
    scale: 0.8,
    opacity: 0,
    delay: 1.3,
    duration:0.5,
  })
}

loadingAnimation();

//--code for page 3 hovering open//
hoveringOpen = () =>
{
  var para1 = document.querySelector(".dets");
var para2 = document.querySelector("#paragraph");

para1.addEventListener("mouseenter", function () {
  gsap.to(para2, {
    opacity: 1,
    scale: 1,
  });
})
para1.addEventListener("mouseleave", function ()
{
  gsap.to(para2, {
    opacity: 0,
    scale:0,
  })
})

var para3 = document.querySelector(".paragraph4");
var para4 = document.querySelector("#paragraph4");

para3.addEventListener("mouseenter", function () {
  gsap.to(para4, {
    opacity: 1,
    scale: 1,
  });
})
para3.addEventListener("mouseleave", function ()
{
  gsap.to(para4, {
    opacity: 0,
    scale:0,
  })
})

var para5 = document.querySelector(".paragraph7");
var para6 = document.querySelector("#paragraph7");

para5.addEventListener("mouseenter", function () {
  gsap.to(para6, {
    opacity: 1,
    scale: 1,
  })
})
para5.addEventListener("mouseleave", function () {
  gsap.to(para6, {
    opacity: 0,
    scale:0,
  })
})

}
hoveringOpen();

//--code for  background moving cursor on images//
cursorAnimation = () => {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top:dets.y
      })
  })
  //use this method for each child as child1,child2,child3,child4 otherwise you can use next method which is more productive.
// document.querySelector("#child1").addEventListener("mouseenter", function () {
//   gsap.to("#cursor", {
//     transform: 'translate(-50%,-50%) scale(1)',
    
//   })
// });
// document.querySelector("#child1").addEventListener("mouseleave", function () {
//   gsap.to("#cursor", {
//   transform: 'translate(-50%,-50%) scale(0)',
    
//   })
// })
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
    transform: 'translate(-50%,-50%) scale(1)',
      })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
    transform: 'translate(-50%,-50%) scale(0)',
        
      })
    })
  })
}
cursorAnimation();