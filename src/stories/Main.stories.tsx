import { Main, MainInterface } from '../components/Main';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args: MainInterface) => (
  <Main {...args} />
);

export const MainDefault = Template.bind({});
MainDefault.args = {
  title: 'boilerplate',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
};
