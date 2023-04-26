var nameSpace = O2KL || {};

(function() {
    "use strict";

    var timeline;
    var wrapper, clickThrough, logo, copy, cta, width, height, ids;

    nameSpace.init = function() {
        // Initialize any variables here
        ids = [];

        width = 300;
        height = 250;

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
        TweenMax.set(["#copy-1"], { x: 0, y: 0, autoAlpha: 1 });
        TweenMax.set(["#copy-2", "#copy-3"], { x: -width, y: 0, autoAlpha: 0 });
        // TweenMax.set(["#line"], { x: 0, y: 1, autoAlpha: 1 });
        TweenMax.set(
            [

                "#line-1",
                "#line-2",
                "#line-3",
                "#line-4",
                "#line-5"

            ], {
                x: 0,
                width: 0,
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
                transformOrigin: "20% 90%",
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

            .to(
            ["#copy-2"],
            1, {
                transformPerspective: 400,
                autoAlpha: 1,
                x: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: Power0.easeInOut
            },
            "+=1"
        )

        .set("#line-1", { autoAlpha: 1 })

        .to(
                ["#line-1"],
                0.5, {
                    transformPerspective: 400,
                    autoAlpha: 1,
                    width: 105.71,
                    force3D: true,
                    rotationZ: 0.01,
                    ease: Power0.easeInOut
                },
                "+=0.5"
            )
            .set("#line-2", { autoAlpha: 1 })

        .to(
            ["#line-2"],
            0.75, {
                transformPerspective: 400,
                autoAlpha: 1,
                width: 123.65,
                force3D: true,
                rotationZ: 0.01,
                ease: Power0.easeInOut
            },
            "+=0.25"
        )

        .set("#line-3", { autoAlpha: 1 })

        .to(
            ["#line-3"],
            0.5, {
                transformPerspective: 400,
                autoAlpha: 1,
                width: 109.25,
                force3D: true,
                rotationZ: 0.01,
                ease: Power0.easeInOut
            },
            "+=0.25"
        )

        .set("#line-4", { autoAlpha: 1 })

        .to(
                ["#line-4"],
                1, {
                    transformPerspective: 400,
                    autoAlpha: 1,
                    width: 42.99,
                    force3D: true,
                    rotationZ: 0.01,
                    ease: Power0.easeInOut
                },
                "+=0.25"
            )
            .set("#line-5", { autoAlpha: 1 })

        .to(
            ["#line-5"],
            1, {
                transformPerspective: 400,
                autoAlpha: 1,
                width: 109.25,
                force3D: true,
                rotationZ: 0.01,
                ease: Power0.easeInOut
            },
            "+=0.25"
        )

        .to(
            ["#copy-2"],
            0.5, {
                transformPerspective: 400,
                autoAlpha: 0,
                x: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: Power0.easeInOut
            }
        )

        .to(
            ["#copy-3"],
            1, {
                transformPerspective: 400,
                autoAlpha: 1,
                x: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: Power0.easeInOut
            },
            "+=0.5"
        )

        .to(
            ["#cta-bg-wipe"],
            1, {
                x: "100%",
                transformPerspective: 400,
                autoAlpha: 1,
                force3D: true,
                rotationZ: 0.01,
                ease: Power1.easeInOut,
            }, "+=0.5"
        )

        // .to(
        //     [".cta-ltr"],
        //     0.5, {
        //         fill: "rgba(255,255,255, 1)",
        //     }, "-=0.5"
        // )

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
    if (count < 2) {
        console.log(count);
        count++;
        O2KL.init();
    }
}
//