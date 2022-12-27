#!/usr/bin/env node

import { mkdirSync } from "fs";
import { resolve } from "path";
import { execSync } from "child_process";

const projectName = process.argv[2];
const projectPath = resolve(process.cwd(), projectName);

mkdirSync(projectPath);

// Change to the new project directory
process.chdir(projectPath);

// Initialize the Nuxt.js project
execSync("npx create-nuxt-app .", { stdio: "inherit" });

console.log(`Successfully generated new Nuxt.js project at ${projectPath}`);
