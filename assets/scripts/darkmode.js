function toggle() {
    var bd = document.body;
    bd.classList.toggle("dark-mode");
    var prm = $(".primary-dark").map(function() {
        this.classList.toggle("primary");
        return 0;
    }).get();
    var home_a = $(".home").find(".data").find("a").map(function() {
        this.classList.toggle("dark-home-anchor");
        return 0;
    }).get();
    var et = $(".entry").map(function() {
        this.classList.toggle("entry-dark");
        return 0;
    }).get();
    var et = $(".footer-dark").map(function() {
        this.classList.toggle("footer-white");
        return 0;
    }).get();
    var cvc = $(".cv-card").map(function() {
        this.classList.toggle("cv-card-dark");
        return 0;
    }).get();
    var cvc = $(".cv-card").find("button").map(function() {
        this.classList.toggle("darkcvbtn");
        return 0;
    }).get();
}