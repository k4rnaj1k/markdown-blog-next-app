import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper, BlogPageWrapper } from "../components/BlogPage";
import { Navbar } from "../components/Navbar";
import { getBlogFolder } from "../service/configService";
import { getBlogContent, getFileContent } from "../utils/getBlogContent";

export default async function AboutPage() {
    const blogsBaseFolder = await getBlogFolder();
    const aboutContent = await getFileContent(blogsBaseFolder + '/' + 'about.md');
    return <>
        <Navbar />
        <BlogPageWrapper>
            <BlogContentWrapper>
                <BlogContent>{aboutContent}</BlogContent>
            </BlogContentWrapper>
        </BlogPageWrapper>
        </>;
}; 