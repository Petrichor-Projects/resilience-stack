#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const https = require("https");

const REPO = "Petrichor-Projects/resilience-stack";
const BRANCH = "main";
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
  npx resilience-stack list                List all available skills
  npx resilience-stack add <skill>         Install one skill to ~/.claude/skills/
  npx resilience-stack add-all             Install all 18 skills
  npx resilience-stack help                Show this help

Skills install to: ~/.claude/skills/<skill-name>/
Full docs: https://github.com/${REPO}
License: CC BY 4.0 — credit Petrichor Projects (https://petrichorgrowth.com)
  `);
}

async function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "resilience-stack" } }, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

async function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "resilience-stack" } }, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

async function listSkills() {
  console.log("\nResilience Stack — 18 strategy frameworks\n");
  for (const track of TRACKS) {
    const url = `https://api.github.com/repos/${REPO}/contents/skills/${track}?ref=${BRANCH}`;
    try {
      const items = await fetchJSON(url);
      if (!Array.isArray(items)) continue;
      console.log(`  ${track}/`);
      for (const item of items) {
        if (item.type === "dir") console.log(`    - ${item.name}`);
      }
    } catch (e) {
      // skip
    }
  }
  console.log("\nInstall: npx resilience-stack add <skill-name>\n");
}

async function findSkillTrack(skill) {
  for (const track of TRACKS) {
    const url = `https://api.github.com/repos/${REPO}/contents/skills/${track}/${skill}?ref=${BRANCH}`;
    try {
      const items = await fetchJSON(url);
      if (Array.isArray(items)) return track;
    } catch (e) {}
  }
  return null;
}

async function addSkill(skill) {
  const track = await findSkillTrack(skill);
  if (!track) {
    console.error(`Skill not found: ${skill}`);
    console.error("Run: npx resilience-stack list");
    process.exit(1);
  }

  const home = process.env.HOME || process.env.USERPROFILE;
  const dest = path.join(home, ".claude", "skills", skill);
  fs.mkdirSync(dest, { recursive: true });

  const fileURL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/skills/${track}/${skill}/${skill}.md`;
  const md = await fetchText(fileURL);

  if (!md || md.length < 200) {
    console.error(`Failed to fetch ${skill}.md`);
    process.exit(1);
  }

  fs.writeFileSync(path.join(dest, `${skill}.md`), md);
  console.log(`Installed: ${skill}`);
  console.log(`  → ${dest}/${skill}.md`);
  console.log(`  Track: ${track}`);
}

async function addAll() {
  for (const track of TRACKS) {
    const url = `https://api.github.com/repos/${REPO}/contents/skills/${track}?ref=${BRANCH}`;
    try {
      const items = await fetchJSON(url);
      if (!Array.isArray(items)) continue;
      for (const item of items) {
        if (item.type === "dir") await addSkill(item.name);
      }
    } catch (e) {}
  }
  console.log("\nAll skills installed to ~/.claude/skills/");
  console.log("License: CC BY 4.0 — credit Petrichor Projects.\n");
}

(async () => {
  if (!cmd || cmd === "help") return help();
  if (cmd === "list") return listSkills();
  if (cmd === "add" && args[1]) return addSkill(args[1]);
  if (cmd === "add-all") return addAll();
  help();
})();
