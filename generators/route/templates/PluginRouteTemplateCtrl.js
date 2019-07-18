angular.module('arxivar.plugins.controller').controller('<%= props.pluginname %>Ctrl', ['$scope', '<%= props.pluginname %>', 'params', < % -props.dependenciesString.join(', ') % > function ($scope, < %= props.pluginname % > , params < %= props.dependencies.join(', ') % > ) {

}]);
