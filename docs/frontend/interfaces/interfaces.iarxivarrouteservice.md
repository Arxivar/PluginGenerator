[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/interfaces.md) / IArxivarRouteService

# Interface: IArxivarRouteService

[Interfaces](../modules/interfaces.md).IArxivarRouteService

## Implemented by

- [*ArxivarRouteService*](../classes/arxivarrouteservice.arxivarrouteservice-1.md)

## Table of contents

### Properties

- [getMaskProfilation](interfaces.iarxivarrouteservice.md#getmaskprofilation)
- [getPartialURLPluginLinkExecuteCommand](interfaces.iarxivarrouteservice.md#getpartialurlpluginlinkexecutecommand)
- [getURLPluginRoute](interfaces.iarxivarrouteservice.md#geturlpluginroute)
- [getURLProfilation](interfaces.iarxivarrouteservice.md#geturlprofilation)
- [getURLProfileReadonly](interfaces.iarxivarrouteservice.md#geturlprofilereadonly)
- [getURLRevisionsByDocnumber](interfaces.iarxivarrouteservice.md#geturlrevisionsbydocnumber)

## Properties

### getMaskProfilation

• **getMaskProfilation**: (`id`: *string*, `__namedParameters?`: { `bufferId`: *string* ; `fileName`: *string*  }) => *string*

Retrieve the URL's mask route that contains the bufferId of the file to upload

**`param`** The mask Id.

**`param`** The bufferId of uploaded file.

**`param`** The fileName of uploaded file.

**`returns`** The url of mask route.

#### Type declaration

▸ (`id`: *string*, `__namedParameters?`: { `bufferId`: *string* ; `fileName`: *string*  }): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *string* |
| `__namedParameters?` | *object* |
| `__namedParameters.bufferId` | *string* |
| `__namedParameters.fileName` | *string* |

**Returns:** *string*

___

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

### getURLProfilation

• **getURLProfilation**: (`__namedParameters?`: { `bufferId`: *string* ; `fileName`: *string*  }) => *string*

Retrieve the URL's profilation route that contains the bufferId of the file to upload.

**`param`** The bufferId of uploaded file.

**`param`** The fileName of uploaded file.

**`returns`** The url of profilation route.

#### Type declaration

▸ (`__namedParameters?`: { `bufferId`: *string* ; `fileName`: *string*  }): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | *object* |
| `__namedParameters.bufferId` | *string* |
| `__namedParameters.fileName` | *string* |

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
