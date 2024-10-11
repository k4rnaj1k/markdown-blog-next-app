import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const getDateFormatted = (d: Date) => {
  return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
};

const DateWritten = styled.p`
  text-align: end;
  margin: -20px 0;
  color: grey;
  fontSize: small;
`;

export const BlogContent = ({ children, dateWritten }: { children: string, dateWritten?: Date }) => {
  return <>
    {dateWritten &&
      <DateWritten>{getDateFormatted(dateWritten)}</DateWritten>}
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ref: _, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={nightOwl}
            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
          ) : (
            <code {...rest} style={{ backgroundColor: 'green', color: 'white' }} className={className}>
              {children}
            </code>
          )
        }
      }}
    >{children}</Markdown>
  </>
};
