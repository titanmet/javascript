"use strict";
window.addEventListener('DOMContentLoaded', function() {

    var calc = require('./parts/calc.js');
    var form = require('./parts/form.js');
    var modal = require('./parts/modal.js');
    var slider = require('./parts/slider.js');
    var tabs = require('./parts/tabs.js');
    var timer = require('./parts/timer.js');

    calc();
    form();
    modal();
    slider();
    tabs();
    timer();

    
});