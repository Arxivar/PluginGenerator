angular.module('arxivar.plugins.controller').controller('<%= props.pluginname %>Ctrl', 
	['$scope', '<%= props.pluginname %>', <%- props.dependenciesString.join(', ') %> 
		function ($scope, <%= props.pluginname %> <%= props.dependencies.join(', ') %>) {
			<%= props.paramsCommentDesc %>
			<%= props.paramsCommentEx %>
			<%= props.paramsCommentParams %>
			<%= props.paramsCommentParamsEx %>
			
}]);
