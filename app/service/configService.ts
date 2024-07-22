"use server";

import { readFileSync } from "fs";
import { AppConfig } from "../types/AppConfig";

export async function getConfig(): Promise<AppConfig> {
  const file = readFileSync("./config.json", "utf-8");
  return JSON.parse(file);
}

export async function getBlogName() {
  const config: AppConfig = await getConfig();
  return config.blogName;
}

export async function getBlogFolder() {
  const config: AppConfig = await getConfig();
  return config.blogsFolder;
}
