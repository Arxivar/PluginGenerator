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

### Methods

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

## Methods

<a id="delete"></a>

###  delete

▸ **delete**(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:128*

Delete the selected resource from Arxivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| postData | `any` |  The identifier of the resource |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The deleted resource

___
<a id="get"></a>

###  get

▸ **get**(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:56*

Retrieve informations on a certain type of resource ofs ARXivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The resource informations

___
<a id="getbytearray"></a>

###  getByteArray

▸ **getByteArray**(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:91*

Retrieve a download stream for a certain resource of ARXivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The download stream for the resource

___
<a id="getpost"></a>

###  getPost

▸ **getPost**(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:82*

Retrieve informations of a certain resource of ARXivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| postData | `any` |  Additional parameter of the call |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The resource value

___
<a id="getvalue"></a>

###  getValue

▸ **getValue**(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:73*

Retrieve the value of a certain resource of ARXivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The resource value

___
<a id="querywithoptions"></a>

###  queryWithOptions

▸ **queryWithOptions**(resourceName: *`string`*, options: *[HttpOptions](../interfaces/httpoptions.md)*, httpOptions: *`any`*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:65*

Retrieve informations on a certain type of resource of ARXivar with additional options

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |
| httpOptions | `any` |  The additional options of the call |

**Returns:** `Promise`<`any`>
The resource informations

___
<a id="save"></a>

###  save

▸ **save**(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:100*

Submit and save the selected resource on Arxivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| postData | `any` |  The resource data |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The resource

___
<a id="update"></a>

###  update

▸ **update**(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:109*

Submit and update the selected resource on Arxivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| postData | `any` |  The resource data |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The resource

___
<a id="updatecollection"></a>

###  updateCollection

▸ **updateCollection**(resourceName: *`string`*, postData: *`any`*, options: *[HttpOptions](../interfaces/httpoptions.md)*): `Promise`<`any`>

*Defined in services/externals/ArxivarResourceService.ts:119*

Submit and update a collection of resources on Arxivar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resourceName | `string` |  The resource name |
| postData | `any` |  The resources data collection |
| options | [HttpOptions](../interfaces/httpoptions.md) |  The options of the call |

**Returns:** `Promise`<`any`>
The resources

___

