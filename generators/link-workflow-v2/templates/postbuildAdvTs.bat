ECHO "Building Plugin"

SET TargetDir=%1
IF EXIST "%TargetDir%\client" RMDIR "%TargetDir%\client"
MKDIR "%TargetDir%\client"
XCOPY "..\scripts\build" "%TargetDir%\client" /y /s
powershell compress-archive -Path "%TargetDir%\*" -Update -DestinationPath "..\<%= props.pluginname %>"





 






