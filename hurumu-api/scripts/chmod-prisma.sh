#!/bin/sh
set -e
echo "[fix-prisma-perms] Starting"
# Ensure the prisma cli wrapper is executable
if [ -f ./node_modules/.bin/prisma ]; then
  chmod +x ./node_modules/.bin/prisma || true
fi

# Make any prisma-related engine binaries executable (query-engine, libquery_engine, etc.)
if [ -d ./node_modules ]; then
  find ./node_modules -type f \( -name "prisma" -o -name "query-engine*" -o -name "libquery_engine*" \) -exec chmod +x {} \; 2>/dev/null || true
fi

echo "[fix-prisma-perms] Completed"
