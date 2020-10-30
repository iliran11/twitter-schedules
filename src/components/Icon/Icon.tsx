import React from "react";
import Github from "./github-logo.svg";
import Twitter from "./twitter-logo.svg";
import Woman from "./woman.svg";

interface IconProps {
  size?: number;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = (props: IconProps & { icon: any }) => {
  return (
    <div className={`icon-container ${props.size ? "predefined-size" : ""}`}>
      <props.icon />
      <style jsx>
        {`
          .icon-container {
            display: flex;
          }
          .predefined-size {
            height: ${props.size}px;
            width: ${props.size}px;
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
const TwitterIcon = (props: IconProps) => (
  <Icon icon={Twitter} size={props.size} />
);

const WomanAvatar = (props: IconProps) => (
  <Icon icon={Woman} size={props.size}></Icon>
);

export default { GithubIcon, TwitterIcon, WomanAvatar };
