import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownViewerProps = {
  app: string;
  section: string;
};
``;

const MarkdownViewer = (props: MarkdownViewerProps) => {
  const { app, section } = props;
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/markdown/${app}/${section}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [app, section]);

  return (
    <div className='p-6 prose max-w-none'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
