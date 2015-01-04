Introduction = function(elem) {
    this._base = elem;

    this._slide_enter_listener = [];
    this._slide_leave_listener = [];

    var that = this;

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

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            that._slide_enter_listener.forEach(function(func) {
                func(slideIndex, slideAnchor);
            });
        },

        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            that._slide_leave_listener.forEach(function(func) {
                func(slideIndex, direction);
            });
        }
    };
}

Introduction.create = function(ident) {
    $(ident).empty();

    $(ident).addClass("fullpage");

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

Introduction.prototype.next = function() {
    $(this._base).fullpage.moveSlideRight();
}

Introduction.prototype.previous = function() {
    $(this._base).fullpage.moveSlideLeft();
}

Introduction.prototype.registerOnSlideLeaveListener = function(callback) {
    this._slide_leave_listener.push(callback);
}

Introduction.prototype.registerOnSlideEnterListener = function(callback) {
    this._slide_enter_listener.push(callback);
}
