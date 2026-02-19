# 🌌 MythLoop Installer (Windows)
# Run: powershell -ExecutionPolicy Bypass -File install.ps1

Write-Host "🌌 MythLoop Installer" -ForegroundColor Cyan
Write-Host "====================="

$INSTALL_DIR = "$env:USERPROFILE\.mythloop"
if (!(Test-Path $INSTALL_DIR)) {
  New-Item -ItemType Directory -Path $INSTALL_DIR | Out-Null
}

Write-Host "⬇️  Downloading latest release..."

$RELEASE_API = "https://api.github.com/repos/aegisflow/MythLoop/releases/latest"
$RELEASE_DATA = Invoke-RestMethod -Uri $RELEASE_API

$ASSET = $RELEASE_DATA.assets | Where-Object { $_.name -match "\.(exe|msi)$" } | Select-Object -First 1

if (!$ASSET) {
  Write-Host "❌ No Windows release found" -ForegroundColor Red
  Write-Host "Download manually from: https://github.com/aegisflow/MythLoop/releases"
  exit 1
}

$DOWNLOAD_URL = $ASSET.browser_download_url
$DOWNLOAD_PATH = "$INSTALL_DIR\mythloop-setup.exe"

Invoke-WebRequest -Uri $DOWNLOAD_URL -OutFile $DOWNLOAD_PATH

Write-Host "📦 Installing..."
Start-Process -FilePath $DOWNLOAD_PATH -ArgumentList "/S", "/quiet" -Wait

Write-Host "✅ Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Run 'mythloop' in terminal to start"
Write-Host "💬 Join Telegram: https://t.me/mythloop"
Write-Host "🌟 Star us: https://github.com/aegisflow/MythLoop"
