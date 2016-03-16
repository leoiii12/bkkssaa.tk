bkkssControllers.controller("MembersCtrl", ["$scope", "$http", "$uibModal", function ($scope, $http, $uibModal) {

    $http({
        method: "GET",
        url: "/json/members.json"
    }).then(function (response) {
        var data = response.data;
        console.log(data);
        $scope.associations = data;
    });

    // Public functions
    // Private functions

}]);