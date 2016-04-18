bkkssControllers.controller("GalleriesCtrl", ["$scope", "$http", "$uibModal", function ($scope, $http, $uibModal) {

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

        data.sort(compare);

        $scope.galleries = data;
    });

    // Public functions

    $scope.openGalleryModal = openGalleryModal;

    // Private functions

    function openGalleryModal(title, images) {
        var modal = $uibModal.open({
            animation: true,
            templateUrl: "pages/modals/gallery.html",
            size: "lg",
            controller: "GalleryCtrl",
            resolve: {
                title: function () {
                    return title;
                },
                images: function () {
                    return images;
                }
            }
        });
    }


}]);