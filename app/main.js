"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app-routes');
var http_1 = require('@angular/http');
var http_util_service_1 = require('./services/http-util-service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    http_util_service_1.HttpUtilService
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map