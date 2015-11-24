
import angular from 'angular'
import 'angular-ui-router'


import appConfig from './app.config.js'
import './app/events/module.js'
import './index.less'

angular.module('app', ['ui.router', 'events'])
   .config(appConfig);