[ARXivar Documentation](../globals.md) › [ArxivarDocumentsService](arxivardocumentsservice.md)

# Class: ArxivarDocumentsService

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

## Hierarchy

* **ArxivarDocumentsService**

## Index

### Methods

* [getDocumentByDocnumber](arxivardocumentsservice.md#getdocumentbydocnumber)
* [getRevisionByID](arxivardocumentsservice.md#getrevisionbyid)

## Methods

###  getDocumentByDocnumber

▸ **getDocumentByDocnumber**(`docnumber`: number): *Promise‹any›*

Download the document linked to a profile.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`docnumber` | number | The docnumber of the profile. |

**Returns:** *Promise‹any›*

The file download Promise.

___

###  getRevisionByID

▸ **getRevisionByID**(`revisionId`: number): *Promise‹any›*

Download the document linked to a profile with a specific revision.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`revisionId` | number | The ID of the revision. |

**Returns:** *Promise‹any›*

The file download Promise.
