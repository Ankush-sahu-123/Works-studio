function loading() {
    var tl = gsap.timeline()
    tl.to("#loader h1", {
        delay: 0.5,
        color: "white"
    }, "whit");

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "whit");

    tl.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out"
    }, "colo");

    tl.to("#loader h1", {
        delay: 0.5,
        duration: 0.7,
        color: "black"
    }, "colo");

    tl.to("#loader", {
        display: "none"
    });

}
loading()

function loco() {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    document.querySelector("#footer .moveup").addEventListener("click", () => {
        scroll.scrollTo(0)
    })

    document.querySelector("#page1 .page1-arrow").addEventListener("click", () => {
        scroll.scrollTo("#page2")
    })

    document.querySelector("#page2 .page2-arrow").addEventListener("click", () => {
        scroll.scrollTo("#page3")
    })

    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector("#page2")
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`;
        })
    })
}
loco()
