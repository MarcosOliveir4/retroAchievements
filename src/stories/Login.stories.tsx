import { Login } from '../components/Login';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const Default = Template.bind({});
