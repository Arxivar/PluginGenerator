[ARXivar Documentation](../README.md) > [ArxivarDocumentsService](../classes/arxivardocumentsservice.md)

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

**ArxivarDocumentsService**

## Index

### Methods

* [getDocumentByDocnumber](arxivardocumentsservice.md#getdocumentbydocnumber)
* [getRevisionByID](arxivardocumentsservice.md#getrevisionbyid)

---

## Methods

<a id="getdocumentbydocnumber"></a>

###  getDocumentByDocnumber

▸ **getDocumentByDocnumber**(docnumber: *`number`*): `Promise`<`any`>

*Defined in services/externals/ArxivarDocumentsService.ts:53*

Download the document linked to a profile.

**Parameters:**

| Name      | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| docnumber | `number` | The docnumber of the profile. |

**Returns:** `Promise`<`any`>
The file download Promise.

___
<a id="getrevisionbyid"></a>

###  getRevisionByID

▸ **getRevisionByID**(revisionId: *`number`*): `Promise`<`any`>

*Defined in services/externals/ArxivarDocumentsService.ts:64*

Download the document linked to a profile with a specific revision.

**Parameters:**

| Name       | Type     | Description             |
| ---------- | -------- | ----------------------- |
| revisionId | `number` | The ID of the revision. |

**Returns:** `Promise`<`any`>
The file download Promise.

___

