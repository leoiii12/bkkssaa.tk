bkkssDirectives
    .directive("gallery", ["$timeout", function ($timeout) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                images: "=",
                pathPrefix: "@"
            },
            controller: ["$scope", "$element", "$attrs", function ($scope, $element, $attrs) {
                var IMAGES_LENGTH = $scope.images.length;

                $scope.maximumIndex = IMAGES_LENGTH;
                $scope.currentIndex = 0;

                // Public functions

                $scope.nextImage = nextImage;
                $scope.previousImage = previousImage;

                // Private functions

                function nextImage() {
                    $scope.currentIndex = $scope.currentIndex + 1;
                    if ($scope.currentIndex >= IMAGES_LENGTH) {
                        $scope.currentIndex = 0;
                    }
                };

                function previousImage() {
                    $scope.currentIndex = $scope.currentIndex - 1;
                    if ($scope.currentIndex < 0) {
                        $scope.currentIndex = IMAGES_LENGTH - 1;
                    }
                };
            }],
            template: "<div class='gallery'>" +
            "<div class='gallery-pager'>{{currentIndex + 1}}&nbsp;/&nbsp;{{maximumIndex}}</div>" +
            "<div class='gallery-left-navigator' ng-click='previousImage()'></div>" +
            "<div class='gallery-vertical-helper'></div>" +
            "<div class='stage'><img ng-repeat='(key, image) in images' ng-if='key == currentIndex' ng-src='{{pathPrefix}}{{image.real}}'></div>" +
            "<div class='gallery-right-navigator' ng-click='nextImage()'></div>" +
            "</div>"
        }
    }]);