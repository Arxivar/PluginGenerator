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



*Defined in services/externals/ArxivarRouteService.ts:75*



Download document linked to a profile


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `number` |  Docnumber |






**Returns:** `Promise`<`any`>
The file Downloaded






___
<a id="getrevisionbyid"></a>

###  getRevisionByID

▸ **getRevisionByID**(idRevision: *`number`*): `Promise`<`any`>



*Defined in services/externals/ArxivarRouteService.ts:86*



Download document from specific revision ID


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| idRevision | `number` |  Id from DM\_REVISIONI |






**Returns:** `Promise`<`any`>
The file Downloaded






___
<a id="geturlprofilereadonly"></a>

###  getURLProfileReadonly

▸ **getURLProfileReadonly**(docnumber: *`number`*): `string`



*Defined in services/externals/ArxivarRouteService.ts:55*



Retrieve the URL of the profile route


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `number` |  Docnumber |






**Returns:** `string`
The URL Profile






___
<a id="geturlrevisionsbydocnumber"></a>

###  getURLRevisionsByDocnumber

▸ **getURLRevisionsByDocnumber**(docnumber: *`number`*): `string`



*Defined in services/externals/ArxivarRouteService.ts:65*



Retrieve the URL's route that contains the list of Revisions for a specific document


**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| docnumber | `number` |  Docnumber |






**Returns:** `string`
The URL Revisions List






___

