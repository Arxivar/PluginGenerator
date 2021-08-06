ECHO "Building Plugin"

SET TargetDir="%1%"
SET TargetWild="%2%"
SET DestPath="%3%"

IF EXIST "%TargetDir%\client" RMDIR "%TargetDir%\client"
MKDIR "%TargetDir%\client"
XCOPY "..\scripts\build" "%TargetDir%\client" /y /s
powershell compress-archive -Path "%TargetWild%" -Update -DestinationPath "%DestPath%"






 






