[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/interfaces.md) / IPluginService

# Interface: IPluginService

[Interfaces](../modules/interfaces.md).IPluginService

## Implemented by

- [*PluginService*](../classes/pluginservice.pluginservice-1.md)

## Table of contents

### Methods

- [getPluginByUser](interfaces.ipluginservice.md#getpluginbyuser)
- [getSettings](interfaces.ipluginservice.md#getsettings)
- [saveSettings](interfaces.ipluginservice.md#savesettings)
- [setPluginByUser](interfaces.ipluginservice.md#setpluginbyuser)

## Methods

### getPluginByUser

▸ **getPluginByUser**(`pluginSettingsObject`: PluginParamsObjectType): *Promise*<PluginSettingsObjectType\>

[@deprecated since version 2.4]
Get the settings of a plugin or of an instance of plugin.
If you set only the pluginId property in @param pluginSettingsObject you will get the global customSettings and the global userSettings
If you set the pluginId, instanceId and desktopId properites in @param pluginSettingsObject you will get the global customSettings and the instace userSettings

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginSettingsObject` | PluginParamsObjectType |

**Returns:** *Promise*<PluginSettingsObjectType\>

The customSettings (the global settings of plugin) and userSettings (the userSetting of plugin or widget instance plugin)

___

### getSettings

▸ **getSettings**(`scope`: [*ScopeSettings*](../modules/interfaces.md#scopesettings), `params`: PluginParamsObjectType): *Promise*<any\>

Get the settings of a plugin or of an instance of plugin.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [*ScopeSettings*](../modules/interfaces.md#scopesettings) |
| `params` | PluginParamsObjectType |

**Returns:** *Promise*<any\>

The settings of plugin

___

### saveSettings

▸ **saveSettings**(`scope`: [*ScopeSettings*](../modules/interfaces.md#scopesettings), `params`: PluginParamsObjectType, `settings`: PluginSettingsType): *Promise*<any\>

Set the settings of a plugin or of an instance of plugin with UPSERT strategy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [*ScopeSettings*](../modules/interfaces.md#scopesettings) |
| `params` | PluginParamsObjectType |
| `settings` | PluginSettingsType |

**Returns:** *Promise*<any\>

The settings of plugin

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
