import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Text from "./Text";

export default {
  title: "Text",
  component: Text,
} as Meta;

export const Texts = () => (
  <>
    <h4>Regular text</h4>
    <Text>Hello</Text>
    <h4>Bold text</h4>
    <Text weight="bold">Hello2</Text>
    <h4>Text preset</h4>
    <Text weight="bold" tag="div">
      I am div
    </Text>
  </>
);
