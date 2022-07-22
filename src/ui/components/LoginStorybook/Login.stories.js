import React from 'react';
import  {Login} from './Login';
export default {
    title: 'ui/components/loginstorybook',
    component: Login,
}
const Template = args => <Login  {...args}/>

export const DefaultLogin = Template.bind({});
