/**
 * Floppy Fish
 *
 * This is the file to kick off everything
 **/

require('angular/angular');
require('angular-route/angular-route');

var app = angular.module('floppyFish', ['ngRoute']),
    home = require('./modules/home/home');

home.init(app);
