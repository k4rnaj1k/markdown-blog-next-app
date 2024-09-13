import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";


export const BlogContent = ({ children }: { children: string }) => {
  return <Markdown
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
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }}
  >{children}</Markdown>
};
