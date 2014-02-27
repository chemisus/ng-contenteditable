(function () {
    var app = angular.module('ContentEditable', []);

    app.directive('contenteditable', [ContentEditableDirective]);
})();
