#!/bin/bash
# Startup script for iGot Learner Portal with correct Node version

# Find and use Node v24 (or v22.12)
export N_PREFIX="$HOME/n"
export PATH="$N_PREFIX/bin:$PATH"

# Try to find node v24 or v22.12+
if [ -d "/usr/local/n/versions/node/v24.13.1" ]; then
    export PATH="/usr/local/n/versions/node/v24.13.1/bin:$PATH"
elif [ -f "$HOME/.nvm/versions/node/v24.13.1/bin/node" ]; then
    export PATH="$HOME/.nvm/versions/node/v24.13.1/bin:$PATH"
elif command -v n &> /dev/null; then
    n 24.13.1
fi

echo "Using Node version: $(node --version)"
echo "Using npm version: $(npm --version)"

cd "$(dirname "$0")"
npm start
