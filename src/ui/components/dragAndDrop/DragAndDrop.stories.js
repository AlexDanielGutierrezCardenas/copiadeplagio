import React from 'react';
import { DragAndDrop } from './DragAndDrop';
export default {
    title: 'ui/components/draganddrop',
    component: DragAndDrop,
}
const Template = args => <DragAndDrop  {...args}/>
export const DefaultDragAndDrop = Template.bind({});