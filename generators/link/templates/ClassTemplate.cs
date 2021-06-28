// using Abletech.WebApi.Client.ArxivarWorkflow.Client.Configuration;
// using Abletech.WebApi.Client.ArxivarManagement.Client.Configuration;
// using Abletech.WebApi.Client.Arxivar.Client.Configuration;
using Abletech.WebApi.Client.ArxivarWorkflow.Api;
using Abletech.WebApi.Client.ArxivarWorkflow.Client;
using Abletech.WebApi.Client.ArxivarManagement.Api;
using Abletech.WebApi.Client.ArxivarManagement.Client;
using Abletech.WebApi.Client.Arxivar.Api;
using Abletech.WebApi.Client.Arxivar.Client;
using Abletech.Workflow.Plugins.Attributes;
using Abletech.Workflow.Plugins.Link;
using Abletech.Workflow.Plugins.Services;
using System;
using System.Threading.Tasks;

namespace <%= props.pluginname%>
{
	[Plugin("<%= props.id %>", "<%= props.label %>", "<%= props.minVersion %>", Description = "<%= props.description %>", Icon = "<%= props.icon %>")]
    public class <%= props.pluginname.capitalize()%> : WorkflowPluginLink
    {
 		<% for (let i=0; i<props.inputParameters.length; i++) { %>
		 /// <summary>
   		 /// ciao sono una stringa
   		 /// </summary>
		[InputParameter(DisplayName = "<%= props.inputParameters[i].propertyType %>", Description = "This is a string property", DisplayOrder = 0 )]
		public <%= props.inputParameters[i].propertyType %> <%= props.inputParameters[i].propertyName %>  { get; set; }		
		<% } %>
		
		<% for (let i=0; i<props.outputParameters.length; i++) { %>
		 /// <summary>
   		 /// ciao sono una stringa
   		 /// </summary>
		[OutputParameter]
		public <%= props.outputParameters[i].propertyType %> <%= props.outputParameters[i].propertyName %>  { get; set; }		
		<% } %>

		[Injected]
		public IMongoDbProvider MongoDb { get; set; }

		[Injected]
		public IAuthProvider Auth { get; set; }

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
