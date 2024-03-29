angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginCommand', <%-props.dependenciesString.join(', ') %>'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService',
  function ( PluginCommand<%= props.dependencies.join(', ') %>, arxivarResourceService, arxivarUserServiceCreator, arxivarRouteService, arxivarDocumentsService, arxivarNotifierService) {

    <%= props.explanations.requiredSettings.MAIN %>
      var requiredSettings = {
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
      var customSettings = [
        //{name: '', description: '', defaultValue:'', type: 'string'},
      ];

    <%= props.explanations.userSettings.MAIN %>
      var userSettings = [
        //{name: '', description: '', defaultValue:'', type: 'string'},
      ];

    var myPlugin = new PluginCommand(requiredSettings, customSettings, userSettings);

    <%= props.explanations.pluginCommand.canRun %>
      myPlugin.canRun = function (params) {
        return params.hasOwnProperty('docnumbers') && params.docnumbers.length >= 1 ? Promise.resolve(true) : Promise.resolve(arxivarNotifierService.notifyWarning('Please select an item'));
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
