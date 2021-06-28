using Abletech.WebApi.Client.ArxivarWorkflow.Api;
using Abletech.WebApi.Client.ArxivarWorkflow.Client;
using Abletech.WebApi.Client.ArxivarManagement.Api;
using Abletech.WebApi.Client.ArxivarManagement.Client;
using Abletech.WebApi.Client.Arxivar.Api;
using Abletech.WebApi.Client.Arxivar.Client;
using Abletech.Workflow.Plugins.Attributes;
using Abletech.Workflow.Plugins.Link;
using Abletech.Workflow.Plugins.Services;
using System.Threading.Tasks;
using System;


namespace <%= props.pluginname%>
{
	[Plugin("<%= props.id %>", "<%= props.label %>", "<%= props.minVersion %>", Description = "<%= props.description %>", Icon = "<%= props.icon %>")]
    public class <%= props.pluginname.capitalize()%> : WorkflowPluginLink
    {
 		<% for (let i=0; i<props.inputParameters.length; i++) { %>
		 /// <summary>
   		 /// <%= props.inputParameters[i].propertyType %> type input parameter named <%= props.inputParameters[i].propertyName.capitalize() %>
   		 /// </summary>
		[InputParameter(DisplayName = "<%= props.inputParameters[i].propertyType %>", Description = "This is a string property", DisplayOrder = 0 )]
		public <%= props.inputParameters[i].propertyType %> <%= props.inputParameters[i].propertyName.capitalize() %>  { get; set; }		
		<% } %>
		
		<% for (let i=0; i<props.outputParameters.length; i++) { %>
		 /// <summary>
   		 /// <%= props.outputParameters[i].propertyType %> type output parameter named <%= props.outputParameters[i].propertyName.capitalize() %>
   		 /// </summary>
		[OutputParameter]
		public <%= props.outputParameters[i].propertyType %> <%= props.outputParameters[i].propertyName.capitalize() %>  { get; set; }		
		<% } %>

  		[Injected]
    	public Abletech.WebApi.Client.Arxivar.Client.Configuration MyConfiguration { get; set; }

		[Injected]
    	public Abletech.WebApi.Client.ArxivarManagement.Client.Configuration MyManagementConfiguration { get; set; }

		[Injected]
    	public Abletech.WebApi.Client.ArxivarWorkflow.Client.Configuration MyWorkFlowConfiguration { get; set; }
		<% for (let i=0; i<props.linkServices.length; i++) { %>
		[Injected]
		public <%- props.linkServices[i]%> My<%- props.linkServices[i]%> { get; set; }
		<% } %>	

		public override Task ExecuteAsync(WorkflowPluginLinkContext context)
		{
			// ...qui implemento la logica del plugin
			return Task.CompletedTask;
		}
    }
}
