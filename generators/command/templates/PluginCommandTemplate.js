/* eslint-disable angular/di-unused */

angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginCommand', <%-props.dependenciesString.join(', ') %>'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', 'taskV2PluginService',
  function ( PluginCommand<%= props.dependencies.join(', ') %>, arxivarResourceService, arxivarUserServiceCreator, arxivarRouteService, arxivarDocumentsService, arxivarNotifierService, taskV2PluginService) {

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
        requireRefresh: <%= props.requireRefresh %> ,
        <%= props.explanations.requiredSettings.requireRefresh %>
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

    const myPlugin = new PluginCommand(requiredSettings, customSettings, userSettings);

    <%= props.explanations.pluginCommand.canRun %>
      myPlugin.canRun = function (params) {
        if (params.hasOwnProperty('docnumbers') && params.docnumbers.length >= 1) {
          return Promise.resolve(true);
        } else {
          arxivarNotifierService.notifyWarning('Please select an item');
          return Promise.resolve(false);
        }
      };

    <%= props.explanations.pluginCommand.run %>
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
