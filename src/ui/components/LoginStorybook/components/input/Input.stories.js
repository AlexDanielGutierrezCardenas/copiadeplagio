import React from 'react';
import  Input  from './Input';
export default {
    title: 'ui/components/loginstorybook',
    component: Input,
}
const Template = args => <Input  {...args}/>
const Inputobject = {id:'email',name:'email', placeholder:'Email Address',type:'email'}
export const InputLogin = Template.bind({});
InputLogin.args = {
    attribute:Inputobject ,
    handleChange: () => handleChange('correo', 'value')

}