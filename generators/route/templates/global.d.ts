import * as angularjs from 'angularjs';
import * as arxInterfaces from './Interfaces';
import moment from 'moment';


declare global {
	const angular: angularjs.IAngularStatic;
	type IArxivarDocumentsService = arxInterfaces.IArxivarDocumentsService;
	type IArxivarNotifierService = arxInterfaces.IArxivarNotifierService;
	type IArxivarResourceService = arxInterfaces.IArxivarResourceService;
	type IArxivarRouteService = arxInterfaces.IArxivarRouteService;
	type IArxivarUserServiceCreator = arxInterfaces.IArxivarUserServiceCreator;
	type IHttpOptions = arxInterfaces.IHttpOptions;
	type IPluginService = arxInterfaces.IPluginService;
	type IUserService = arxInterfaces.IUserService;
	type IRequiredSettings = {
		id: string,
		name: string,
		icon: string,
		label: string,
		description: string,
		author: string,
		minVersion: string,
		useTypescript: boolean
	};

	
	type IMoment = typeof moment;
	type IRouteParams = { queryParams: string };
	type ISettingsType = 'string' | 'number' | 'boolean' | 'date';
	type ICustomSettings = { name: string, description: string, defaultValue: string, type: ISettingsType };
	type IUserSettings = { name: string, description: string, defaultValue: string, type: ISettingsType };

	interface IPluginRoute {
		new(requiredSettings: IRequiredSettings, customSettings: ICustomSettings[], userSettings: IUserSettings[]): IPluginRoute
	}
}
