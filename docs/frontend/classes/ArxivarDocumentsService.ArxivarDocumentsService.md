[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [ArxivarDocumentsService](../modules/ArxivarDocumentsService.md) / ArxivarDocumentsService

# Class: ArxivarDocumentsService

[ArxivarDocumentsService](../modules/ArxivarDocumentsService.md).ArxivarDocumentsService

This module contains the methods for download the ARXivar's documents
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarDocumentsService',
	function(arxivarDocumentsService) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				var docnumber = 100;
				return arxivarDocumentsService.getDocumentByDocnumber(docnumber)
				.then(({data,status, headers})=>arxivarDocumentsService.downloadStream(data,status, headers));             
			}
		};
	}
]);
```

## Table of contents

### Methods

- [downloadStream](ArxivarDocumentsService.ArxivarDocumentsService.md#downloadstream)
- [getDocumentByDocnumber](ArxivarDocumentsService.ArxivarDocumentsService.md#getdocumentbydocnumber)
- [getRevisionByID](ArxivarDocumentsService.ArxivarDocumentsService.md#getrevisionbyid)

## Methods

### downloadStream

▸ **downloadStream**(`data`, `status`, `headers`): `Promise`\<`any`\>

This method converts an api call response of type arraybuffer into a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data of the call. |
| `status` | `number` | The status of the call. |
| `headers` | `any` | The headers of the call. |

#### Returns

`Promise`\<`any`\>

The file download Promise.

___

### getDocumentByDocnumber

▸ **getDocumentByDocnumber**(`docnumber`): `Promise`\<`any`\>

Download the document linked to a profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | `number` | The docnumber of the profile. |

#### Returns

`Promise`\<`any`\>

The file download Promise.

___

### getRevisionByID

▸ **getRevisionByID**(`revisionId`): `Promise`\<`any`\>

Download the document linked to a profile with a specific revision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `revisionId` | `number` | The ID of the revision. |

#### Returns

`Promise`\<`any`\>

The file download Promise.
