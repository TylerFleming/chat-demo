export function showChat() {
    var tl = gsap.timeline();
    tl.to(".login__photo", {opacity: 0, duration: 0.25});
    tl.to(".login__name", {opacity: 0, duration: 0.25});
    tl.to(".login__button", {opacity: 0, duration: 0.25});
    tl.to("#login", {opacity: 0, duration: 0.50});
    tl.to("#login", {display: 'none'});

}