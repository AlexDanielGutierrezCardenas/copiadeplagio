import React from "react";
import { Button } from "./button";
export default {
    title: 'ui/components/button',
    component: Button,
    argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <Button  {...args}/>
export const DefaultButton = Template.bind({});
DefaultButton.args = {
    label: 'Press Me',
    backgroundColor: '#3751FF',
    isShadow: true,
    size: 'md'
}

export  const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    label: 'Primary',
    backgroundColor: '#e338ff',
    isShadow: false,
    size: 'lg'
}

