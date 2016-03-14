bkkssControllers.controller("ContactUsCtrl", ["$scope", function ($scope) {
    $scope.enquiry = {
        title: "",
        email: "",
        content: "",
        captcha: ""
    };

    // Public functions
    $scope.enquire = enquire;
    $scope.reset = reset;

    // Private functions
    function enquire(){
        console.log($scope.enquiry);
    }

    function reset(){
        $scope.enquiry = {
            title: "",
            email: "",
            content: "",
            captcha: ""
        };
    }

}]);