[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [PluginService](../modules/PluginService.md) / PluginService

# Class: PluginService

[PluginService](../modules/PluginService.md).PluginService

## Implements

- [`IPluginService`](../interfaces/Interfaces.IPluginService.md)

## Table of contents

### Properties

- [$injector](PluginService.PluginService.md#$injector)
- [loadPlugins](PluginService.PluginService.md#loadplugins)

### Methods

- [getPluginByUser](PluginService.PluginService.md#getpluginbyuser)
- [getSettings](PluginService.PluginService.md#getsettings)
- [init](PluginService.PluginService.md#init)
- [saveSettings](PluginService.PluginService.md#savesettings)
- [setPluginByUser](PluginService.PluginService.md#setpluginbyuser)

## Properties

### $injector

• `Readonly` **$injector**: `any`

___

### loadPlugins

• **loadPlugins**: `Promise`\<`any`[]\>

## Methods

### getPluginByUser

▸ **getPluginByUser**(`pluginSettingsObject`): `Promise`\<`PluginSettingsObjectType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginSettingsObject` | `PluginParamsObjectType` |

#### Returns

`Promise`\<`PluginSettingsObjectType`\>

The customSettings (the global settings of plugin) and userSettings (the userSetting of plugin or widget instance plugin)

**`Deprecated`**

since version 2.4.

Get the settings of a plugin or of an instance of plugin.
If you set only the pluginId property in pluginSettingsObject you will get the global customSettings and the global userSettings
If you set the pluginId, instanceId and desktopId properites in pluginSettingsObject you will get the global customSettings and the instace userSettings
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

#### Implementation of

[IPluginService](../interfaces/Interfaces.IPluginService.md).[getPluginByUser](../interfaces/Interfaces.IPluginService.md#getpluginbyuser)

___

### getSettings

▸ **getSettings**(`scope`, `params`): `Promise`\<`any`\>

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
| `scope` | `ScopeSettings` |
| `params` | `PluginParamsObjectType` |

#### Returns

`Promise`\<`any`\>

The settings of plugin

#### Implementation of

[IPluginService](../interfaces/Interfaces.IPluginService.md).[getSettings](../interfaces/Interfaces.IPluginService.md#getsettings)

___

### init

▸ **init**(): `void`

#### Returns

`void`

___

### saveSettings

▸ **saveSettings**(`scope`, `params`, `settings`): `Promise`\<`any`\>

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
| `scope` | `ScopeSettings` |
| `params` | `PluginParamsObjectType` |
| `settings` | `PluginSettingsType` |

#### Returns

`Promise`\<`any`\>

The settings of plugin

#### Implementation of

[IPluginService](../interfaces/Interfaces.IPluginService.md).[saveSettings](../interfaces/Interfaces.IPluginService.md#savesettings)

___

### setPluginByUser

▸ **setPluginByUser**(`pluginSettingsObject`, `userSettingValues`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginSettingsObject` | `PluginParamsObjectType` |
| `userSettingValues` | `PluginSettingsType` |

#### Returns

`Promise`\<`void`\>

The customSettings (the global settings of plugin) and userSettings (the userSetting of plugin or widget instance plugin)

**`Deprecated`**

since version 2.4

Save the user settings of a plugin or of an instance of plugin.
If you set only the pluginId property in pluginSettingsObject you will save the global userSettings
If you set the pluginId, instanceId and desktopId properites in pluginSettingsObject you will save the instace userSettings

#### Implementation of

[IPluginService](../interfaces/Interfaces.IPluginService.md).[setPluginByUser](../interfaces/Interfaces.IPluginService.md#setpluginbyuser)
