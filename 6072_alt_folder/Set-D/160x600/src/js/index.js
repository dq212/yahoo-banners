var nameSpace = O2KL || {};

(function() {
    "use strict";

    var timeline;
    var wrapper, clickThrough, logo, copy, cta, width, height, ids;

    nameSpace.init = function() {
        // Initialize any variables here
        ids = [];

        width = 160;
        height = 600;

        //SET IDs IN DOM TO GLOBAL VARIABLES
        var allElements = document.getElementsByTagName("*");
        //grabs all elements and makes them variables
        for (var q = 0; q < allElements.length; q++) {
            var el = allElements[q];
            if (el.id) {
                window[el.id] = document.getElementById(el.id);
                //separates what we don't want to hide initially
                if (
                    el.id !== "wrapper" &&
                    el.id !== "click_through" &&
                    el.id !== "bg"
                ) {
                    ids.push(el);
                }
            }
        }

        // TweenMax.set("#allNums", { autoAlpha: 0 });
        TweenMax.set(["#copy-1", "#logo-bg", "#logo", "#cta", "#code", "#img-1"], { x: -width, y: 0, autoAlpha: 0 });
        // TweenMax.set(["#copy-2", "#copy-3"], { x: -width, y: 0, autoAlpha: 0 });
        // TweenMax.set(["#line"], { x: 0, y: 1, autoAlpha: 1 });
        TweenMax.set(
            [

                "#line-1",
                "#line-2",
                "#line-3",
                "#line-4",
                "#line-5",
                "#line-6"

            ], {
                x: -width,
                autoAlpha: 0,
            }
        );
        // TweenMax.set(['#cta', '#code'], { autoAlpha: 0 });
        wrapper = nameSpace.$("#wrapper");
        clickThrough = document.getElementById("click_through");
        cta = nameSpace.$("#cta");
        /* end added by me */

        wrapper.addClass("show");

        nameSpace.initClickTag();
        nameSpace.initAnimation();

        if (nameSpace.useFallback()) {
            nameSpace.injectFallback();
        } else {
            nameSpace.startAnimation();
        }

        click_through.onmouseover = function() {
            TweenMax.to("#cta", 0.1, {
                scale: 1.05,
                y: 0,
                transformOrigin: "50% 90%",
                rotationZ: 0.01,
                force3D: true,
                transformPerspective: 400,
            });
        };

        click_through.onmouseout = function() {
            TweenMax.to("#cta", 0.1, {
                scale: 1,
                force3D: true,
                z: 0.01,
                rotationZ: 0.01,
                transformPerspective: 400,
                y: 0,
            });
        };
    };

    nameSpace.initClickTag = function() {
        clickThrough.onclick = function() {
            window.open(window.clickTag);
        };
    };

    nameSpace.injectFallback = function() {
        var body = document.body;

        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        var anchor = document.createElement("a");
        anchor.style.cursor = "pointer";

        var img = new Image();
        img.src = "./img/static.jpg";

        anchor.appendChild(img);
        anchor.onclick = function() {
            window.open(window.clickTag);
        };
        document.body.appendChild(anchor);
    };

    nameSpace.initAnimation = function() {
        // TweenMax can be used to set css
        // It will even take care of browser prefixes
        // TweenMax.set(logo, {x:100, y:50, opacity:0});

        timeline = new TimelineMax({
            delay: 0.5,
            onComplete: nameSpace.onAnimationComplete,
        });

        timeline.pause();

        timeline
            .fromTo(
                ["#logo-bg"],
                1, { x: "-15%" }, {
                    transformPerspective: 400,
                    autoAlpha: 1,
                    x: 0,
                    force3D: true,
                    rotationZ: 0.01,
                    ease: Power1.easeOut
                }
            )

        .fromTo(
            ["#img-1"],
            1, { x: "-15%" }, {
                transformPerspective: 400,
                autoAlpha: 1,
                x: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: Power1.easeOut
            },
            "-=0.75"
        )

        .to(
                ["#logo", "#cta"],
                1, {
                    transformPerspective: 400,
                    autoAlpha: 1,
                    x: 0,
                    force3D: true,
                    rotationZ: 0.01,
                    ease: Power1.easeOut
                },
                "-=0.75"
            )
            .to(
                ["#copy-1", "#code"],
                1, {
                    transformPerspective: 400,
                    autoAlpha: 1,
                    x: 0,
                    force3D: true,
                    rotationZ: 0.01,
                    ease: Power1.easeOut
                },
                "-=0.75"
            )
            .staggerTo(
                ["#line-1", '#line-2', "#line-3", "#line-4", "#line-5", "#line-6"],
                1, {
                    transformPerspective: 400,
                    autoAlpha: 1,
                    x: 0,
                    force3D: true,
                    rotationZ: 0.01,
                    ease: Power1.easeOut,
                    stagger: 0.2
                }, "-=0.75"

            )
            // gsap.delayedCall(5, loop)

    };

    // function traceTime(){
    // 	console.log("slideTime: " + timeline.time());
    // }

    // nameSpace.hideBg = function () {
    //   TweenMax.to('#bg', 0, { autoAlpha: 0 });
    // };

    nameSpace.startAnimation = function() {
        // Code for animation
        timeline.play();
        // startBgImg();

        // TweenMax.delayedCall(	7.5, loop);
    };

    nameSpace.onAnimationComplete = function() {
        // Log duration of timeline
        console.log("Animation Duration: " + timeline.time() + "s");

        // Show a CTA or any animations outside main timeline
        // TweenMax.from( cta, 0.4, { y: '110%' } );
        // TweenMax.to( cta, 0.4, { opacity: 1 } );
    };
})();

var count = 1;

function loop() {
    if (count < 3) {
        console.log(count, "in the loop");
        count++;
        O2KL.init();
    }
}
//