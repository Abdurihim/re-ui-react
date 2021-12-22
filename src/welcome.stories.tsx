import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf("Welcome", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎来到 re 组件库</h1>
        <h3>安装试试</h3>
        <code>npm install re --save</code>
      </>
    );
  },
  { info: { disable: true } }
);
