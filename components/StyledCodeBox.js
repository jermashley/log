import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dracula,
  coldarkCold,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const StyledCodeBox = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={coldarkCold}
      customStyle={{
        fontFamily: `JetBrains Mono`,
        backgroundColor: ``,
        textShadow: ``,
        lineHeight: `1.85rem`,
      }}
      codeTagProps={{
        className: `font-mono`,
      }}
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default StyledCodeBox
