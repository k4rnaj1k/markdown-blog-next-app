'use server'

import { unstable_noStore as noStore } from "next/cache";
import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper, BlogTitleStyled } from "../components/BlogPage";
import { Separator } from "../components/BlogsPage";
import { getAllBlogsData } from "../utils/getBlogContent";
import { getBlogName } from "../service/configService";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata>{
    const blogName = await getBlogName();
    return { title: blogName + ' all blogs page', description: 'Page with all currently written blogs.' };
};

export default async function AllBlogsPage() {
    let _ = noStore();
    const allBlogsData = await getAllBlogsData();

    return <>
        {
            allBlogsData.map(blogData => (
                <BlogContentWrapper key={blogData.blogLink} $hasMarginBottom $hasBorder>
                    <BlogTitleStyled>
                        {blogData.blogTitle}
                    </BlogTitleStyled>
                    <BlogContent>{blogData.blogPreview}</BlogContent>
                    <a href={'/blogs/' + blogData.blogLink}>Continue reading...</a>
                </BlogContentWrapper>
            ))
        }
    </>
};