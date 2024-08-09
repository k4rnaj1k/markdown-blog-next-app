import { Metadata } from "next";
import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper, BlogPageWrapper } from "../components/BlogPage";
import { getBlogFolder, getBlogName } from "../service/configService";
import { getFileContent } from "../utils/getBlogContent";

export async function generateMetadata(): Promise<Metadata> {
    const blogName = await getBlogName();
    return { title: blogName + ' Home page', description: 'Home page of ' + blogName };
}

export default async function AboutPage() {
    const blogsBaseFolder = await getBlogFolder();
    const aboutContent = await getFileContent(blogsBaseFolder + '/home.md');
    return <>
        <BlogPageWrapper>
            <BlogContentWrapper>
                <BlogContent>{aboutContent}</BlogContent>
            </BlogContentWrapper>
        </BlogPageWrapper>
        </>;
}; 