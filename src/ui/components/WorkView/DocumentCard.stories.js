import React from 'react';
import { DocumentCard } from './DocumentCard';
export default {
    title: 'ui/components/documentCard',
    component: DocumentCard,
    
}

const Template = args => <DocumentCard  {...args}/>
export const DefaultDocumentCard = Template.bind({});