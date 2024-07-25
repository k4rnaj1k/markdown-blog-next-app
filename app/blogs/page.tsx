'use server'

import { unstable_noStore as noStore } from "next/cache";
import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper, BlogTitleStyled } from "../components/BlogPage";
import { Separator } from "../components/BlogsPage";
import { ListLinkStyled } from "../components/ListStyled";
import { getAllBlogsData } from "../utils/getBlogContent";


export default async function AllBlogsPage() {
    let _ = noStore();
    const allBlogsData = await getAllBlogsData();

    return <>
        {
            allBlogsData.map(blogData => (
                <BlogContentWrapper key={blogData.blogLink} $hasMarginBottom>
                    <BlogTitleStyled>
                        {blogData.blogTitle}
                    </BlogTitleStyled>
                    <BlogContent>{blogData.blogPreview}</BlogContent>
                    <ListLinkStyled href={'/blogs/' + blogData.blogLink}>Continue reading...</ListLinkStyled>
                    <Separator />
                </BlogContentWrapper>
            ))
        }
    </>
};