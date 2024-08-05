'use server'

import { BlogContent } from "@/app/components/BlogContent";
import { BlogContentWrapper, BlogPageWrapper, BlogTitleStyled } from "@/app/components/BlogPage";
import { Separator } from "@/app/components/BlogsPage";
import { getBlogName } from "@/app/service/configService";
import { getBlogContent } from "@/app/utils/getBlogContent";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata({ params: { blogName } }: { params: { blogName: string }}): Promise<Metadata> {
    const { blogTitle } = await getBlogContent(blogName);
    const blogAppName = await getBlogName();
    return { title: blogTitle, description: 'A post on ' + blogAppName };
}

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