#!/bin/bash
set -e

echo "🌌 MythLoop Installer"
echo "====================="

INSTALL_DIR="${HOME}/.mythloop"
mkdir -p "$INSTALL_DIR"

echo "⬇️  Downloading latest release..."
LATEST=$(curl -s https://api.github.com/repos/mythloop/mythloop/releases/latest \
  | grep "browser_download_url" \
  | cut -d '"' -f 4 \
  | head -1)

if [ -z "$LATEST" ]; then
  echo "❌ No release found"
  exit 1
fi

curl -L "$LATEST" -o "$INSTALL_DIR/mythloop.tar.gz"
tar -xzf "$INSTALL_DIR/mythloop.tar.gz" -C "$INSTALL_DIR"
ln -sf "$INSTALL_DIR/mythloop" /usr/local/bin/mythloop 2>/dev/null || true

echo "✅ Installation complete!"
echo ""
echo "Run 'mythloop' to start"
echo "💬 Join Telegram: https://t.me/mythloop"
echo "🌟 Star us: https://github.com/mythloop/mythloop"
