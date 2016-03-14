bkkssControllers.controller("RegisterCtrl", ["$scope", function ($scope) {
    $scope.user = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    };

    // Public functions
    $scope.register = register;
    $scope.reset = reset;

    // Private functions
    function register() {
        console.log($scope.user);
    }

    function reset() {
        $scope.user = {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        };
    }

}]);