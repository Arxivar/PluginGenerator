ECHO "Building Plugin"

SET TargetDir="%1%"
SET TargetWild="%2%"
SET DestPath="%3%"
ECHO %TargetDir%

powershell compress-archive -Path "%TargetWild%" -Update -DestinationPath "%DestPath%"

