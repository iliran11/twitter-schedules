import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Icon from "./Icon";

export default {
  title: "Icon",
} as Meta;

const IconWrap = (props) => (
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
  </>
);
