bkkssControllers.controller("NewsItemCtrl", ["$scope", "$uibModalInstance", "newsItem", function ($scope, $uibModalInstance, newsItem) {
    $scope.newsItem = newsItem;

    // Public functions
    $scope.closeModal = closeModal;

    // Private functions
    function closeModal() {
        $uibModalInstance.dismiss('cancel');
    }

}]);