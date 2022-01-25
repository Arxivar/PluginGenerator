[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [ArxivarRouteService](../modules/arxivarrouteservice.md) / ArxivarRouteService

# Class: ArxivarRouteService

[ArxivarRouteService](../modules/arxivarrouteservice.md).ArxivarRouteService

This module contains the methods to interface with the ARXivar Next Portal Routes
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarRouteService',
	function(arxivarRouteService) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				var docnumber = 100;
				var url = arxivarRouteService.getURLProfileReadonly(docnumber);
			}
		};
	}
]);
```

## Implements

- [*IArxivarRouteService*](../interfaces/interfaces.iarxivarrouteservice.md)

## Table of contents

### Methods

- [getMaskProfilation](arxivarrouteservice.arxivarrouteservice-1.md#getmaskprofilation)
- [getPartialURLPluginLinkExecuteCommand](arxivarrouteservice.arxivarrouteservice-1.md#getpartialurlpluginlinkexecutecommand)
- [getURLPluginRoute](arxivarrouteservice.arxivarrouteservice-1.md#geturlpluginroute)
- [getURLProfilation](arxivarrouteservice.arxivarrouteservice-1.md#geturlprofilation)
- [getURLProfileReadonly](arxivarrouteservice.arxivarrouteservice-1.md#geturlprofilereadonly)
- [getURLRevisionsByDocnumber](arxivarrouteservice.arxivarrouteservice-1.md#geturlrevisionsbydocnumber)

## Methods

### getMaskProfilation

▸ **getMaskProfilation**(`id`: *string*, `__namedParameters?`: { `bufferId`: *string* ; `fileName`: *string*  }): *string*

Retrieve the URL's mask route that contains the bufferId of the file to upload

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | *string* | - | The mask Id. |
| `__namedParameters` | *object* | null | - |
| `__namedParameters.bufferId` | *string* | - | The bufferId of uploaded file. |
| `__namedParameters.fileName` | *string* | - | The fileName of uploaded file. |

**Returns:** *string*

The url of mask route.

Implementation of: IArxivarRouteService.getMaskProfilation

___

### getPartialURLPluginLinkExecuteCommand

▸ **getPartialURLPluginLinkExecuteCommand**(`pluginId`: *string*): *string*

Retrieve the partial URL of workflow pluginLink execute command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | *string* | The pluginId. |

**Returns:** *string*

The partial url of the plugin link execute command.

Implementation of: IArxivarRouteService.getPartialURLPluginLinkExecuteCommand

___

### getURLPluginRoute

▸ **getURLPluginRoute**(`pluginId`: *string*): *string*

Retrieve the URL's route of pluginRoute

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | *string* | The pluginId. |

**Returns:** *string*

The url of the plugin route.

Implementation of: IArxivarRouteService.getURLPluginRoute

___

### getURLProfilation

▸ **getURLProfilation**(`__namedParameters?`: { `bufferId`: *string* ; `fileName`: *string*  }): *string*

Retrieve the URL's profilation route that contains the bufferId of the file to upload.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `__namedParameters` | *object* | null | - |
| `__namedParameters.bufferId` | *string* | - | The bufferId of uploaded file. |
| `__namedParameters.fileName` | *string* | - | The fileName of uploaded file. |

**Returns:** *string*

The url of profilation route.

Implementation of: IArxivarRouteService.getURLProfilation

___

### getURLProfileReadonly

▸ **getURLProfileReadonly**(`docnumber`: *number*): *string*

Retrieve the URL of the profile route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | *number* | The docnumber of the profile. |

**Returns:** *string*

The url of the profile route.

Implementation of: IArxivarRouteService.getURLProfileReadonly

___

### getURLRevisionsByDocnumber

▸ **getURLRevisionsByDocnumber**(`docnumber`: *number*): *string*

Retrieve the URL's route that contains the list of Revisions for a specific document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | *number* | The docnumber of the profile. |

**Returns:** *string*

The url of the revisions list of the profile.

Implementation of: IArxivarRouteService.getURLRevisionsByDocnumber
