import hljs from "highlight.js";
import { createRef, useEffect } from "react";

export default function HighlightCode({ children, language }) {
  const codeRef = createRef();

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, []);

  return (
    <pre className={language}>
      <code ref={codeRef}>{children}</code>
    </pre>
  );
};
