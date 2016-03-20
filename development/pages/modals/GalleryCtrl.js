bkkssControllers.controller("GalleryCtrl", ["$scope", "$uibModalInstance", "title", "images", function ($scope, $uibModalInstance, title, images) {
    $scope.title = title;
    $scope.images = images;


    // Public functions
    $scope.closeModal = closeModal;

    // Private functions
    function closeModal() {
        $uibModalInstance.dismiss('cancel');
    };
}]);