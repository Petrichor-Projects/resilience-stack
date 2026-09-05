#!/usr/bin/env bash
set -euo pipefail

# Resilience Stack — bulk installer
# Usage: curl -fsSL https://raw.githubusercontent.com/Petrichor-Projects/resilience-stack/main/install.sh | bash

REPO="Petrichor-Projects/resilience-stack"
BRANCH="main"
DEST="${HOME}/.claude/skills"

echo "Installing Resilience Stack to ${DEST}/"
mkdir -p "${DEST}"

TMP=$(mktemp -d)
trap "rm -rf ${TMP}" EXIT

curl -fsSL "https://github.com/${REPO}/archive/refs/heads/${BRANCH}.tar.gz" \
  | tar -xz -C "${TMP}"

SRC="${TMP}/resilience-stack-${BRANCH}/skills"
for track in positioning diagnostic brand growth market-definition intelligence investor; do
  if [ -d "${SRC}/${track}" ]; then
    for skill in "${SRC}/${track}"/*; do
      [ -d "$skill" ] || continue
      name=$(basename "$skill")
      cp -R "$skill" "${DEST}/${name}"
      echo "  ✓ ${track}/${name}"
    done
  fi
done

echo ""
echo "Done. 18 skills installed to ${DEST}/"
echo "License: CC BY 4.0 — credit Petrichor Projects (https://petrichorgrowth.com)"
