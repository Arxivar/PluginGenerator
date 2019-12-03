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
                var url = arxivarNotifierService.notifyError('Errore!');
            }
        };
    }
]);
```

## Hierarchy

**ArxivarNotifierService**

## Index

### Methods

* [notifyError](arxivarnotifierservice.md#notifyerror)
* [notifyInfo](arxivarnotifierservice.md#notifyinfo)
* [notifySuccess](arxivarnotifierservice.md#notifysuccess)
* [notifyWarning](arxivarnotifierservice.md#notifywarning)

---

## Methods

<a id="notifyerror"></a>

###  notifyError

▸ **notifyError**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:42*

Notify error message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___
<a id="notifyinfo"></a>

###  notifyInfo

▸ **notifyInfo**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:58*

Notify info message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___
<a id="notifysuccess"></a>

###  notifySuccess

▸ **notifySuccess**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:66*

Notify success message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___
<a id="notifywarning"></a>

###  notifyWarning

▸ **notifyWarning**(message: *`string`*): `void`

*Defined in services/externals/ArxivarNotifierService.ts:50*

Notify warning message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The docnumber of the profile. |

**Returns:** `void`

___

