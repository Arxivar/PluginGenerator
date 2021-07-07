[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [PluginService](../modules/pluginservice.md) / PluginService

# Class: PluginService

[PluginService](../modules/pluginservice.md).PluginService

## Implements

- [*IPluginService*](../interfaces/interfaces.ipluginservice.md)

## Table of contents

### Properties

- [$injector](pluginservice.pluginservice-1.md#$injector)
- [loadPlugins](pluginservice.pluginservice-1.md#loadplugins)

### Methods

- [getPluginByUser](pluginservice.pluginservice-1.md#getpluginbyuser)
- [getSettings](pluginservice.pluginservice-1.md#getsettings)
- [init](pluginservice.pluginservice-1.md#init)
- [saveSettings](pluginservice.pluginservice-1.md#savesettings)
- [setPluginByUser](pluginservice.pluginservice-1.md#setpluginbyuser)

## Properties

### $injector

• `Readonly` **$injector**: *any*

___

### loadPlugins

• **loadPlugins**: *Promise*<any[]\>

## Methods

### getPluginByUser

▸ **getPluginByUser**(`pluginSettingsObject`: PluginParamsObjectType): *Promise*<PluginSettingsObjectType\>

[@deprecated since version 2.4]
Get the settings of a plugin or of an instance of plugin.
If you set only the pluginId property in @param pluginSettingsObject you will get the global customSettings and the global userSettings
If you set the pluginId, instanceId and desktopId properites in @param pluginSettingsObject you will get the global customSettings and the instace userSettings
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'pluginService', 'Widgetdesktopplugindirective',
	function(pluginService,Widgetdesktopplugindirective) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				pluginService.getPluginByUser({
						pluginId: Widgetdesktopplugindirective.plugin.id,
						instanceId: scope.instanceId,
						desktopId: scope.desktopId,
					}).then((settings) => {
						console.log(settings.customSettings); //global
						console.log(settings.userSettings); //specific instance
				});
			}
		};
	}
]);

angular
.module('arxivar.plugins.directives')
.controller('myPluginRouteCtrl', [
	'pluginService', 'MyPluginRoute',
	function(pluginService,MyPluginRoute) {
		pluginService.getPluginByUser({pluginId: MyPluginRoute.plugin.id})
			.then((settings) => {
			console.log(settings.customSettings); //global
			console.log(settings.userSettings); //global
		});
	}
]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginSettingsObject` | PluginParamsObjectType |

**Returns:** *Promise*<PluginSettingsObjectType\>

The customSettings (the global settings of plugin) and userSettings (the userSetting of plugin or widget instance plugin)

Implementation of: [IPluginService](../interfaces/interfaces.ipluginservice.md)

___

### getSettings

▸ **getSettings**(`scope`: [*ScopeSettings*](../modules/interfaces.md#scopesettings), `params`: PluginParamsObjectType): *Promise*<any\>

Get the settings of a plugin or of an instance of plugin.
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'pluginService', 'Widgetdesktopplugindirective', '$q',
	function(pluginService,Widgetdesktopplugindirective, $q) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				var pluginobj = {
					pluginId: Widgetdesktopplugindirective.plugin.id,
				};
				var instanceobj = {
						pluginId: Widgetdesktopplugindirective.plugin.id,
						desktopId: scope.desktopId,
						instanceId: scope.instanceId
					};
				$q.all([
	 				pluginService.getSettings('global', pluginobj),
	 				pluginService.getSettings('user', pluginobj),
	 				pluginService.getSettings('global', instanceobj),
	 				pluginService.getSettings('user', instanceobj),
				])
				.then(function(settings){
					console.log('Get Settings of all instances for all users',settings[0]);
					console.log('Get Settings of all instances for me',settings[1]);
					console.log('Get Settings of this instance for all users',settings[2]);
					console.log('Get Settings of this instance for me',settings[3]);
				});
			}
		};
	}
]);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [*ScopeSettings*](../modules/interfaces.md#scopesettings) |
| `params` | PluginParamsObjectType |

**Returns:** *Promise*<any\>

The settings of plugin

Implementation of: [IPluginService](../interfaces/interfaces.ipluginservice.md)

___

### init

▸ **init**(): *void*

**Returns:** *void*

___

### saveSettings

▸ **saveSettings**(`scope`: [*ScopeSettings*](../modules/interfaces.md#scopesettings), `params`: PluginParamsObjectType, `settings`: PluginSettingsType): *Promise*<any\>

Set the settings of a plugin or of an instance of plugin with UPSERT strategy.
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'pluginService', 'Widgetdesktopplugindirective', '$q',
	function(pluginService,Widgetdesktopplugindirective, $q) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				var pluginobj = {
					pluginId: Widgetdesktopplugindirective.plugin.id,
				};
				var instanceobj = {
						pluginId: Widgetdesktopplugindirective.plugin.id,
						desktopId: scope.desktopId,
						instanceId: scope.instanceId
					};
				$q.all([
					//Save the Settings of all instances for all users
	 				pluginService.saveSettings('global', pluginobj,[{name:"myParamName",value:"myParamValue"}]),
					//Save the Settings of all instances for me
	 				pluginService.saveSettings('user', pluginobj,[{name:"myParamName",value:"myParamValue"}]),
					//Save the Settings of this instance for all users
	 				pluginService.saveSettings('global', instanceobj,[{name:"myParamName",value:"myParamValue"}]),
					//Save the Settings of this instance for me
	 				pluginService.saveSettings('user', instanceobj,[{name:"myParamName",value:"myParamValue"}]),
				]);
			}
		};
	}
]);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [*ScopeSettings*](../modules/interfaces.md#scopesettings) |
| `params` | PluginParamsObjectType |
| `settings` | PluginSettingsType |

**Returns:** *Promise*<any\>

The settings of plugin

Implementation of: [IPluginService](../interfaces/interfaces.ipluginservice.md)

___

### setPluginByUser

▸ **setPluginByUser**(`pluginSettingsObject`: PluginParamsObjectType, `userSettingValues`: PluginSettingsType): *Promise*<void\>

[@deprecated since version 2.4]
Save the user settings of a plugin or of an instance of plugin.
If you set only the pluginId property in @param pluginSettingsObject you will save the global userSettings
If you set the pluginId, instanceId and desktopId properites in @param pluginSettingsObject you will save the instace userSettings

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginSettingsObject` | PluginParamsObjectType |
| `userSettingValues` | PluginSettingsType |

**Returns:** *Promise*<void\>

The customSettings (the global settings of plugin) and userSettings (the userSetting of plugin or widget instance plugin)

Implementation of: [IPluginService](../interfaces/interfaces.ipluginservice.md)
