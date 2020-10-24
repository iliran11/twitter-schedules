import { maxHeaderSize } from "http";
import React from "react";
import Github from "./github-logo.svg";

interface IconProps {
  size: number;
}
const Icon = (props: IconProps & { icon: any }) => {
  return (
    <div className="icon-container">
      <props.icon />
      <style jsx>
        {`
          .icon-container {
            height: ${props.size}px;
            width: ${props.size}px;
            display: flex;
          }
          .icon-container :global(svg) {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

const GithubIcon = (props: IconProps) => (
  <Icon icon={Github} size={props.size} />
);

export default { GithubIcon };
