/* eslint-disable angular/di-unused */

angular.module('arxivar.plugins.controller').controller('<%= props.pluginname %>Ctrl', 
	['$scope', <%- props.dependenciesString.join(', ') %>'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', '<%= props.pluginname %>', 
		function ($scope<%= props.dependencies.join(', ') %>, arxivarResourceService, arxivarUserServiceCreator, arxivarRouteService, arxivarDocumentsService, arxivarNotifierService, <%= props.pluginname %>) {
			<%= props.paramsCommentDesc %>
			<%= props.paramsCommentEx %>
			<%= props.paramsCommentParams %>
			<%= props.paramsCommentParamsEx %>
			
	}]);
