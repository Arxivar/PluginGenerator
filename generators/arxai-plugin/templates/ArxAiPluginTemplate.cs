using Abletech.Arxivar.ArxAI.Plugins;
using Microsoft.Extensions.Logging;
using ToolDescription = System.ComponentModel.DescriptionAttribute;

namespace Abletech.Arxivar.ArxAI.Plugins.<%= props.pluginname %>;

/// <summary>
/// <%= props.description %>
/// </summary>
[ArxAiPlugin(PluginIdValue, "<%= props.label %>", "<%= props.version %>",
    Description = "<%= props.description %>",
    Icon = "<%= props.icon %>")]
public class <%= props.pluginname %>Plugin : ArxAiToolProvider, IInstructionsProvider, IInitializablePlugin, IAsyncDisposable
{
    public const string PluginIdValue = "<%= props.id %>";

    /// <summary>Logger injected by the host, categorized with the plugin name.</summary>
    [Injected]
    public ILogger Logger { get; set; } = null;

    /// <summary>Sample configuration parameter.</summary>
    [Parameter(DisplayName = "Sample value", Description = "A configurable sample value", DisplayOrder = 1)]
    public string SampleValue { get; set; } = string.Empty;

    /// <summary>
    /// Sample protected parameter: persisted encrypted in the secure store, write-only in the
    /// management APIs, decrypted by the host only when the plugin is instantiated.
    /// </summary>
    [ParameterSecure(DisplayName = "Secret value", Description = "A sample secret value", DisplayOrder = 2)]
    public string SecretValue { get; set; } = string.Empty;

    /// <summary>
    /// Optional setup hook. The host calls this once, right after creating the instance and after
    /// the <see cref="InjectedAttribute"/> dependencies and the <see cref="ParameterAttribute"/> /
    /// <see cref="ParameterSecureAttribute"/> values have been assigned — so it is safe to read them here.
    /// </summary>
    /// <remarks>
    /// Use this to acquire resources owned by the instance and released in <see cref="DisposeAsync"/>
    /// (e.g. an <c>HttpClient</c>, a connection, a temp file). Make the method <c>async</c> and
    /// <c>await</c> your setup if needed.
    /// <para>
    /// Do NOT rethrow on failure: the host would discard the whole plugin (instructions included).
    /// Prefer logging the error and degrading gracefully (e.g. leave a field null and expose a
    /// readiness check tool), so the model can react instead of losing the plugin entirely.
    /// </para>
    /// </remarks>
    public Task InitializeAsync()
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: initializing");

        // TODO: acquire any resources this instance needs (released in DisposeAsync).
        return Task.CompletedTask;
    }

    /// <summary>
    /// Instructions fragment that the host appends to the chatbot instructions.
    /// Return string.Empty to contribute nothing.
    /// </summary>
    public string GetInstructions(IArxAiPluginContext context)
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: applying instructions for user {UserId} on {DocumentCount} document(s)",
            context.UserId?.ToString() ?? "unknown", context.Documents.Count);

        // TODO: return the plugin instructions fragment.
        return string.Empty;
    }

    /// <summary>
    /// Sample tool: returns the value of the SampleValue parameter.
    /// Public methods marked with [ToolDescription] are exposed as tools to the AI agent.
    /// </summary>
    [ToolDescription("Returns the value of the SampleValue parameter")]
    public string GetSampleValue()
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: tool GetSampleValue invoked");

        // TODO: implement the tool logic.
        return SampleValue;
    }

    /// <summary>
    /// Teardown hook. The host disposes the instance when its owning chat client is released — the
    /// instance lives for the whole chat, so this is the place to release resources acquired in
    /// <see cref="InitializeAsync"/> or held in instance fields.
    /// </summary>
    /// <remarks>
    /// Scope notes:
    /// <list type="bullet">
    /// <item>Do NOT dispose injected services (the host's DI container owns them).</item>
    /// <item>Resources scoped to a single tool call belong in a <c>using</c> inside that tool
    /// method, not here.</item>
    /// <item>Resources meant to be shared across chats must NOT be tied to this disposal: manage
    /// them out-of-band (e.g. a static cache with idle reclamation).</item>
    /// </list>
    /// </remarks>
    public ValueTask DisposeAsync()
    {
        Logger?.LogInformation("<%= props.pluginname %>Plugin: disposing");

        // TODO: release the resources owned by this instance.
        return ValueTask.CompletedTask;
    }
}
