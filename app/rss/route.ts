export const dynamic = 'force-dynamic' // defaults to auto

import { Feed } from "feed";
import { getAllBlogsData } from "../utils/getBlogContent";
import { getConfig } from "../service/configService";


const generateRssFeed = async () => {
    const { blogName, blogDescription, domain, author, authorEmail } = await getConfig();
    const blogs = await getAllBlogsData();

    const feed = new Feed({
        title: blogName,
        description: blogDescription,
        id: blogName,
        link: domain,
        language: "en",
        author: {
            name: author,
            email: authorEmail,
            link: `${domain}/contacts`,
        },
        copyright: `No rights reserved ${new Date().getFullYear()}`,
    });

    blogs.forEach(({ blogTitle, blogLink, blogPreview, blogCreated }) => {
        feed.addItem({
            title: blogTitle,
            id: blogLink,
            link: `${domain}/blogs/${blogLink}`,
            description: blogPreview,
            date: blogCreated,
        });
    });

    return feed.rss2();
};

const Rss = () => { };

export async function GET() {
    const rss = await generateRssFeed();

    return new Response(rss);
}