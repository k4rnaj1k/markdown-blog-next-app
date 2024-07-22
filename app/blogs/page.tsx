import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper } from "../components/BlogPage";
import { BlogPreview } from "../components/BlogsPage";
import { ListLinkStyled } from "../components/ListStyled";
import { getAllBlogsData } from "../utils/getBlogContent";

const RESERVED_NAMES = ['about', 'home'];

export default async function AllBlogsPage() {
    const allBlogsData = await getAllBlogsData();

    return <>
        {
            allBlogsData.map(blogData => (RESERVED_NAMES.indexOf(blogData.blogLink) == -1 &&
                <BlogContentWrapper $hasMarginBottom>
                    <BlogPreview>
                        {blogData.blogTitle}
                    </BlogPreview>
                    <BlogContent>{blogData.blogContent.slice(0, 200)}</BlogContent>
                    <ListLinkStyled href={'/blogs/' + blogData.blogLink}>Continue reading...</ListLinkStyled>
                </BlogContentWrapper>
            ))
        }
    </>
};