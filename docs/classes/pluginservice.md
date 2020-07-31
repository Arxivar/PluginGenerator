[ARXivar Documentation](../globals.md) › [PluginService](pluginservice.md)

# Class: PluginService

## Hierarchy

* **PluginService**

## Index

### Methods

* [getPluginByUser](pluginservice.md#getpluginbyuser)
* [setPluginByUser](pluginservice.md#setpluginbyuser)
* [setPluginUserSettings](pluginservice.md#setpluginusersettings)

## Methods

###  getPluginByUser

▸ **getPluginByUser**(`pluginSettingsObject`: [PluginParamsObjectType](../globals.md#pluginparamsobjecttype)): *Promise‹[PluginSettingsObjectType](../globals.md#pluginsettingsobjecttype)›*

Get the settings of a plugin or of an instance of plugin.
If you set only the pluginId property in @param pluginSettingsObject you will get the global customSettings and the global userSettings
If you set only the pluginId, instanceId and desktopId properites in @param pluginSettingsObject you will get the global customSettings and the instace userSettings
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'pluginService', 'widgetdesktopplugindirective',
	function(pluginService,widgetdesktopplugindirective) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				pluginService.getPluginByUser({pluginId: RssFeedReader.plugin.id})
					.then((settings) => {
						console.log(settings.customSettings); //global
						console.log(settings.userSettings); //global
				});
				pluginService.getPluginByUser({
						pluginId: RssFeedReader.plugin.id,
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
```

**Parameters:**

Name | Type |
------ | ------ |
`pluginSettingsObject` | [PluginParamsObjectType](../globals.md#pluginparamsobjecttype) |

**Returns:** *Promise‹[PluginSettingsObjectType](../globals.md#pluginsettingsobjecttype)›*

The customSettings (the golbal settings of plugine) and userSettings (the uesrSetting of plugin or widget instance plugin)

___

###  setPluginByUser

▸ **setPluginByUser**(`pluginSettingsObject`: [PluginParamsObjectType](../globals.md#pluginparamsobjecttype), `userSettingValues`: [PluginSettingsType](../globals.md#pluginsettingstype)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`pluginSettingsObject` | [PluginParamsObjectType](../globals.md#pluginparamsobjecttype) |
`userSettingValues` | [PluginSettingsType](../globals.md#pluginsettingstype) |

**Returns:** *any*

___

###  setPluginUserSettings

▸ **setPluginUserSettings**(`pluginId`: string, `userSettings`: [PluginSettingsType](../globals.md#pluginsettingstype)): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`pluginId` | string |
`userSettings` | [PluginSettingsType](../globals.md#pluginsettingstype) |

**Returns:** *Promise‹void›*