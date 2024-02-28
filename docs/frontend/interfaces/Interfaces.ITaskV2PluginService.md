[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/Interfaces.md) / ITaskV2PluginService

# Interface: ITaskV2PluginService

[Interfaces](../modules/Interfaces.md).ITaskV2PluginService

## Implemented by

- [`TaskV2PluginService`](../classes/TaskV2PluginService.TaskV2PluginService.md)

## Table of contents

### Methods

- [forceUpdateOutcomesByTaskId](Interfaces.ITaskV2PluginService.md#forceupdateoutcomesbytaskid)
- [updateWidgetSettings](Interfaces.ITaskV2PluginService.md#updatewidgetsettings)

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
