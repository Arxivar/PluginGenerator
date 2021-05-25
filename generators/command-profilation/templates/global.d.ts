import * as arxInterfaces from './Interfaces';
import moment from 'moment';


declare global {
	const angular: angular.IAngularStatic;
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

	type ICommandParamsField = {
		visible: boolean;
		value: any;
		name: string;
		className: string;
		description: string;
		externalId: any;
	};

	type IProfilationCommandParams = { docnumber?: number; elementId: string, fields: ICommandParamsField[] }
	type IMoment = typeof moment;
	type IRouteParams = { queryParams: string };
	type ISettingsType = 'string' | 'number' | 'boolean' | 'date';
	type ICustomSettings = { name: string, description: string, defaultValue: string, type: ISettingsType };
	type IUserSettings = { name: string, description: string, defaultValue: string, type: ISettingsType };

	interface IPluginProfilation {
		new(requiredSettings: IRequiredSettings, customSettings: ICustomSettings[], userSettings: IUserSettings[]): IPluginProfilation,
		canRun: (params: IProfilationCommandParams) => Promise<boolean>,
		run: (params: IProfilationCommandParams) => Promise<any>
	}

}
