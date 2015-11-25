import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular'
import 'angular-ui-router'
import 'angular-bootstrap'

import appConfig from './app.config.js'
import './app/events/module.js'
import './index.less'

angular.module('app', ['ui.router','ui.bootstrap', 'events'])
   .config(appConfig);