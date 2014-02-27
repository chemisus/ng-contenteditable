function ContentEditableDirective() {
    return {
        require: '?ngModel',
        link: function ($scope, $element, attrs, ngModel) {
            if (!ngModel) {
                return;
            }

            ngModel.$render = function () {
                $element.html(ngModel.$viewValue);
            };

            $element.on('blur keydown keyup change', function () {
                $scope.$apply(function () {
                    ngModel.$setViewValue($element.html());
                });
            });
        }
    };
}
;(function () {
    var app = angular.module('ContentEditable', []);

    app.directive('contenteditable', [ContentEditableDirective]);
})();
