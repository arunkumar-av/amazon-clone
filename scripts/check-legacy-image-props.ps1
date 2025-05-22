# Check for legacy Next.js Image component props
$ErrorActionPreference = "SilentlyContinue"

Write-Host "Searching for legacy Image props in the codebase..." -ForegroundColor Yellow

# Define search patterns
$searchPatterns = @(
    'layout=',
    'objectFit=',
    'objectPosition=',
    'layout:',
    'objectFit:',
    'objectPosition:'
)

$sourceDir = "C:\projects\amazon-clone\src"

foreach ($pattern in $searchPatterns) {
    Write-Host "`nChecking for: $pattern" -ForegroundColor Cyan
    
    $files = Get-ChildItem -Path $sourceDir -Recurse -Include "*.tsx","*.jsx","*.ts","*.js" | 
             Select-String -Pattern $pattern -List
             
    if ($files.Count -gt 0) {
        Write-Host "Found in the following files:" -ForegroundColor Red
        foreach ($file in $files) {
            Write-Host "- $($file.Path.Replace($sourceDir + '\', ''))" -ForegroundColor Red
            
            $content = Get-Content $file.Path
            $lineNumber = 1
            foreach ($line in $content) {
                if ($line -match $pattern) {
                    Write-Host "  Line $lineNumber`: $line" -ForegroundColor Gray
                }
                $lineNumber++
            }
        }
    } else {
        Write-Host "No occurrences found." -ForegroundColor Green
    }
}

Write-Host "`nDone checking for legacy Image props." -ForegroundColor Yellow
