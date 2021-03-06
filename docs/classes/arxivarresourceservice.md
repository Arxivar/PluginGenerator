[ARXivar Documentation](../globals.md) › [ArxivarResourceService](arxivarresourceservice.md)

# Class: ArxivarResourceService

This module contains the essential method for an AngularJS application to consume the ARXivar api calls.
The methods exposed permits to create,read,edit and update resources from ARXivar.
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

* **ArxivarResourceService**

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

## Methods

###  delete

▸ **delete**(`resourceName`: string, `postData`: any, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Delete the selected resource from Arxivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`postData` | any | The identifier of the resource |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The deleted resource

___

###  get

▸ **get**(`resourceName`: string, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Retrieve informations on a certain type of resource ofs ARXivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The resource informations

___

###  getByteArray

▸ **getByteArray**(`resourceName`: string, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Retrieve a download stream for a certain resource of ARXivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The download stream for the resource

___

###  getPost

▸ **getPost**(`resourceName`: string, `postData`: any, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Retrieve informations of a certain resource of ARXivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`postData` | any | Additional parameter of the call |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The resource value

___

###  getValue

▸ **getValue**(`resourceName`: string, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Retrieve the value of a certain resource of ARXivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The resource value

___

###  queryWithOptions

▸ **queryWithOptions**(`resourceName`: string, `options`: [HttpOptions](../interfaces/httpoptions.md), `httpOptions`: any): *Promise‹any›*

Retrieve informations on a certain type of resource of ARXivar with additional options

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |
`httpOptions` | any | The additional options of the call |

**Returns:** *Promise‹any›*

The resource informations

___

###  save

▸ **save**(`resourceName`: string, `postData`: any, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Submit and save the selected resource on Arxivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`postData` | any | The resource data |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The resource

___

###  update

▸ **update**(`resourceName`: string, `postData`: any, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Submit and update the selected resource on Arxivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`postData` | any | The resource data |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The resource

___

###  updateCollection

▸ **updateCollection**(`resourceName`: string, `postData`: any, `options`: [HttpOptions](../interfaces/httpoptions.md)): *Promise‹any›*

Submit and update a collection of resources on Arxivar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceName` | string | The resource name |
`postData` | any | The resources data collection |
`options` | [HttpOptions](../interfaces/httpoptions.md) | The options of the call |

**Returns:** *Promise‹any›*

The resources
