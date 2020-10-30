import { propTypes } from "react-bootstrap/esm/Image";

interface TextProps {
  tag?: "span" | "div";
  weight?: "bold" | "normal";
}
const Text: React.FunctionComponent<TextProps> = (props) => {
  const className = `text ${props.weight}`;
  return (
    <props.tag className={className}>
      {props.children}
      <style jsx global>{`
        .text.bold {
          font-weight: 700;
        }
      `}</style>
    </props.tag>
  );
};

Text.defaultProps = {
  tag: "span",
  weight: "normal",
};

export default Text;
