import { Logout } from '../components/Logout';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '@/context/AuthContext';

export default {
  title: 'Components/Logout',
  component: Logout,
} as ComponentMeta<typeof Logout>;

const Template: ComponentStory<typeof Logout> = () => (
  <AuthProvider>
    <Logout />
  </AuthProvider>
);

export const Default = Template.bind({});
