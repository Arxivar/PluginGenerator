[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/Interfaces.md) / IPluginService

# Interface: IPluginService

[Interfaces](../modules/Interfaces.md).IPluginService

## Implemented by

- [`PluginService`](../classes/PluginService.PluginService.md)

## Table of contents

### Methods

- [getPluginByUser](Interfaces.IPluginService.md#getpluginbyuser)
- [getSettings](Interfaces.IPluginService.md#getsettings)
- [saveSettings](Interfaces.IPluginService.md#savesettings)
- [setPluginByUser](Interfaces.IPluginService.md#setpluginbyuser)

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

since version 2.4

Get the settings of a plugin or of an instance of plugin.
If you set only the pluginId property in pluginSettingsObject you will get the global customSettings and the global userSettings
If you set the pluginId, instanceId and desktopId properties in pluginSettingsObject you will get the global customSettings and the instance userSettings

___

### getSettings

▸ **getSettings**(`scope`, `params`): `Promise`\<`any`\>

Get the settings of a plugin or of an instance of plugin.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`ScopeSettings`](../modules/Interfaces.md#scopesettings) |
| `params` | `PluginParamsObjectType` |

#### Returns

`Promise`\<`any`\>

The settings of plugin

___

### saveSettings

▸ **saveSettings**(`scope`, `params`, `settings`): `Promise`\<`any`\>

Set the settings of a plugin or of an instance of plugin with UPSERT strategy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`ScopeSettings`](../modules/Interfaces.md#scopesettings) |
| `params` | `PluginParamsObjectType` |
| `settings` | `PluginSettingsType` |

#### Returns

`Promise`\<`any`\>

The settings of plugin

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
If you set the pluginId, instanceId and desktopId properties in pluginSettingsObject you will save the instance userSettings
