#!/usr/bin/env bash
set -euo pipefail

# Resilience Stack — local bulk installer
# Usage: clone the repository, inspect it, then run ./install.sh

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

exec node "${SCRIPT_DIR}/bin/resilience-stack.js" add-all
