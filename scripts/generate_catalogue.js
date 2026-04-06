import { readdir, writeFile, mkdir, stat } from "fs/promises";
import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;
const GAMES_DIR = "games";
const ROOT_DIR = path.join(__dirname, "..", GAMES_DIR);
const OUTPUT_FILE = path.join(__dirname, "..", "output", "catalogue.json");

async function writeJsonSafe(filePath, data) {
  const dir = path.dirname(filePath);

  // create directory recursively if it doesn't exist
  await mkdir(dir, { recursive: true });

  await writeFile(filePath, JSON.stringify(data, null, 2));
}

// Extract exact substring between "index" and ".html"
function extractVersion(fileName) {
  const match = fileName.match(/^index(.*?)\.html$/);

  if (!match) return null;

  const version = match[1];

  // skip base index.html (empty version)
  return version === "" ? null : version;
}

// Capitalize title
function formatTitle(id) {
  return id.charAt(0).toUpperCase() + id.slice(1);
}

async function processDirectory(dirPath) {
  const entries = await readdir(dirPath);

  // must contain base index.html
  if (!entries.includes("index.html")) {
    return null;
  }

  const versions = new Set();

  for (const file of entries) {
    const version = extractVersion(file);
    if (version !== null) {
      versions.add(version);
    }
  }

  const id = path.basename(dirPath);

  return {
    id,
    title: formatTitle(id),
    path: "index.html",
    versions: Array.from(versions), // preserve exact strings
  };
}

async function main() {
  const result = {
    time: Date.now(),
    path: GAMES_DIR,
    games: [],
  };

  const dirs = await readdir(ROOT_DIR);

  for (const dir of dirs) {
    const fullPath = path.join(ROOT_DIR, dir);
    const stats = await stat(fullPath);

    if (!stats.isDirectory()) continue;

    const game = await processDirectory(fullPath);
    if (game) {
      result.games.push(game);
    }
  }

  await writeJsonSafe(OUTPUT_FILE, result);

  console.log("✅ Done:", OUTPUT_FILE);
}

main().catch(console.error);
