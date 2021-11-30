[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [ArxivarDocumentsService](../modules/arxivardocumentsservice.md) / ArxivarDocumentsService

# Class: ArxivarDocumentsService

[ArxivarDocumentsService](../modules/arxivardocumentsservice.md).ArxivarDocumentsService

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
              arxivarDocumentsService.getDocumentByDocnumber(docnumber)
             .then(function(result){
                 var fileURL = URL.createObjectURL(result.data);
                 window.open(fileURL, '_blank', '');
             });
			}
		};
	}
]);
```

## Table of contents

### Methods

- [downloadStream](arxivardocumentsservice.arxivardocumentsservice-1.md#downloadstream)
- [getDocumentByDocnumber](arxivardocumentsservice.arxivardocumentsservice-1.md#getdocumentbydocnumber)
- [getRevisionByID](arxivardocumentsservice.arxivardocumentsservice-1.md#getrevisionbyid)

## Methods

### downloadStream

▸ **downloadStream**(`data`: *any*, `status`: *any*, `headers`: *any*): *Promise*<any\>

This method converts an api call response of type arraybuffer into a file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | *any* | The data of the call. |
| `status` | *any* | The status of the call. |
| `headers` | *any* | The headers of the call. |

**Returns:** *Promise*<any\>

The file download Promise.

___

### getDocumentByDocnumber

▸ **getDocumentByDocnumber**(`docnumber`: *number*): *Promise*<any\>

Download the document linked to a profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | *number* | The docnumber of the profile. |

**Returns:** *Promise*<any\>

The file download Promise.

___

### getRevisionByID

▸ **getRevisionByID**(`revisionId`: *number*): *Promise*<any\>

Download the document linked to a profile with a specific revision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `revisionId` | *number* | The ID of the revision. |

**Returns:** *Promise*<any\>

The file download Promise.
