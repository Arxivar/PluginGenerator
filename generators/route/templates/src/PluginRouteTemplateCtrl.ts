import { LoDashStatic } from "lodash";
import {routeType} from "./<%= props.pluginname %>";

angular.module('arxivar.plugins.controller').controller('<%= props.pluginname %>Ctrl', [
    '$scope',<%- props.dependenciesString.join(', ') %>'arxivarResourceService' , 'arxivarUserServiceCreator' , 'arxivarRouteService' , 'arxivarDocumentsService' , 'arxivarNotifierService' , '<%= props.pluginname %>',
    ($scope: angular.IScope<%= props.dependenciesType.join(', ') %> , arxivarResourceService: IArxivarResourceService , arxivarUserServiceCreator: IArxivarUserServiceCreator , arxivarRouteService: IArxivarRouteService , arxivarDocumentsService: IArxivarDocumentsService , arxivarNotifierService: IArxivarNotifierService, <%= props.pluginname %>: routeType) => {
      
		<%= props.paramsCommentDesc %>
		<%= props.paramsCommentEx %>
		<%= props.paramsCommentParams %>
		<%= props.paramsCommentParamsEx %>
        
    } 
]);
