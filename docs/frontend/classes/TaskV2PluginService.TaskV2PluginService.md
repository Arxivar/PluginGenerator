[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [TaskV2PluginService](../modules/TaskV2PluginService.md) / TaskV2PluginService

# Class: TaskV2PluginService

[TaskV2PluginService](../modules/TaskV2PluginService.md).TaskV2PluginService

## Implements

- [`ITaskV2PluginService`](../interfaces/Interfaces.ITaskV2PluginService.md)

## Table of contents

### Methods

- [forceUpdateOutcomesByTaskId](TaskV2PluginService.TaskV2PluginService.md#forceupdateoutcomesbytaskid)
- [updateWidgetSettings](TaskV2PluginService.TaskV2PluginService.md#updatewidgetsettings)

## Methods

### forceUpdateOutcomesByTaskId

▸ **forceUpdateOutcomesByTaskId**(`taskId`): `void`

Force the update the outcomes by task Id

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

Update the settings of a widget bt instance Id.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IWidgetSettings`](../modules/Interfaces.md#iwidgetsettings) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | plugin id |
| `instanceId` | `string` | instance id |
| `propToModify` | `T` | property to modify |
| `valueToModify` | [`IWidgetSettings`](../modules/Interfaces.md#iwidgetsettings)[`T`] | value to modify |

#### Returns

`void`

#### Implementation of

[ITaskV2PluginService](../interfaces/Interfaces.ITaskV2PluginService.md).[updateWidgetSettings](../interfaces/Interfaces.ITaskV2PluginService.md#updatewidgetsettings)
