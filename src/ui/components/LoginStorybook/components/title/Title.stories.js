import React from 'react';
import  Title  from './Title';
export default {
    title: 'ui/components/loginstorybook',
    component: Title,
}
const Template = args => <Title {...args}/>
export const TitleLogin= Template.bind({});
TitleLogin.args = {
    text:'login'

}