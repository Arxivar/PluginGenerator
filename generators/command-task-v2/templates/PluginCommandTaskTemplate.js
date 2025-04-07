/* eslint-disable angular/di-unused */

angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginCommandTask', <%- props.dependenciesString.join(', ') %>'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', 'taskV2PluginService',
  function ( PluginCommandTask<%= props.dependencies.join(', ') %>, arxivarResourceService, arxivarUserServiceCreator, arxivarRouteService, arxivarDocumentsService, arxivarNotifierService, taskV2PluginService) {

    <%= props.explanations.requiredSettings.MAIN %>
      const requiredSettings = {
        id: '<%= props.id %>',
        <%= props.explanations.requiredSettings.id %>
        name: '<%= props.pluginname %>',
        <%= props.explanations.requiredSettings.pluginname %>
        icon: '<%= props.icon %>',
        <%= props.explanations.requiredSettings.icon %>
        label: '<%= props.label %>',
        <%= props.explanations.requiredSettings.label %>
        description: '<%= props.description %>',
        <%= props.explanations.requiredSettings.description %>
        author: '<%= props.author %>',
        <%= props.explanations.requiredSettings.author %>
        minVersion: '<%= props.minVersion %>',
        <%= props.explanations.requiredSettings.minVersion %>
        useTypescript: <%= props.typescript %> <%= props.explanations.requiredSettings.useTypescript %>
      };

    <%= props.explanations.customSettings.MAIN %>
      const customSettings = [
        //{name: '', description: '', defaultValue:'', type: 'string'},
      ];

    <%= props.explanations.userSettings.MAIN %>
      const userSettings = [
        //{name: '', description: '', defaultValue:'', type: 'string'},
      ];

    const myPlugin = new PluginCommandTask(requiredSettings, customSettings, userSettings);

    <%= props.explanations.pluginCommandTask.canRun %>
      myPlugin.canRun = function (params) {
        if (params.hasOwnProperty('tasks') && params.tasks.length >= 1) {
          return Promise.resolve(true);
        } else {
          arxivarNotifierService.notifyWarning('Please select an item');
          return Promise.resolve(false);
        }
      };
//To properly update the grid, this function must return `true`.
    <%= props.explanations.pluginCommandTask.run %>
      myPlugin.run = function (params) {
        return myPlugin.canRun(params).then(function (canRun) {
          if (canRun) {
            alert('Hello <%= props.label %>');
          }
        });
      };


    return {
      plugin: myPlugin
    };
  }
]);
