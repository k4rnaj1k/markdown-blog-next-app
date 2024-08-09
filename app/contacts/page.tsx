import { unstable_noStore as noStore } from "next/cache";
import { LinksListElement, LinksListStyled } from "../components/ListStyled";
import { getBlogFolder, getContactsObj } from "../service/configService";
import { getFileContent } from "../utils/getBlogContent";
import { BlogContent } from "../components/BlogContent";
import { BlogContentWrapper } from "../components/BlogPage";

export default async function ContactsPage() {
    const blogsBaseFolder = await getBlogFolder();
    const contactLinks = await getContactsObj();
    const _ = noStore();

    const contactsContent = await getFileContent(blogsBaseFolder + '/' + 'contacts.md');
    return <><LinksListStyled>
        <BlogContentWrapper>
            <BlogContent>{contactsContent}</BlogContent>
            {Object.entries(contactLinks).map((entry) => <LinksListElement key={entry[0]}><a href={entry[1]} target="_blank">{entry[0]}</a></LinksListElement>)}
        </BlogContentWrapper>
    </LinksListStyled></>;
}