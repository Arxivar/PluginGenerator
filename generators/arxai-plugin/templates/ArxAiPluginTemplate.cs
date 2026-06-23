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
public class <%= props.pluginname %>Plugin : ArxAiToolProvider, IInstructionsProvider
{
    public const string PluginIdValue = "<%= props.id %>";

    /// <summary>Logger iniettato dall'host, categorizzato col nome del plugin.</summary>
    [Injected]
    public ILogger Logger { get; set; } = null;

    /// <summary>Parametro di configurazione di esempio.</summary>
    [Parameter(DisplayName = "Sample value", Description = "Valore di esempio configurabile", DisplayOrder = 1)]
    public string SampleValue { get; set; } = string.Empty;

    /// <summary>
    /// Parametro protetto di esempio: persistito crittografato nel secure store, write-only nelle
    /// API di management, decrittato dall'host solo all'istanziazione del plugin.
    /// </summary>
    [ParameterSecure(DisplayName = "Secret value", Description = "Valore segreto di esempio", DisplayOrder = 2)]
    public string SecretValue { get; set; } = string.Empty;

    /// <summary>
    /// Frammento di istruzioni che l'host accoda alle istruzioni del chatbot.
    /// Restituire string.Empty per non contribuire nulla.
    /// </summary>
    public string GetInstructions(IArxAiPluginContext context)
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: applico le istruzioni per l'utente {UserId} su {DocumentCount} documento/i",
            context.UserId?.ToString() ?? "sconosciuto", context.Documents.Count);

        // TODO: restituire il frammento di istruzioni del plugin.
        return string.Empty;
    }

    /// <summary>
    /// Tool di esempio: restituisce il valore del parametro SampleValue.
    /// I metodi pubblici con [ToolDescription] vengono esposti come tool all'agent AI.
    /// </summary>
    [ToolDescription("Restituisce il valore del parametro SampleValue")]
    public string GetSampleValue()
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: tool GetSampleValue invocato");

        // TODO: implementare la logica del tool.
        return SampleValue;
    }
}
