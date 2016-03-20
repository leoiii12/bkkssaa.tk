bkkssControllers.controller("HomeCtrl", ["$scope", "$http", "$uibModal", function ($scope, $http, $uibModal) {

    $http({
        method: "GET",
        url: "/json/news.json"
    }).then(function (response) {
        var data = response.data;

        $scope.newsItems = data;
    });

    // Public functions

    $scope.openNewsItemModal = openNewsItemModal;

    // Private functions

    function openNewsItemModal(newsItem) {
        var modal = $uibModal.open({
            animation: true,
            templateUrl: "pages/modals/news-item.html",
            size: "lg",
            controller: "NewsItemCtrl",
            resolve: {
                newsItem: function () {
                    return newsItem;
                }
            }
        });
    }

}]);