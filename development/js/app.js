var bkkssApplication = angular.module("bkkss", ["ui.router", "ui.bootstrap", "ngAnimate", "bkkss.controllers", "bkkss.services", "bkkss.filters", "bkkss.directives"]);
var bkkssControllers = angular.module("bkkss.controllers", []);
var bkkssServices = angular.module("bkkss.services", []);
var bkkssFilters = angular.module("bkkss.filters", []);
var bkkssDirectives = angular.module("bkkss.directives", []);

bkkssApplication

    .run(["$rootScope", function ($rootScope) {
        $rootScope.$on("$stateChangeStart", function (event, toState) {
            $rootScope.sectionTitle = toState.title;
            $rootScope.pageTitle = toState.title + " - 佛教覺光法師中學校友會";
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
                title: "最新消息",
                views: {
                    "mainContent": {
                        templateUrl: "pages/home/home.html",
                        controller: "HomeCtrl"
                    }
                }
            })

            .state("site.members", {
                url: "/Members",
                title: "歷年成員名單",
                views: {
                    "mainContent": {
                        templateUrl: "pages/members/members.html",
                        controller: "MembersCtrl"
                    }
                }
            })

            .state("site.galleries", {
                url: "/Galleries",
                title: "我們的相冊",
                views: {
                    "mainContent": {
                        templateUrl: "pages/galleries/galleries.html",
                        controller: "GalleriesCtrl"
                    }
                }
            })

            .state("site.contact-us", {
                url: "/ContactUs",
                title: "聯絡我們",
                views: {
                    "mainContent": {
                        templateUrl: "pages/contact-us/contact-us.html"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/Site/Home");

        $locationProvider.html5Mode(true);
    }]);
