[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [TaskV2PluginService](../modules/TaskV2PluginService.md) / TaskV2PluginService

# Class: TaskV2PluginService

[TaskV2PluginService](../modules/TaskV2PluginService.md).TaskV2PluginService

This module contains the methods to interface with the widget task v2
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgettaskv2plugindirective', [
	'taskV2PluginService',
	function(taskV2PluginService) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				taskDto: '=?',
				widgetSettings: '=?',
			},
			templateUrl: 'WidgetTaskV2Plugin.html',
			link: function(scope) {
				//supposing you have modified some task variables before
				taskV2PluginService.forceUpdateOutcomesByTaskId(scope.taskDto.id)
			}
		};
	}
]);

angular
.module('arxivar.plugins.directives')
.directive('widgettaskv2plugindirective', [
	'taskV2PluginService','WidgetTaskV2Plugin'
	function(taskV2PluginService,WidgetTaskV2Plugin) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				taskDto: '=?',
				widgetSettings: '=?',
			},
			templateUrl: 'WidgetTaskV2Plugin.html',
			link: function(scope) {
				taskV2PluginService.updateWidgetSettings(WidgetTaskV2Plugin.plugin.requiredSettings.id, scope.instanceId, 'title', 'newTitle');
			}
		};
	}
]);
```

## Implements

- [`ITaskV2PluginService`](../interfaces/Interfaces.ITaskV2PluginService.md)

## Table of contents

### Methods

- [forceUpdateOutcomesByTaskId](TaskV2PluginService.TaskV2PluginService.md#forceupdateoutcomesbytaskid)
- [updateWidgetSettings](TaskV2PluginService.TaskV2PluginService.md#updatewidgetsettings)

## Methods

### forceUpdateOutcomesByTaskId

▸ **forceUpdateOutcomesByTaskId**(`taskId`): `void`

Update the outcomes by task Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskId` | `string` | task Id |

#### Returns

`void`

#### Implementation of

[ITaskV2PluginService](../interfaces/Interfaces.ITaskV2PluginService.md).[forceUpdateOutcomesByTaskId](../interfaces/Interfaces.ITaskV2PluginService.md#forceupdateoutcomesbytaskid)

___

### updateWidgetSettings

▸ **updateWidgetSettings**\<`T`\>(`pluginId`, `instanceId`, `propToModify`, `valueToModify`): `void`

Update the settings of a widget by instance Id.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IWidgetSettings`](../modules/Interfaces.md#iwidgetsettings) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | plugin id |
| `instanceId` | `string` | instance id |
| `propToModify` | `T` | property to modify of [IWidgetSettings](../modules/Interfaces.md#iwidgetsettings) |
| `valueToModify` | [`IWidgetSettings`](../modules/Interfaces.md#iwidgetsettings)[`T`] | value to modify |

#### Returns

`void`

#### Implementation of

[ITaskV2PluginService](../interfaces/Interfaces.ITaskV2PluginService.md).[updateWidgetSettings](../interfaces/Interfaces.ITaskV2PluginService.md#updatewidgetsettings)
