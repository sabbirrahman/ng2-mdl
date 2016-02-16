System.register(['angular2/router', 'angular2/platform/browser', 'angular2/core', './components/app'], function(exports_1) {
    var router_1, browser_1, core_1, app_1;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map