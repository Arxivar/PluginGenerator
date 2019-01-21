[ARXivar Documentation](../README.md) > [UserService](../classes/userservice.md)

# Class: UserService




This module contains the essential methods to access the informations of the user currently logged into ARXivar.

```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
    'userService',
    function(userService) {
        return {
            restrict: 'E',
            scope: {
                instanceId: '@',
                desktopId: '=?'
            },
            templateUrl: 'WidgetDesktopPlugin.html',
            link: function(scope) {
                userService.getDatabaseInfo().then(() => {
                    scope.userId = userService.getUserId();
                });
            }
        };
    }
]);
```


## Hierarchy

**UserService**




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
* [isNotAdmin](userservice.md#isnotadmin)



---

## Methods

<a id="getaoo"></a>

###  getAoo

▸ **getAoo**(): `string`



*Defined in services/externals/UserService.ts:112*



Get the Aoo of the user




**Returns:** `string`
The Aoo name






___
<a id="getavatar"></a>

###  getAvatar

▸ **getAvatar**(): `string`



*Defined in services/externals/UserService.ts:91*



Get the user's avatar




**Returns:** `string`
The base64 code of the user's avatar






___
<a id="getdatabase"></a>

###  getDatabase

▸ **getDatabase**(): `string`



*Defined in services/externals/UserService.ts:119*



Get the database name




**Returns:** `string`
The database name






___
<a id="getdatabaseinfo"></a>

###  getDatabaseInfo

▸ **getDatabaseInfo**(): [UserService](userservice.md)



*Defined in services/externals/UserService.ts:171*



Load the database informations




**Returns:** [UserService](userservice.md)





___
<a id="getdescription"></a>

###  getDescription

▸ **getDescription**(): `string`



*Defined in services/externals/UserService.ts:70*



Get the description of the user




**Returns:** `string`
The description of the user






___
<a id="getlang"></a>

###  getLang

▸ **getLang**(): `string`



*Defined in services/externals/UserService.ts:84*



Get the language of the user




**Returns:** `string`
The language of the user






___
<a id="getprovider"></a>

###  getProvider

▸ **getProvider**(): `string`



*Defined in services/externals/UserService.ts:133*



Get the database provider name




**Returns:** `string`
The database provider name






___
<a id="getroles"></a>

###  getRoles

▸ **getRoles**(): `Array`<`object`>



*Defined in services/externals/UserService.ts:105*



Get the roles of the user




**Returns:** `Array`<`object`>
The user roles






___
<a id="getservername"></a>

###  getServerName

▸ **getServerName**(): `string`



*Defined in services/externals/UserService.ts:126*



Get the server name




**Returns:** `string`
The server name






___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): `number`



*Defined in services/externals/UserService.ts:98*



Get the status of the user




**Returns:** `number`
The user id






___
<a id="getusergroup"></a>

###  getUserGroup

▸ **getUserGroup**(): `object`



*Defined in services/externals/UserService.ts:36*



Retrieve informations about the group of the current user




**Returns:** `object`
The user group






___
<a id="getuserid"></a>

###  getUserId

▸ **getUserId**(): `number`



*Defined in services/externals/UserService.ts:49*



Get the id of the user




**Returns:** `number`
The user id






___
<a id="getusername"></a>

###  getUserName

▸ **getUserName**(): `string`



*Defined in services/externals/UserService.ts:56*



Get the name of the user




**Returns:** `string`
The username






___
<a id="getusernamecomplete"></a>

###  getUserNameComplete

▸ **getUserNameComplete**(): `string`



*Defined in services/externals/UserService.ts:63*



Get the complete name of the user




**Returns:** `string`
The complete name of the user






___
<a id="hasavatar"></a>

###  hasAvatar

▸ **hasAvatar**(): `boolean`



*Defined in services/externals/UserService.ts:77*



Get the information about the user's avatar status




**Returns:** `boolean`
The state of the avatar






___
<a id="hasrole"></a>

###  hasRole

▸ **hasRole**(roleName: *`any`*): `any`



*Defined in services/externals/UserService.ts:216*



Check if the currently logged user has a certain role enabled



**Parameters:**


| Name | Type | Description |
| ------ | ------ | ------ |
| roleName | `any` |  object containing the name of the role |






**Returns:** `any`
true if the user has the selected roles, false otherwise






___
<a id="isnotadmin"></a>

###  isNotAdmin

▸ **isNotAdmin**(): `boolean`



*Defined in services/externals/UserService.ts:208*



Check if the user currently logged is not an administrator




**Returns:** `boolean`
false if the user is administrator, true otherwise






___

