'use server'

import { BlogContent } from "@/app/components/BlogContent";
import { BlogContentWrapper, BlogPageWrapper, BlogTitleStyled } from "@/app/components/BlogPage";
import { getBlogName } from "@/app/service/configService";
import { getBlogContent } from "@/app/utils/getBlogContent";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata({ params: { blogName } }: { params: { blogName: string } }): Promise<Metadata> {
  const { blogTitle, blogPreview } = await getBlogContent(blogName);
  const blogAppName = await getBlogName();
  
  return { title: blogTitle, description: blogPreview };
}

export default async function BlogPage({ params }: { params: { blogName: string } }) {
  const { blogName } = params;
  try {
    const { blogContent, blogTitle, blogCreated } = await getBlogContent(blogName);
    //blogname
    //- search for file
    //- file not found - no luck
    // file found - render body
    return <BlogPageWrapper>
      <BlogContentWrapper>
        <BlogTitleStyled>{blogTitle}</BlogTitleStyled>
        <BlogContent dateWritten={blogCreated} >{blogContent}</BlogContent>
      </BlogContentWrapper>
    </BlogPageWrapper>;
  } catch (e) {
    redirect('/blogs');
  }
}
