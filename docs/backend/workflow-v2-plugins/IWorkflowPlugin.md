#### [Abletech.Workflow.Plugins](index.md 'index')
### [Abletech.Workflow.Plugins](Abletech_Workflow_Plugins.md 'Abletech.Workflow.Plugins')
## IWorkflowPlugin Interface
Defines a generic workflow plugin  
```csharp
public interface IWorkflowPlugin :
System.ComponentModel.DataAnnotations.IValidatableObject,
System.IDisposable
```

Derived  
&#8627; [WorkflowPluginBase&lt;TContext&gt;](WorkflowPluginBase_TContext_.md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;')  

Implements [System.ComponentModel.DataAnnotations.IValidatableObject](https://docs.microsoft.com/en-us/dotnet/api/System.ComponentModel.DataAnnotations.IValidatableObject 'System.ComponentModel.DataAnnotations.IValidatableObject'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')  

| Methods | |
| :--- | :--- |
| [EnableAdvancedConfiguration(IEnumerable&lt;WorkflowPluginConfigurationItem&gt;)](IWorkflowPlugin_EnableAdvancedConfiguration(IEnumerable_WorkflowPluginConfigurationItem_).md 'Abletech.Workflow.Plugins.IWorkflowPlugin.EnableAdvancedConfiguration(System.Collections.Generic.IEnumerable&lt;Abletech.Workflow.Plugins.Configuration.WorkflowPluginConfigurationItem&gt;)') | Enables the advanced configuration for the current plugin instance<br/> |
| [ExecuteAdvancedConfigurationCommandAsync(WorkflowAdvancedConfigurationCommandRequest)](IWorkflowPlugin_ExecuteAdvancedConfigurationCommandAsync(WorkflowAdvancedConfigurationCommandRequest).md 'Abletech.Workflow.Plugins.IWorkflowPlugin.ExecuteAdvancedConfigurationCommandAsync(Abletech.Workflow.Plugins.Configuration.WorkflowAdvancedConfigurationCommandRequest)') | Performs some utility operations needed for the advanced configuration<br/> |
| [ExecuteAsync(IWorkflowPluginContext)](IWorkflowPlugin_ExecuteAsync(IWorkflowPluginContext).md 'Abletech.Workflow.Plugins.IWorkflowPlugin.ExecuteAsync(Abletech.Workflow.Plugins.IWorkflowPluginContext)') | Executes the plugin<br/> |
| [InitializeAsync()](IWorkflowPlugin_InitializeAsync().md 'Abletech.Workflow.Plugins.IWorkflowPlugin.InitializeAsync()') | Intializes the plugin<br/> |
| [UseLogger(ILogger)](IWorkflowPlugin_UseLogger(ILogger).md 'Abletech.Workflow.Plugins.IWorkflowPlugin.UseLogger(ILogger)') | Sets the logger to use<br/> |
