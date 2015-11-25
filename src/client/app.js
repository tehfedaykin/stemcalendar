import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular'
import 'angular-ui-router'
import 'angular-bootstrap'
import 'angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js'
import 'angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css'

import appConfig from './app.config.js'
import './app/events/module.js'
import './app/home/controllers.js'

import './index.less'

angular.module('app', ['ui.router','ui.bootstrap', 
   'events', 'calendar.controllers'])
   .config(appConfig);