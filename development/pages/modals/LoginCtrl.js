bkkssControllers.controller("LoginCtrl", ["$scope", function ($scope) {
    $scope.user = {
        email: "",
        password: ""
    };

    // Public functions
    $scope.login = login;
    $scope.reset = reset;

    // Private functions
    function login(){
        console.log($scope.user);
    }

    function reset(){
        $scope.user = {
            email: "",
            password: ""
        };
    }

}]);