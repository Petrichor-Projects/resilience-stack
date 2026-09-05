const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const ROOT = path.resolve(__dirname, "..");
const CLI = path.join(ROOT, "bin", "resilience-stack.js");

function run(args, skillsDir) {
  return spawnSync(process.execPath, [CLI, ...args], {
    cwd: ROOT,
    encoding: "utf8",
    env: {
      ...process.env,
      RESILIENCE_STACK_SKILLS_DIR: skillsDir,
    },
  });
}

test("lists all packaged skills without network access", () => {
  const skillsDir = fs.mkdtempSync(path.join(os.tmpdir(), "resilience-list-"));
  const result = run(["list"], skillsDir);

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /positioning-under-pressure/);
  assert.match(result.stdout, /investor-story-forensics/);
});

test("installs the complete packaged skill directory", () => {
  const skillsDir = fs.mkdtempSync(path.join(os.tmpdir(), "resilience-add-"));
  const result = run(["add", "relevancy-audit"], skillsDir);

  assert.equal(result.status, 0, result.stderr);
  assert.ok(fs.existsSync(path.join(skillsDir, "relevancy-audit", "relevancy-audit.md")));
  assert.ok(fs.existsSync(path.join(skillsDir, "relevancy-audit", "scoring", "relevancy-rubric.md")));
  assert.ok(fs.existsSync(path.join(skillsDir, "relevancy-audit", "templates", "scorecard.md")));
});

test("rejects traversal-like skill names", () => {
  const skillsDir = fs.mkdtempSync(path.join(os.tmpdir(), "resilience-invalid-"));
  const result = run(["add", "../README"], skillsDir);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Skill not found/);
  assert.equal(fs.readdirSync(skillsDir).length, 0);
});

test("does not overwrite an existing installation", () => {
  const skillsDir = fs.mkdtempSync(path.join(os.tmpdir(), "resilience-existing-"));
  const existing = path.join(skillsDir, "relevancy-audit");
  fs.mkdirSync(existing);
  fs.writeFileSync(path.join(existing, "local-note.txt"), "preserve me\n");

  const result = run(["add", "relevancy-audit"], skillsDir);

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Skipped existing skill/);
  assert.equal(fs.readFileSync(path.join(existing, "local-note.txt"), "utf8"), "preserve me\n");
});

test("refuses to install over a symbolic link", () => {
  const skillsDir = fs.mkdtempSync(path.join(os.tmpdir(), "resilience-symlink-"));
  const outside = fs.mkdtempSync(path.join(os.tmpdir(), "resilience-outside-"));
  fs.symlinkSync(outside, path.join(skillsDir, "relevancy-audit"), "dir");

  const result = run(["add", "relevancy-audit"], skillsDir);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Refusing to install over symbolic link/);
  assert.equal(fs.readdirSync(outside).length, 0);
});
