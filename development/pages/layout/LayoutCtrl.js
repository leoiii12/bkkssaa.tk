bkkssControllers.controller("LayoutCtrl", ["$scope", "$rootScope", "$uibModal", "$window", function ($scope, $rootScope, $uibModal, $window) {
    $scope.isOpened = false;

    $scope.menu = [
        {title: "主頁", path: "site.home"},
        {title: "歷年成員名單", path: "site.members"},
        {title: "聯絡我們", path: "site.contact-us"}
    ];

    $rootScope.$on("$viewContentLoaded", function (event, viewConfig) {
        $scope.isOpened = false;
        $window.scrollTo(0, 0);
    });

    // Public functions

    // Private functions

}]);