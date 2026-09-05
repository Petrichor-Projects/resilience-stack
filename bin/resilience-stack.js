#!/usr/bin/env node
const fs = require("fs");
const os = require("os");
const path = require("path");

const REPO = "Petrichor-Projects/resilience-stack";
const PACKAGE_ROOT = path.resolve(__dirname, "..");
const SKILLS_ROOT = path.join(PACKAGE_ROOT, "skills");
const TRACKS = [
  "positioning",
  "diagnostic",
  "brand",
  "growth",
  "market-definition",
  "intelligence",
  "investor",
];

const args = process.argv.slice(2);
const cmd = args[0];

function help() {
  console.log(`
resilience-stack — Petrichor Strategy Stack installer

Usage:
  node bin/resilience-stack.js list                List all available skills
  node bin/resilience-stack.js add <skill>         Install one skill
  node bin/resilience-stack.js add-all             Install all 18 skills
  node bin/resilience-stack.js help                Show this help

Skills install to: ~/.claude/skills/<skill-name>/ by default
Full docs: https://github.com/${REPO}
License: CC BY 4.0 — credit Petrichor Projects (https://petrichorgrowth.com)
  `);
}

function destinationRoot() {
  return process.env.RESILIENCE_STACK_SKILLS_DIR ||
    path.join(os.homedir(), ".claude", "skills");
}

function skillDirectories(track) {
  const trackPath = path.join(SKILLS_ROOT, track);
  if (!fs.existsSync(trackPath)) return [];
  return fs
    .readdirSync(trackPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function listSkills() {
  console.log("\nResilience Stack — 18 strategy frameworks\n");
  for (const track of TRACKS) {
    const skills = skillDirectories(track);
    if (skills.length === 0) continue;
    console.log(`  ${track}/`);
    for (const skill of skills) console.log(`    - ${skill}`);
  }
  console.log("\nInstall: node bin/resilience-stack.js add <skill-name>\n");
}

function findSkillTrack(skill) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skill)) return null;
  for (const track of TRACKS) {
    const source = path.join(SKILLS_ROOT, track, skill);
    if (fs.existsSync(source) && fs.statSync(source).isDirectory()) return track;
  }
  return null;
}

function addSkill(skill) {
  const track = findSkillTrack(skill);
  if (!track) {
    console.error(`Skill not found: ${skill}`);
    console.error("Run: node bin/resilience-stack.js list");
    return false;
  }

  const source = path.join(SKILLS_ROOT, track, skill);
  const root = destinationRoot();
  const dest = path.join(root, skill);
  fs.mkdirSync(root, { recursive: true });

  if (fs.existsSync(dest)) {
    const existing = fs.lstatSync(dest);
    if (existing.isSymbolicLink()) {
      console.error(`Refusing to install over symbolic link: ${dest}`);
      return false;
    }
    console.log(`Skipped existing skill: ${skill}`);
    return true;
  }

  const stagingRoot = fs.mkdtempSync(path.join(root, `.${skill}.tmp-`));
  const staged = path.join(stagingRoot, skill);
  try {
    fs.cpSync(source, staged, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    fs.renameSync(staged, dest);
  } finally {
    fs.rmSync(stagingRoot, { recursive: true, force: true });
  }

  console.log(`Installed: ${skill}`);
  console.log(`  → ${dest}`);
  console.log(`  Track: ${track}`);
  return true;
}

function addAll() {
  let ok = true;
  for (const track of TRACKS) {
    for (const skill of skillDirectories(track)) {
      if (!addSkill(skill)) ok = false;
    }
  }
  console.log(`\nSkills installed to ${destinationRoot()}/`);
  console.log("License: CC BY 4.0 — credit Petrichor Projects.\n");
  return ok;
}

if (!cmd || cmd === "help") {
  help();
} else if (cmd === "list") {
  listSkills();
} else if (cmd === "add" && args[1]) {
  if (!addSkill(args[1])) process.exitCode = 1;
} else if (cmd === "add-all") {
  if (!addAll()) process.exitCode = 1;
} else {
  help();
  process.exitCode = 1;
}
