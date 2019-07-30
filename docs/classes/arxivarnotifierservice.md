[ARXivar Documentation](../README.md) > [ArxivarNotifierService](../classes/arxivarnotifierservice.md)

# Class: ArxivarNotifierService

This module contains the methods to interface with the ARXivar Next Portal Routes

```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
    'arxivarNotifierService',
    function(arxivarNotifierService) {
        return {
            restrict: 'E',
            scope: {
                instanceId: '@',
                desktopId: '=?'
            },
            templateUrl: 'WidgetDesktopPlugin.html',
            link: function(scope) {
                var docnumber = 100;
                var url = arxivarNotifierService.notifYError('Errore!');
            }
        };
    }
]);
```

## Hierarchy

**ArxivarNotifierService**

## Index

### Properties

* [$rootScope](arxivarnotifierservice.md#_rootscope)

### Methods

* [notifYError](arxivarnotifierservice.md#notifyerror)
* [notifYInfo](arxivarnotifierservice.md#notifyinfo)
* [notifYSuccess](arxivarnotifierservice.md#notifysuccess)
* [notifYWarning](arxivarnotifierservice.md#notifywarning)

---

## Properties

<a id="_rootscope"></a>

###  $rootScope

**● $rootScope**: *`any`*

*Defined in services/externals/ArxivarNotifierService.ts:30*

___

## Methods

<a id="notifyerror"></a>

###  notifYError

▸ **notifYError**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:45*

Notify error message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___
<a id="notifyinfo"></a>

###  notifYInfo

▸ **notifYInfo**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:61*

Notify info message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___
<a id="notifysuccess"></a>

###  notifYSuccess

▸ **notifYSuccess**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:69*

Notify success message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___
<a id="notifywarning"></a>

###  notifYWarning

▸ **notifYWarning**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:53*

Notify warning message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___

