bkkssControllers.controller("GalleriesCtrl", ["$scope", "$http", "$uibModal", function ($scope, $http, $uibModal) {

    $http({
        method: "GET",
        url: "/json/galleries.json"
    }).then(function (response) {
        var data = response.data;

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