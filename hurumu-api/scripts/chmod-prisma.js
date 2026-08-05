#!/usr/bin/env node
const { execSync } = require('child_process');
const { existsSync } = require('fs');

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    // ignore errors
  }
}

console.log('[fix-prisma-perms] running cross-platform script');

if (process.platform === 'win32') {
  console.log('[fix-prisma-perms] windows detected — skipping chmod');
  process.exit(0);
}

// Ensure the prisma cli wrapper is executable
if (existsSync('./node_modules/.bin/prisma')) {
  run('chmod +x ./node_modules/.bin/prisma');
}

// Make any prisma-related engine binaries executable (query-engine, libquery_engine, etc.)
run("find ./node_modules -type f \( -name 'prisma' -o -name 'query-engine*' -o -name 'libquery_engine*' \) -exec chmod +x {} \; 2>/dev/null || true");

console.log('[fix-prisma-perms] done');
