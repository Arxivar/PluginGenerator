[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [UserService](../modules/userservice.md) / UserService

# Class: UserService

[UserService](../modules/userservice.md).UserService

This module contains the essential methods to access the information of the user currently logged into ARXivar.
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

## Table of contents

### Methods

- [getAoo](userservice.userservice-1.md#getaoo)
- [getAvatar](userservice.userservice-1.md#getavatar)
- [getDatabase](userservice.userservice-1.md#getdatabase)
- [getDatabaseInfo](userservice.userservice-1.md#getdatabaseinfo)
- [getDescription](userservice.userservice-1.md#getdescription)
- [getLang](userservice.userservice-1.md#getlang)
- [getProvider](userservice.userservice-1.md#getprovider)
- [getRoles](userservice.userservice-1.md#getroles)
- [getServerName](userservice.userservice-1.md#getservername)
- [getStatus](userservice.userservice-1.md#getstatus)
- [getUserGroup](userservice.userservice-1.md#getusergroup)
- [getUserId](userservice.userservice-1.md#getuserid)
- [getUserName](userservice.userservice-1.md#getusername)
- [getUserNameComplete](userservice.userservice-1.md#getusernamecomplete)
- [hasAvatar](userservice.userservice-1.md#hasavatar)
- [hasRole](userservice.userservice-1.md#hasrole)
- [isInRole](userservice.userservice-1.md#isinrole)
- [isNotAdmin](userservice.userservice-1.md#isnotadmin)

## Methods

### getAoo

▸ **getAoo**(): *string*

Get the Aoo of the user

**Returns:** *string*

The Aoo name

___

### getAvatar

▸ **getAvatar**(): *string*

Get the user's avatar

**Returns:** *string*

The base64 code of the user's avatar

___

### getDatabase

▸ **getDatabase**(): *string*

Get the database name

**Returns:** *string*

The database name

___

### getDatabaseInfo

▸ **getDatabaseInfo**(): *Promise*<[*UserService*](userservice.userservice-1.md)\>

DEPRECATED Use [ArxivarUserServiceCreator.create](arxivaruserservicecreator.arxivaruserservicecreator-1.md#create) instead.
Load the database information

**Returns:** *Promise*<[*UserService*](userservice.userservice-1.md)\>

___

### getDescription

▸ **getDescription**(): *string*

Get the description of the user

**Returns:** *string*

The description of the user

___

### getLang

▸ **getLang**(): *string*

Get the language of the user

**Returns:** *string*

The language of the user

___

### getProvider

▸ **getProvider**(): *string*

Get the database provider name

**Returns:** *string*

The database provider name

___

### getRoles

▸ **getRoles**(): { `roleName`: *string* ; `value`: *boolean*  }[]

Get the roles of the user

**Returns:** { `roleName`: *string* ; `value`: *boolean*  }[]

The user roles

___

### getServerName

▸ **getServerName**(): *string*

Get the server name

**Returns:** *string*

The server name

___

### getStatus

▸ **getStatus**(): *number*

Get the status of the user

**Returns:** *number*

The user id

___

### getUserGroup

▸ **getUserGroup**(): *object*

Retrieve information about the group of the current user

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `groupId` | *number* |
| `isAdmin` | *boolean* |
| `isProfiler` | *boolean* |
| `isUser` | *boolean* |
| `notSet` | *boolean* |

The user group

___

### getUserId

▸ **getUserId**(): *string*

Get the id of the user

**Returns:** *string*

The user id

___

### getUserName

▸ **getUserName**(): *string*

Get the name of the user

**Returns:** *string*

The username

___

### getUserNameComplete

▸ **getUserNameComplete**(): *string*

Get the complete name of the user

**Returns:** *string*

The complete name of the user

___

### hasAvatar

▸ **hasAvatar**(): *boolean*

Get the information about the user's avatar status

**Returns:** *boolean*

The state of the avatar

___

### hasRole

▸ **hasRole**(`roleName`: *any*): *any*

DEPRECATED Use [UserService.isInRole](userservice.userservice-1.md#isinrole) instead.
Check if the currently logged user has a certain role enabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | *any* | object containing the name of the role |

**Returns:** *any*

true if the user has the selected roles, false otherwise

___

### isInRole

▸ **isInRole**(`roleName`: *string*): *boolean*

Check if the currently logged user has a certain role enabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | *string* | the name of the role |

**Returns:** *boolean*

true if the user has the roles, false otherwise

___

### isNotAdmin

▸ **isNotAdmin**(): *boolean*

Check if the user currently logged is not an administrator

**Returns:** *boolean*

false if the user is administrator, true otherwise
