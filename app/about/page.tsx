import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper, BlogPageWrapper } from "../components/BlogPage";
import { getBlogFolder } from "../service/configService";
import { getFileContent } from "../utils/getBlogContent";

export const metadata = {
    title: 'About page',
};

export default async function AboutPage() {
    const blogsBaseFolder = await getBlogFolder();
    const aboutContent = await getFileContent(blogsBaseFolder + '/' + 'about.md');
    return <>
        <BlogPageWrapper>
            <BlogContentWrapper>
                <BlogContent>{aboutContent}</BlogContent>
            </BlogContentWrapper>
        </BlogPageWrapper>
        </>;
}; 