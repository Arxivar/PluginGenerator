[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/interfaces.md) / IArxivarRouteService

# Interface: IArxivarRouteService

[Interfaces](../modules/interfaces.md).IArxivarRouteService

## Implemented by

- [*ArxivarRouteService*](../classes/arxivarrouteservice.arxivarrouteservice-1.md)

## Table of contents

### Properties

- [getPartialURLPluginLinkExecuteCommand](interfaces.iarxivarrouteservice.md#getpartialurlpluginlinkexecutecommand)
- [getURLPluginRoute](interfaces.iarxivarrouteservice.md#geturlpluginroute)
- [getURLProfileReadonly](interfaces.iarxivarrouteservice.md#geturlprofilereadonly)
- [getURLRevisionsByDocnumber](interfaces.iarxivarrouteservice.md#geturlrevisionsbydocnumber)

## Properties

### getPartialURLPluginLinkExecuteCommand

• **getPartialURLPluginLinkExecuteCommand**: (`pluginId`: *string*) => *string*

Retrieve the partial URL of workflow pluginLink execute command

**`param`** The pluginId.

**`returns`** The partial url of the plugin link execute command.

#### Type declaration

▸ (`pluginId`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginId` | *string* |

**Returns:** *string*

___

### getURLPluginRoute

• **getURLPluginRoute**: (`pluginId`: *string*) => *string*

Retrieve the URL's route of pluginRoute

**`param`** The pluginId.

**`returns`** The url of the plugin route.

#### Type declaration

▸ (`pluginId`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginId` | *string* |

**Returns:** *string*

___

### getURLProfileReadonly

• **getURLProfileReadonly**: (`docnumber`: *number*) => *string*

Retrieve the URL of the profile route.

**`param`** The docnumber of the profile.

**`returns`** The url of the profile route.

#### Type declaration

▸ (`docnumber`: *number*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `docnumber` | *number* |

**Returns:** *string*

___

### getURLRevisionsByDocnumber

• **getURLRevisionsByDocnumber**: (`docnumber`: *number*) => *string*

Retrieve the URL's route that contains the list of Revisions for a specific document

**`param`** The docnumber of the profile.

**`returns`** The url of the revisions list of the profile.

#### Type declaration

▸ (`docnumber`: *number*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `docnumber` | *number* |

**Returns:** *string*
