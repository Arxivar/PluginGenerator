import * as arxInterfaces from './Interfaces';
import moment from 'moment';
import LoDashStatic from 'lodash';




declare global {
	const angular: angular.IAngularStatic;
	type IArxivarDocumentsService = arxInterfaces.IArxivarDocumentsService;
	type IArxivarNotifierService = arxInterfaces.IArxivarNotifierService;
	type IArxivarResourceService = arxInterfaces.IArxivarResourceService;
	type IWorkflowResourceService = arxInterfaces.IArxivarResourceService;
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
	type ILoDash = typeof LoDashStatic;
	type IRouteParams = { queryParams: string };
	type ISettingsType = 'string' | 'number' | 'boolean' | 'date';
	type ICustomSettings = { name: string, description: string, defaultValue: string, type: ISettingsType };
	type IUserSettings = { name: string, description: string, defaultValue: string, type: ISettingsType };

	interface IPluginRoute {
		new(requiredSettings: IRequiredSettings, customSettings: ICustomSettings[], userSettings: IUserSettings[]): IPluginRoute
	}

	type IConfiguration = IConfigurationDynamic<arxInterfaces.ConfigurationDataTypeEnum>;

	type IConfigurationDynamicBase<T extends arxInterfaces.ConfigurationDataTypeEnum> = { name: string, dataType: T };

	type IConfigurationDynamic<T extends arxInterfaces.ConfigurationDataTypeEnum> =
		T extends arxInterfaces.ConfigurationDataTypeEnum.Bool ? IConfigurationDynamicBase<T> & { value?: boolean } :
		T extends arxInterfaces.ConfigurationDataTypeEnum.Datetime ? IConfigurationDynamicBase<T> & { value?: string } :
		T extends arxInterfaces.ConfigurationDataTypeEnum.Decimal ? IConfigurationDynamicBase<T> & { value?: number } :
		T extends arxInterfaces.ConfigurationDataTypeEnum.Int ? IConfigurationDynamicBase<T> & { value?: number } :
		T extends arxInterfaces.ConfigurationDataTypeEnum.String ? IConfigurationDynamicBase<T> & { value?: string } :
		never
}
