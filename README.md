ng-contenteditable
==================

Angular directive that combines functionality for elements with contenteditable="true" and data-ng-model

First include the source:

    <script src="bower_components/ng-contenteditable/dist/ng-contenteditable.min.js"></script>

Second, make sure to include ContentEditable in the app:

    var app = angular.module('app', ['ContentEditable']);

Lastly, to use, declare an element as contenteditable with a ng-model directive:

    <span contenteditable="true" data-ng-model="name"></span>
