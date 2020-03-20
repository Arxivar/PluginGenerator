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

* [getURLPluginRoute](arxivarrouteservice.md#geturlpluginroute)
* [getURLProfileReadonly](arxivarrouteservice.md#geturlprofilereadonly)
* [getURLRevisionsByDocnumber](arxivarrouteservice.md#geturlrevisionsbydocnumber)

---

## Methods

<a id="geturlpluginroute"></a>

###  getURLPluginRoute

▸ **getURLPluginRoute**(pluginId: *`string`*): `string`

*Defined in services/externals/ArxivarRouteService.ts:73*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pluginId | `string` |  The pluginId. |

**Returns:** `string`
The url of the plugin route.

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

