"use server";
import { readdirSync, readFileSync, statSync } from "fs";
import { BlogData } from "../types/AppConfig";
import { getBlogFolder } from "../service/configService";
import 'server-only'
import Blog from "../models/Blog";
import dbConnect from "../lib/dbConnect";

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
  const blogTitle = fileToString.split("[Preview]")[0];
  const blogPreview = fileToString.replace(blogTitle, '').split('[Content]')[0].replace('[Preview]', '');
  const blogContent = fileToString.replace(blogTitle, "").split('[Content]')[1].trim();
  await dbConnect();
  let blogData = await Blog.findOne({ fileName: fileName.replace(blogFolder + '/', '') });
  const result: BlogData = {
    blogContent,
    blogTitle,
    blogLink: fileName.replace(blogFolder + '/', '').replace('.md', ''),
    blogPreview,
    blogCreated: blogData.dateWritten
  };
  return result;
};

const getFileMtime = async (dir: string, fileName: string): Promise<Date> => {
  await dbConnect();
  if (await Blog.exists({ fileName })) {
    const result = await Blog.findOne({ fileName });
    return result.dateWritten;
  }
  const mtime = statSync(`${dir}/${fileName}`).mtime;
  const blog = new Blog({ fileName, dateWritten: mtime });
  await blog.save();
  return mtime;
}

export async function getFileContent(fileName: string): Promise<string> {
  const file = readFileSync(fileName);
  return file.toString();
}

const getSortedFiles = async (dir: string) => {
  const files = readdirSync(dir);

  const unsorted = await Promise.all(files
    .map(async fileName => ({
      name: fileName,
      time: (await getFileMtime(dir, fileName)).getTime(),
    })));
  return unsorted
    .sort((a, b) => b.time - a.time)
    .map(file => file.name);
};

const RESERVED_NAMES = ['about', 'home', 'contacts'];

export async function getAllBlogsData(): Promise<Array<BlogData>> {
  const blogsFolder = await getBlogFolder();
  const result = await getSortedFiles(blogsFolder);
  return Promise.all(result.filter(fileName => !RESERVED_NAMES.some(name => fileName.includes(name))).filter(fileName => !fileName.startsWith('#')).map(fileName => getBlogContentByFilename(blogsFolder + '/' + fileName)));
};
