'use server'
import { BlogContent } from "@/app/components/BlogContent";
import { BlogPageWrapper } from "@/app/components/BlogPage";
import { getBlogContent } from "@/app/utils/getBlogContent";

//TODO: replace placeholder with actual page
export default async function BlogPage({ params }: { params: { blogName: string } }) {
    const { blogName } = params;
    const { blogContent, blogTitle } = await getBlogContent(blogName);
    //blogname
    //- search for file
    //- file not found - no luck
    // file found - render body
    return <BlogPageWrapper><BlogContent>{blogContent}</BlogContent></BlogPageWrapper>
}