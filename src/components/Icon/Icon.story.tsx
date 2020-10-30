import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Icon from "./Icon";

export default {
  title: "Icon",
} as Meta;

const IconWrap: React.FunctionComponent = (props) => (
  <div>
    {props.children}
    <style jsx>{`
      background-color: red;
    `}</style>
  </div>
);

export const Icons = () => (
  <>
    <IconWrap>
      <Icon.GithubIcon size={20} />
    </IconWrap>
    <IconWrap>
      <Icon.GithubIcon size={80} />
    </IconWrap>
    <IconWrap>
      <Icon.TwitterIcon size={80} />
    </IconWrap>
    <IconWrap>
      <Icon.TwitterIcon size={80} />
    </IconWrap>
    <IconWrap>
      <Icon.WomanAvatar size={80} />
    </IconWrap>
  </>
);

export const FluidIcon = () => (
  <>
    <h4>big</h4>
    <div className="big">
      <Icon.WomanAvatar />
    </div>
    <h4>small</h4>
    <div className="small">
      <Icon.WomanAvatar />
    </div>
    <style jsx>
      {`
        .small {
          width: 100px;
        }
        .big {
          width: 300px;
        }
      `}
    </style>
  </>
);
