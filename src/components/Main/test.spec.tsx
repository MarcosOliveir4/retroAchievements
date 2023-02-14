import { render, screen } from '@testing-library/react';
import { Main, MainInterface } from '.';

const defaultMain: MainInterface = {
  title: 'boilerplate',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
};

const sut = (customProps: MainInterface = defaultMain) =>
  render(
    <Main title={customProps.title} description={customProps.description} />
  );

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = sut();
    expect(
      screen.getByRole('heading', { name: /boilerplate/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = sut();

    expect(container.firstChild).toHaveStyle({
      'background-color': 'var(--background)',
    });
  });
});
