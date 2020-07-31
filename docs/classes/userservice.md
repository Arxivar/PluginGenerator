[ARXivar Documentation](../globals.md) › [UserService](userservice.md)

# Class: UserService

This module contains the essential methods to access the informations of the user currently logged into ARXivar.
An instance of this module must be generated using the arxivarUserServiceCreator module.
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarUserServiceCreator',
	function(arxivarUserServiceCreator) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				arxivarUserServiceCreator.create().then((userService) => {
					scope.userId = userService.getUserId();
				});
			}
		};
	}
]);
```

## Hierarchy

* **UserService**

## Index

### Methods

* [getAoo](userservice.md#getaoo)
* [getAvatar](userservice.md#getavatar)
* [getDatabase](userservice.md#getdatabase)
* [getDatabaseInfo](userservice.md#getdatabaseinfo)
* [getDescription](userservice.md#getdescription)
* [getLang](userservice.md#getlang)
* [getProvider](userservice.md#getprovider)
* [getRoles](userservice.md#getroles)
* [getServerName](userservice.md#getservername)
* [getStatus](userservice.md#getstatus)
* [getUserGroup](userservice.md#getusergroup)
* [getUserId](userservice.md#getuserid)
* [getUserName](userservice.md#getusername)
* [getUserNameComplete](userservice.md#getusernamecomplete)
* [hasAvatar](userservice.md#hasavatar)
* [hasRole](userservice.md#hasrole)
* [isInRole](userservice.md#isinrole)
* [isNotAdmin](userservice.md#isnotadmin)

## Methods

###  getAoo

▸ **getAoo**(): *string*

Get the Aoo of the user

**Returns:** *string*

The Aoo name

___

###  getAvatar

▸ **getAvatar**(): *string*

Get the user's avatar

**Returns:** *string*

The base64 code of the user's avatar

___

###  getDatabase

▸ **getDatabase**(): *string*

Get the database name

**Returns:** *string*

The database name

___

###  getDatabaseInfo

▸ **getDatabaseInfo**(): *Promise‹[UserService](userservice.md)›*

DEPRECATED Use [ArxivarUserServiceCreator.create](arxivaruserservicecreator.md#create) instead.
Load the database informations

**Returns:** *Promise‹[UserService](userservice.md)›*

___

###  getDescription

▸ **getDescription**(): *string*

Get the description of the user

**Returns:** *string*

The description of the user

___

###  getLang

▸ **getLang**(): *string*

Get the language of the user

**Returns:** *string*

The language of the user

___

###  getProvider

▸ **getProvider**(): *string*

Get the database provider name

**Returns:** *string*

The database provider name

___

###  getRoles

▸ **getRoles**(): *Array‹object›*

Get the roles of the user

**Returns:** *Array‹object›*

The user roles

___

###  getServerName

▸ **getServerName**(): *string*

Get the server name

**Returns:** *string*

The server name

___

###  getStatus

▸ **getStatus**(): *number*

Get the status of the user

**Returns:** *number*

The user id

___

###  getUserGroup

▸ **getUserGroup**(): *object*

Retrieve informations about the group of the current user

**Returns:** *object*

The user group

* **groupId**: *number*

* **isAdmin**: *boolean*

* **isProfiler**: *boolean*

* **isUser**: *boolean*

* **notSet**: *boolean*

___

###  getUserId

▸ **getUserId**(): *string*

Get the id of the user

**Returns:** *string*

The user id

___

###  getUserName

▸ **getUserName**(): *string*

Get the name of the user

**Returns:** *string*

The username

___

###  getUserNameComplete

▸ **getUserNameComplete**(): *string*

Get the complete name of the user

**Returns:** *string*

The complete name of the user

___

###  hasAvatar

▸ **hasAvatar**(): *boolean*

Get the information about the user's avatar status

**Returns:** *boolean*

The state of the avatar

___

###  hasRole

▸ **hasRole**(`roleName`: any): *any*

DEPRECATED Use [UserService.isInRole](userservice.md#isinrole) instead.
Check if the currently logged user has a certain role enabled

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roleName` | any | object containing the name of the role |

**Returns:** *any*

true if the user has the selected roles, false otherwise

___

###  isInRole

▸ **isInRole**(`roleName`: string): *boolean*

Check if the currently logged user has a certain role enabled

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roleName` | string | the name of the role |

**Returns:** *boolean*

true if the user has the roles, false otherwise

___

###  isNotAdmin

▸ **isNotAdmin**(): *boolean*

Check if the user currently logged is not an administrator

**Returns:** *boolean*

false if the user is administrator, true otherwise
