var bkkssApplication = angular.module("bkkss", ["ui.router", "ui.bootstrap", "ngAnimate", "ngStorage", "ngMap", "bkkss.controllers", "bkkss.services", "bkkss.filters", "bkkss.directives"]);
var bkkssControllers = angular.module("bkkss.controllers", []);
var bkkssServices = angular.module("bkkss.services", []);
var bkkssFilters = angular.module("bkkss.filters", []);
var bkkssDirectives = angular.module("bkkss.directives", []);

bkkssApplication

    .run(["$localStorage", function ($localStorage) {
        // Initialise variables
        $localStorage.$default({
            Authentication: null
        });
    }])

    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $stateProvider

            .state("site", {
                url: "/Site",
                abstract: true,
                templateUrl: "pages/layout/main.html",
                controller: "LayoutCtrl"
            })

            .state("site.home", {
                url: "/Home",
                views: {
                    "mainContent": {
                        templateUrl: "pages/home/home.html",
                        controller: "HomeCtrl"
                    }
                }
            })

            .state("site.members", {
                url: "/Members",
                views: {
                    "mainContent": {
                        templateUrl: "pages/members/members.html",
                        controller: "MembersCtrl"
                    }
                }
            })

            .state("site.contact-us", {
                url: "/ContactUs",
                views: {
                    "mainContent": {
                        templateUrl: "pages/contact-us/contact-us.html",
                        controller: "ContactUsCtrl"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/Site/Home");

        $locationProvider.html5Mode(true);
    }]);
