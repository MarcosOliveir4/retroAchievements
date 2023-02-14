import { Login } from '@/components/Login';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '@/context/AuthContext';

export default {
  title: 'Components/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
);

export const Default = Template.bind({});
