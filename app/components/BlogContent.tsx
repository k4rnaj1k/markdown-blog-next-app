import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";


export const BlogContent = ({ children }: { children: string }) => {
  return <Markdown
    remarkPlugins={[remarkGfm]}
    children={children}
    components={{
      code(props) {
        const { children, className, node, ref: _, ...rest } = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={nightOwl}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }}
  />
};
