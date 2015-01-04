Introduction = function(elem) {
    this._base = elem;

    this._fullpage_settings = {
        //Navigation
        menu: false,
        navigation: false,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        scrollBar: true,
        easingcss3: 'ease-in-out',
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 15,
        loopHorizontal: false,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

        sectionSelector: '.section',
        slideSelector: '.slide',

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : true,
        responsive: 0,
    };
}

Introduction.create = function(ident) {
    $(ident).empty();

    $(ident).append("<div class='section'></div>");

    return new Introduction(ident);
}

Introduction.prototype.init = function() {
    $(this._base).fullpage(this._fullpage_settings);
}

Introduction.prototype.addPage = function(ident) {
    $(ident).addClass("slide");
    var page = $(ident).detach();

    page.appendTo(".section");
}
