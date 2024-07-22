"use server";
import { readFileSync } from "fs";
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
  
  const file = readFileSync(getBlogFileName({ blogsFolder, blogTitle: blogName }));
  const fileToString = file.toString();
  const blogContent = fileToString.split("[Content]")[1];
  const blogTitle = fileToString.split("[Content]")[0];
  const result: BlogData = {
    blogContent,
    blogTitle,
  };
  return result;
}
