import React from 'react';
import  Label  from './Label';
export default {
    title: 'ui/components/loginstorybook',
    component: Label,
}
const Template = args => <Label  {...args}/>
export const LabelLogin= Template.bind({});
LabelLogin.args = {
    text:'login'

}