'use server'

import { unstable_noStore as noStore } from "next/cache";
import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper, BlogTitleStyled } from "../components/BlogPage";
import { Separator } from "../components/BlogsPage";
import { ListLinkStyled } from "../components/ListStyled";
import { getAllBlogsData } from "../utils/getBlogContent";

const RESERVED_NAMES = ['about', 'home'];

export default async function AllBlogsPage() {
    const allBlogsData = await getAllBlogsData();

    return <>
        {
            allBlogsData.map(blogData => (RESERVED_NAMES.indexOf(blogData.blogLink) == -1 &&
                <BlogContentWrapper key={blogData.blogLink} $hasMarginBottom>
                    <BlogTitleStyled>
                        {blogData.blogTitle}
                    </BlogTitleStyled>
                    <BlogContent>{blogData.blogContent.slice(0, 100)}</BlogContent>
                    <ListLinkStyled href={'/blogs/' + blogData.blogLink}>Continue reading...</ListLinkStyled>
                    <Separator />
                </BlogContentWrapper>
            ))
        }
    </>
};