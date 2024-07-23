'use server'

import { BlogContent } from "@/app/components/BlogContent";
import { BlogContentWrapper, BlogPageWrapper, BlogTitleStyled } from "@/app/components/BlogPage";
import { getBlogContent } from "@/app/utils/getBlogContent";
import { redirect } from "next/navigation";

//TODO: replace placeholder with actual page
export default async function BlogPage({ params }: { params: { blogName: string } }) {
    const { blogName } = params;
    try {
        const { blogContent, blogTitle } = await getBlogContent(blogName);
        //blogname
        //- search for file
        //- file not found - no luck
        // file found - render body
        return <BlogPageWrapper>
            <BlogContentWrapper>
                <BlogTitleStyled>{blogTitle}</BlogTitleStyled>
                <BlogContent>{blogContent}</BlogContent>
            </BlogContentWrapper>
        </BlogPageWrapper>;
    } catch (e) {
        redirect('/blogs');
    }
}