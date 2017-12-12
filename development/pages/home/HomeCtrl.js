bkkssControllers.controller("HomeCtrl", ["$scope", "$http", "$uibModal", function ($scope, $http, $uibModal) {

    $http({
        method: "GET",
        url: "/json/galleries.json"
    }).then(function (response) {
        var data = response.data;

        function compare(a, b) {
            if (a.Year < b.Year)
                return 1;
            else if (a.Year > b.Year)
                return -1;
            else
                return 0;
        }

        $scope.galleries = data
            .sort(compare)
            .slice(0, 4);
    });

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