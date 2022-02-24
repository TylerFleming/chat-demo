export function showChat() {
    var tl = gsap.timeline();
    tl.to("#login", {height: 0, opacity: 0, duration: 1});
    tl.to("#login", {display: 'none', duration: 0.2});

}