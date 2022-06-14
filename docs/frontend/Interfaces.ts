/**
 * @module Interfaces
 */

export interface IHttpOptions {
	/**
	 * @property Defines if the ARXivar loader should be shown during the call execution
	 */
	openloader: boolean;
	/**
	 * @property Defines if the eventual call error should be shown
	 */
	hideUserMessageError: boolean;
}


export interface IArxivarDocumentsService {
	/**
	*  This method converts an api call response of type arraybuffer into a file.
	*
	* @param data The data of the call.
	* @param status The status of the call.
	* @param headers The headers of the call.
	  * @returns The file download Promise.
	*/
	downloadStream: (data: any, status: any, headers: any) => Promise<any>;

	/**
	* Download the document linked to a profile.
	*
	* @param docnumber The docnumber of the profile.
	* @returns The file download Promise.
	*/
	getDocumentByDocnumber: (docnumber: number) => Promise<any>;

	/**
	* Download the document linked to a profile with a specific revision.
	*
	* @param revisionId The ID of the revision.
	* @returns The file download Promise.
	*/
	getRevisionByID: (revisionId: number) => Promise<any>;
}

export interface IArxivarResourceService {

	webApiUrl: string;

	/**
	 * Retrieve information on a certain type of resource ofs ARXivar
	 *
	 * @param resourceName The resource name
	 * @param options The options of the call
	 * @returns The resource information
	*/
	get: (resourceName: string, options: IHttpOptions) => Promise<any>;

	/**
	* Retrieve information on a certain type of resource of ARXivar with additional options
	* @param options The options of the call
	* @param resourceName The resource name
	* @param httpOptions The additional options of the call
	* @returns The resource information
	*/
	queryWithOptions: (resourceName: string, options: IHttpOptions, IHttpOptions: any) => Promise<any>;

	/**
	 * Retrieve the value of a certain resource of ARXivar
	 * @param resourceName The resource name
	 * @param options The options of the call
	 * @returns The resource value
	 */
	getValue: (resourceName: string, options: IHttpOptions) => Promise<any>;

	/**
	* Retrieve information of a certain resource of ARXivar
	* @param resourceName The resource name
	* @param postData Additional parameter of the call
	* @param options The options of the call
	* @returns The resource value
	*/
	getPost: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;


	/**
	  * Retrieve a download stream for a certain resource of ARXivar
	  * @param resourceName The resource name
	  * @param options The options of the call
	  * @returns The download stream for the resource
	  */
	getByteArray: (resourceName: string, options: IHttpOptions) => Promise<any>;

	/**
	  * Retrieve a download stream for a certain resource of ARXivar
	  * @param resourceName The resource name
	  * @param options The options of the call
	  * @returns The download stream for the resource
	  */
	getPostByteArray: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;
	/**
	 * Submit and save the selected resource on Arxivar
	 * @param resourceName The resource name
	 * @param postData The resource data
	 * @param options The options of the call
	 * @returns The resource
	 */
	save: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;

	/**
	 * Submit and update the selected resource on Arxivar
	 * @param resourceName The resource name
	 * @param postData The resource data
	 * @param options The options of the call
	 * @returns The resource
	 */
	update: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;

	/**
	 * Submit and update a collection of resources on Arxivar
	 * @param resourceName The resource name
	 * @param postData The resources data collection
	 * @param options The options of the call
	 * @returns The resources
	 */
	updateCollection: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;

	/**
	 * Delete the selected resource from Arxivar
	 * @param resourceName The resource name
	 * @param postData The identifier of the resource
	 * @param options The options of the call
	 * @returns The deleted resource
	 */
	delete: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;
}

export interface IArxivarNotifierService {
	/**
	 * Notify error message.
	 *
	 * @param message The docnumber of the profile.
	*/
	notifyError: (message: string) => void;

	/**
	* Notify warning message.
	*
	* @param message The docnumber of the profile.
	*/
	notifyWarning: (message: string) => void;

	/**
	* Notify info message.
	*
	* @param message The docnumber of the profile.
	*/
	notifyInfo: (message: string) => void;

	/**
	 * Notify success message.
	 *
	 * @param message The docnumber of the profile.
	*/
	notifySuccess: (message: string) => void;
}

export interface IUserService {
	/**
	 * Retrieve information about the group of the current user
	 * @returns The user group
	 */
	getUserGroup: () => { groupId: number; notSet: boolean; isUser: boolean; isAdmin: boolean; isProfiler: boolean };

	/**
	 * Get the id of the user
	 * @returns The user id
	 */
	getUserId: () => string;

	/**
	* Get the name of the user
	* @returns The username
	*/
	getUserName: () => string;

	/**
	 * Get the complete name of the user
	 * @returns The complete name of the user
	 */
	getUserNameComplete: () => string;

	/**
	* Get the description of the user
	* @returns The description of the user
	*/
	getDescription: () => string;

	/**
	 * Get the information about the user's avatar status
	 * @returns The state of the avatar
	 */
	hasAvatar: () => boolean;

	/**
	 * Get the language of the user
	 * @returns The language of the user
	 */
	getLang: () => string;

	/**
	* Get the user's avatar
	* @returns The base64 code of the user's avatar
	*/
	getAvatar: () => string;

	/**
	 * Get the status of the user
	 * @returns The user id
	 */
	getStatus: () => number;

	/**
	 * Get the roles of the user
	 * @returns The user roles
	 */
	getRoles: () => { roleName: string; value: boolean }[];

	/**
	 * Get the Aoo of the user
	 * @returns The Aoo name
	 */
	getAoo: () => string;

	/**
	 * Get the database name
	 * @returns The database name
	 */
	getDatabase: () => string;

	/**
	* Get the server name
	* @returns The server name
	*/
	getServerName: () => string;
	/**
	 * Get the database provider name
	 * @returns The database provider name
	 */
	getProvider: () => string;
	/**
	 * Check if the user currently logged is not an administrator
	 * @returns false if the user is administrator, true otherwise
	 */
	isNotAdmin: () => Promise<boolean> | boolean;
	/**
	 * Check if the currently logged user has a certain role enabled
	 * @param roleName the name of the role
	 * @returns true if the user has the roles, false otherwise
	 */
	isInRole: (roleName: string) => boolean;
	/**
	 * DEPRECATED Use {@link ArxivarUserServiceCreator.create} instead.
	 * Load the database information
	 */
	getDatabaseInfo: () => Promise<IUserService>;

	/**
	* DEPRECATED Use {@link UserService.isInRole} instead.
	* Check if the currently logged user has a certain role enabled
	* @param roleName object containing the name of the role
	* @returns true if the user has the selected roles, false otherwise
	*/
	hasRole: (roleName: any) => any;
}


export interface IArxivarResourceService {

	/**
	 * Retrieve information on a certain type of resource ofs ARXivar
	 *
	 * @param resourceName The resource name
	 * @param options The options of the call
	 * @returns The resource information
	*/
	get: (resourceName: string, options: IHttpOptions) => Promise<any>;

	/**
	* Retrieve information on a certain type of resource of ARXivar with additional options
	* @param options The options of the call
	* @param resourceName The resource name
	* @param httpOptions The additional options of the call
	* @returns The resource information
	*/
	queryWithOptions: (resourceName: string, options: IHttpOptions, IHttpOptions: any) => Promise<any>;

	/**
	 * Retrieve the value of a certain resource of ARXivar
	 * @param resourceName The resource name
	 * @param options The options of the call
	 * @returns The resource value
	 */
	getValue: (resourceName: string, options: IHttpOptions) => Promise<any>;

	/**
	* Retrieve information of a certain resource of ARXivar
	* @param resourceName The resource name
	* @param postData Additional parameter of the call
	* @param options The options of the call
	* @returns The resource value
	*/
	getPost: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;

	/**
	 * Retrieve a download stream for a certain resource of ARXivar
	 * @param resourceName The resource name
	 * @param options The options of the call
	 * @returns The download stream for the resource
	 */
	getByteArray: (resourceName: string, options: IHttpOptions) => Promise<any>;

	/**
	 * Retrieve a download stream for a certain resource of ARXivar
	 * @param resourceName The resource name
	 * @param postData The resource data
	 * @param options The options of the call
	 * @returns The download stream for the resource
	 */
	getPostByteArray: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;
	/**
	 * Submit and save the selected resource on Arxivar
	 * @param resourceName The resource name
	 * @param postData The resource data
	 * @param options The options of the call
	 * @returns The resource
	 */
	save: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;

	/**
	 * Submit and update the selected resource on Arxivar
	 * @param resourceName The resource name
	 * @param postData The resource data
	 * @param options The options of the call
	 * @returns The resource
	 */
	update: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;
	/**
	 * Submit and update a collection of resources on Arxivar
	 * @param resourceName The resource name
	 * @param postData The resources data collection
	 * @param options The options of the call
	 * @returns The resources
	 */
	updateCollection: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;
	/**
	 * Delete the selected resource from Arxivar
	 * @param resourceName The resource name
	 * @param postData The identifier of the resource
	 * @param options The options of the call
	 * @returns The deleted resource
	 */
	delete: (resourceName: string, postData: any, options: IHttpOptions) => Promise<any>;
}

export interface IArxivarRouteService {
	/**
	* Retrieve the URL's profilation route that contains the bufferId of the file to upload.
	*
	  * @param bufferId The bufferId of uploaded file.
	* @param fileName The fileName of uploaded file.
	  * @returns The url of profilation route.
	*/
	getURLProfilation: ({ bufferId, fileName }?: { bufferId: string; fileName: string }) => string;

	/**
	* Retrieve the URL's mask route that contains the bufferId of the file to upload
	*
	* @param id The mask Id.
	  * @param bufferId The bufferId of uploaded file.
	* @param fileName The fileName of uploaded file.
	  * @returns The url of mask route.
	*/
	getMaskProfilation: (id: string, { bufferId, fileName }?: { bufferId: string; fileName: string }) => string;

	/**
	* Retrieve the URL of the profile route.
	*
	* @param docnumber The docnumber of the profile.
	* @returns The url of the profile route.
	*/
	getURLProfileReadonly: (docnumber: number) => string;

	/**
	* Retrieve the URL's route that contains the list of Revisions for a specific document
	*
	* @param docnumber The docnumber of the profile.
	* @returns The url of the revisions list of the profile.
	*/
	getURLRevisionsByDocnumber: (docnumber: number) => string;

	/**
	* Retrieve the URL's route of pluginRoute
	*
	* @param pluginId The pluginId.
	* @returns The url of the plugin route.
	*/
	getURLPluginRoute: (pluginId: string) => string;

	/**
	* Retrieve the partial URL of workflow pluginLink execute command
	*
	* @param pluginId The pluginId.
	* @returns The partial url of the plugin link execute command.
	*/
	getPartialURLPluginLinkExecuteCommand: (pluginId: string) => string;
	/**
	 *  Retrieve the URL of search with params.
	 *
	 * @param params The params for the search.
	 * @returns The url of the search with params.
	*/
	getSearchURLWithParams: (params: IUrlSearchParams) => string;
	/**
	 *  Retrieve the URL of view with params.
	 *
	 * @param params The params for the view.
	 * @param viewId The viewId.
	 * @returns The url of the view with params.
	*/
	getViewURLWithParams: (params: IUrlSearchParams, viewId: string) => string;

}
//UserService
export interface IArxivarUserServiceCreator {
	/**
	 * Create the UserService
	 */
	create: () => Promise<IUserService>;
}

export interface IUrlSearchParams {
	/**
	 * @property Defines the maximum number of results for the search. Set 0 for no limit. If not set,the default is that of the last search.
	 */
	maxResults?: number;
	/**
	 * @property Defines the search mode for from and to. 0 and 1 or. If not set, the default is that of the last search.
	 */
	fromTo?: number;
	/**
	 * @property Defines the fields to be set for the search.
	 */
	fields: IUrlFilter[];
}

export interface IUrlFilter {
	/**
	 * @property Defines the field name
	 */
	name: string;
	/**
	 * @property Defines the field operator
	 */
	operator: number;
	/**
	 * @property Defines the field value
	 */
	value1: any;
	/**
	 * @property Defines the second value of the field, if required by the operator set.
	 */
	value2?: any;
};

type PluginSettingsType = {
	name: string;
	value: string;
}[];
type PluginParamsObjectType = {
	pluginId: string;
	desktopId?: string;
	instanceId?: string;
};
type PluginSettingsObjectType = {
	customSettings: PluginSettingsType;
	userSettings: PluginSettingsType;
};
export type ScopeSettings = 'global' | 'user';
export interface IPluginService {

	/**
	* Get the settings of a plugin or of an instance of plugin.
	* @param ScopeSettings "global" for all users "user" for me
	* @param params: PluginParamsObjectType set pluginId, istanceId and desktop for this instances, set only pluginId for all instances
	* @returns The settings of plugin
	*/
	getSettings(scope: ScopeSettings, params: PluginParamsObjectType): Promise<any>;
	/**
	* Set the settings of a plugin or of an instance of plugin with UPSERT strategy.
	* @param ScopeSettings "global" for all users "user" for me
	* @param params: PluginParamsObjectType set pluginId,istanceId and desktop for this instances, set only pluginId for all instances
	* @param settings: PluginSettingsType array of object {name:"myParamName",vale:"myParamValue"}
	* @returns The settings of plugin
	*/
	saveSettings(scope: ScopeSettings, params: PluginParamsObjectType, settings: PluginSettingsType): Promise<any>;
	/**
	 * [@deprecated since version 2.4]
	 * Get the settings of a plugin or of an instance of plugin.
	 * If you set only the pluginId property in @param pluginSettingsObject you will get the global customSettings and the global userSettings
	 * If you set the pluginId, instanceId and desktopId properites in @param pluginSettingsObject you will get the global customSettings and the instace userSettings
	 * @param pluginSettingsObject
	 * @returns The customSettings (the global settings of plugin) and userSettings (the userSetting of plugin or widget instance plugin)
	 */
	getPluginByUser(pluginSettingsObject: PluginParamsObjectType): Promise<PluginSettingsObjectType>;

	/**
	* [@deprecated since version 2.4]
	* Save the user settings of a plugin or of an instance of plugin.
	* If you set only the pluginId property in @param pluginSettingsObject you will save the global userSettings
	* If you set the pluginId, instanceId and desktopId properites in @param pluginSettingsObject you will save the instace userSettings
	* @param pluginSettingsObject
	* @param userSettingValues
	* @returns The customSettings (the global settings of plugin) and userSettings (the userSetting of plugin or widget instance plugin)
	*/
	setPluginByUser(pluginSettingsObject: PluginParamsObjectType, userSettingValues: PluginSettingsType): Promise<void>;

}

export enum ConfigurationDataTypeEnum {
	String = 1,
	Int = 2,
	Datetime = 3,
	Bool = 4,
	Decimal = 5
}


