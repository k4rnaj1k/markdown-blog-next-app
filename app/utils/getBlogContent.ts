"use server";
import { readdirSync, readFileSync } from "fs";
import { BlogData } from "../types/AppConfig";
import { getBlogFolder } from "../service/configService";

const getBlogFileName = ({
  blogsFolder,
  blogTitle,
}: {
  blogsFolder: string;
  blogTitle: string;
}) => {
  return `${blogsFolder}/${blogTitle
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-")}.md`;
};

export async function getBlogContent(blogName: string): Promise<BlogData> {
  const blogsFolder = await getBlogFolder();
  
  return getBlogContentByFilename(getBlogFileName({ blogsFolder, blogTitle: blogName }));
}

export async function getBlogContentByFilename(fileName: string): Promise<BlogData> {
  const blogFolder = await getBlogFolder();
  const fileToString = await getFileContent(fileName);
  const blogTitle = fileToString.split("[Content]")[0];
  const blogContent = fileToString.replace(blogTitle, "").replace('[Content]', '').trim();
  const result: BlogData = {
    blogContent,
    blogTitle,
    blogLink: fileName.replace(blogFolder + '/', '').replace('.md', '')
  };
  return result;
};

export async function getFileContent(fileName: string): Promise<string> {
  const file = readFileSync(fileName);
  return file.toString();
}

export async function getAllBlogsData(): Promise<Array<BlogData>> {
  const blogsFolder = await getBlogFolder();
  const result = readdirSync(blogsFolder);
  return Promise.all(result.map(fileName => getBlogContentByFilename(blogsFolder + '/' + fileName)));
};