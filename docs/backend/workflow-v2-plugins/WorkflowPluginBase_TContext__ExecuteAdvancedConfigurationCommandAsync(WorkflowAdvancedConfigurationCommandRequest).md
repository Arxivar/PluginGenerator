#### [Abletech.Workflow.Plugins](index.md 'index')
### [Abletech.Workflow.Plugins](Abletech_Workflow_Plugins.md 'Abletech.Workflow.Plugins').[WorkflowPluginBase&lt;TContext&gt;](WorkflowPluginBase_TContext_.md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;')
## WorkflowPluginBase&lt;TContext&gt;.ExecuteAdvancedConfigurationCommandAsync(WorkflowAdvancedConfigurationCommandRequest) Method
When overriden, it allows to specify some custom operations needed for the advanced configuration  
```csharp
public virtual System.Threading.Tasks.Task<Abletech.Workflow.Plugins.Configuration.WorkflowAdvancedConfigurationCommandResponse> ExecuteAdvancedConfigurationCommandAsync(Abletech.Workflow.Plugins.Configuration.WorkflowAdvancedConfigurationCommandRequest request);
```
#### Parameters
<a name='Abletech_Workflow_Plugins_WorkflowPluginBase_TContext__ExecuteAdvancedConfigurationCommandAsync(Abletech_Workflow_Plugins_Configuration_WorkflowAdvancedConfigurationCommandRequest)_request'></a>
`request` [WorkflowAdvancedConfigurationCommandRequest](WorkflowAdvancedConfigurationCommandRequest.md 'Abletech.Workflow.Plugins.Configuration.WorkflowAdvancedConfigurationCommandRequest')  
The input parameters needed by the operation to execute
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[WorkflowAdvancedConfigurationCommandResponse](WorkflowAdvancedConfigurationCommandResponse.md 'Abletech.Workflow.Plugins.Configuration.WorkflowAdvancedConfigurationCommandResponse')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
A generic model which maps the result of the operation

Implements [ExecuteAdvancedConfigurationCommandAsync(WorkflowAdvancedConfigurationCommandRequest)](IWorkflowPlugin_ExecuteAdvancedConfigurationCommandAsync(WorkflowAdvancedConfigurationCommandRequest).md 'Abletech.Workflow.Plugins.IWorkflowPlugin.ExecuteAdvancedConfigurationCommandAsync(Abletech.Workflow.Plugins.Configuration.WorkflowAdvancedConfigurationCommandRequest)')  
