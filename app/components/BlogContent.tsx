import Markdown from "react-markdown";

export const BlogContent = ({ children }: { children: string }) => {
  return <Markdown>{children}</Markdown>
};