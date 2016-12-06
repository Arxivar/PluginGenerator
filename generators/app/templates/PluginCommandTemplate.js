
function plugin(PluginCommand<%= props.dependencies.join(', ') %>) {
    var requiredSettings = {
        id: '<%= props.id %>',
        name: '<%= props.pluginname %>',
        description: '<%= props.description %>',
        author: '<%= props.author %>',
        minVersion: '<%= props.minVersion %>'
    };
    var myPlugin = new PluginCommand(requiredSettings);
    myPlugin.canRun = function(docnumbers) {
        return true;
    };
    myPlugin.run = function(docnumbers) {
        alert('Hello Abletech');
    };


    return { plugin: myPlugin };
};


angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginCommand',<%- props.dependenciesString.join(', ') %> plugin]);
