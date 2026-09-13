$port = 3000
$baseDir = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  PORTFOLIO SERVER RUNNING AT: http://localhost:$port" -ForegroundColor Cyan
    Write-Host "  Tekan Ctrl + C untuk menghentikan server." -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Green
    Start-Process "http://localhost:$port"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($urlPath) -or $urlPath -eq '/') {
            $urlPath = "index.html"
        }

        # URL Decode
        $decodedPath = [System.Uri]::UnescapeDataString($urlPath)
        $filePath = Join-Path $baseDir $decodedPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".webp" { "image/webp" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".mp4"  { "video/mp4" }
                ".mov"  { "video/quicktime" }
                ".pdf"  { "application/pdf" }
                ".ttf"  { "font/ttf" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $mime
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $decodedPath")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.OutputStream.Close()
    }
} finally {
    $listener.Stop()
}
