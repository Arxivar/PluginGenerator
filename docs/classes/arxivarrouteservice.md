[ARXivar Documentation](../README.md) > [ArxivarRouteService](../classes/arxivarrouteservice.md)

# Class: ArxivarRouteService

This module contains the essential method for an AngularJS application to consume the ARXivar api calls. The methods exposed permits to create,read,edit and update resources from ARXivar.

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
                var url = arxivarRouteService.getURLProfileReadonly(100);
            }
        };
    }
]);
```

## Hierarchy

**ArxivarRouteService**

## Index

### Methods

* [getDocumentByDocnumber](arxivarrouteservice.md#getdocumentbydocnumber)
* [getRevisionByID](arxivarrouteservice.md#getrevisionbyid)
* [getURLProfileReadonly](arxivarrouteservice.md#geturlprofilereadonly)
* [getURLRevisionsByDocnumber](arxivarrouteservice.md#geturlrevisionsbydocnumber)

---

## Methods

<a id="getdocumentbydocnumber"></a>

###  getDocumentByDocnumber

▸ **getDocumentByDocnumber**(docnumber: *`Int32Array`*): `any`

*Defined in services/externals/ArxivarRouteService.ts:76*

This call is used for download the file by docnumber, if exists it

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `Int32Array` |  Docnumber |

**Returns:** `any`
The file Downloaded

___
<a id="getrevisionbyid"></a>

###  getRevisionByID

▸ **getRevisionByID**(idRevision: *`Int32Array`*): `any`

*Defined in services/externals/ArxivarRouteService.ts:87*

This call is used for download the file from specific revision

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| idRevision | `Int32Array` |  Id from DM\_REVISIONI |

**Returns:** `any`
The file Downloaded

___
<a id="geturlprofilereadonly"></a>

###  getURLProfileReadonly

▸ **getURLProfileReadonly**(docnumber: *`Int32Array`*): `string`

*Defined in services/externals/ArxivarRouteService.ts:56*

Retrieve the URL Profile legacy from Docnumber

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `Int32Array` |  Docnumber |

**Returns:** `string`
The URL Profile

___
<a id="geturlrevisionsbydocnumber"></a>

###  getURLRevisionsByDocnumber

▸ **getURLRevisionsByDocnumber**(docnumber: *`Int32Array`*): `string`

*Defined in services/externals/ArxivarRouteService.ts:66*

Retrieve the URL for the Revisions from docnumber

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `Int32Array` |  Docnumber |

**Returns:** `string`
The URL Revisions List

___

