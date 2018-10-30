[ARXivar Documentation](../README.md) > [ArxivarResourceService](../classes/arxivarresourceservice.md)

# Class: ArxivarResourceService

This module contains the essential method for an AngularJS application to consume the ARXivar api calls. The methods exposed permits to create,read,edit and update resources from ARXivar.

```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
    'arxivarResourceService',
    function(arxivarResourceService) {
        return {
            restrict: 'E',
            scope: {
                instanceId: '@',
                desktopId: '=?'
            },
            templateUrl: 'WidgetDesktopPlugin.html',
            link: function(scope) {
                arxivarResourceService.get('masks').then(function(masks) {
                    scope.masks = masks;
                });
            }
        };
    }
]);
```

## Hierarchy

**ArxivarResourceService**

## Index

### Properties

* [delete](arxivarresourceservice.md#delete)
* [get](arxivarresourceservice.md#get)
* [getByteArray](arxivarresourceservice.md#getbytearray)
* [getPost](arxivarresourceservice.md#getpost)
* [getValue](arxivarresourceservice.md#getvalue)
* [queryWithOptions](arxivarresourceservice.md#querywithoptions)
* [save](arxivarresourceservice.md#save)
* [update](arxivarresourceservice.md#update)
* [updateCollection](arxivarresourceservice.md#updatecollection)

---

## Properties

<a id="delete"></a>

###  delete

**● delete**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:110*

Delete the selected resource from Arxivar
*__param__*: The resource name

*__param__*: The identifier of the resource

*__param__*: The options of the call

*__returns__*: The deleted resource

#### Type declaration
▸(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| postData | `any` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___
<a id="get"></a>

###  get

**● get**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:39*

Retrieve informations on a certain type of resource ofs ARXivar
*__param__*: The resource name

*__param__*: The options of the call

*__returns__*: The resource informations

#### Type declaration
▸(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___
<a id="getbytearray"></a>

###  getByteArray

**● getByteArray**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:74*

Retrieve a download stream for a certain resource of ARXivar
*__param__*: The resource name

*__param__*: The options of the call

*__returns__*: The download stream for the resource

#### Type declaration
▸(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___
<a id="getpost"></a>

###  getPost

**● getPost**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:67*

Retrieve informations of a certain resource of ARXivar
*__param__*: The resource name

*__param__*: Additional parameter of the call

*__param__*: The options of the call

*__returns__*: The resource value

#### Type declaration
▸(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| postData | `any` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___
<a id="getvalue"></a>

###  getValue

**● getValue**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:58*

Retrieve the value of a certain resource of ARXivar
*__param__*: The resource name

*__param__*: The options of the call

*__returns__*: The resource value

#### Type declaration
▸(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___
<a id="querywithoptions"></a>

###  queryWithOptions

**● queryWithOptions**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:47*

Retrieve informations on a certain type of resource of ARXivar with additional options
*__param__*: The options of the call

*__param__*: The resource name

*__param__*: The additional options of the call

*__returns__*: The resource informations

#### Type declaration
▸(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*, httpOptions: *`any`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| options | [HttpOptions](../interfaces/httpoptions.md) |
| httpOptions | `any` |

**Returns:** `any`

___
<a id="save"></a>

###  save

**● save**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:82*

Submit and save the selected resource on Arxivar
*__param__*: The resource name

*__param__*: The resource data

*__param__*: The options of the call

*__returns__*: The resource

#### Type declaration
▸(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| postData | `any` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___
<a id="update"></a>

###  update

**● update**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:90*

Submit and update the selected resource on Arxivar
*__param__*: The resource name

*__param__*: The resource data

*__param__*: The options of the call

*__returns__*: The resource

#### Type declaration
▸(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| postData | `any` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___
<a id="updatecollection"></a>

###  updateCollection

**● updateCollection**: *`function`*

*Defined in services/externals/ArxivarResourceService.ts:98*

Submit and update a collection of resources on Arxivar
*__param__*: The resource name

*__param__*: The resources data collection

*__param__*: The options of the call

*__returns__*: The resources

#### Type declaration
▸(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| resourceName | `string` |
| postData | `any` |
| options | [HttpOptions](../interfaces/httpoptions.md) |

**Returns:** `any`

___

