[ARXivar Documentation](../README.md) > [ArxivarRouteService](../classes/arxivarrouteservice.md)

# Class: ArxivarRouteService




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

▸ **getDocumentByDocnumber**(docnumber: *`number`*): `Promise`<`any`>



*Defined in services/externals/ArxivarRouteService.ts:73*



Download the document linked to a profile.


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `number` |  The docnumber of the profile. |






**Returns:** `Promise`<`any`>
The file download Promise.






___
<a id="getrevisionbyid"></a>

###  getRevisionByID

▸ **getRevisionByID**(revisionId: *`number`*): `Promise`<`any`>



*Defined in services/externals/ArxivarRouteService.ts:84*



Download the document linked to a profile with a specific revision.


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| revisionId | `number` |  The ID of the revision. |






**Returns:** `Promise`<`any`>
The file download Promise.






___
<a id="geturlprofilereadonly"></a>

###  getURLProfileReadonly

▸ **getURLProfileReadonly**(docnumber: *`number`*): `string`



*Defined in services/externals/ArxivarRouteService.ts:53*



Retrieve the URL of the profile route.


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `number` |  The docnumber of the profile. |






**Returns:** `string`
The url of the profile route.






___
<a id="geturlrevisionsbydocnumber"></a>

###  getURLRevisionsByDocnumber

▸ **getURLRevisionsByDocnumber**(docnumber: *`number`*): `string`



*Defined in services/externals/ArxivarRouteService.ts:63*



Retrieve the URL's route that contains the list of Revisions for a specific document


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `number` |  The docnumber of the profile. |






**Returns:** `string`
The url of the revisions list of the profile.






___

