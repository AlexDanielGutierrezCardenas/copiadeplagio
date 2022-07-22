import { Header } from './header'

export default {
    title:'Plagio Control',
    component: Header
};

const Template = (args) => <Header {...args}/>;

export const header = Template.bind({});