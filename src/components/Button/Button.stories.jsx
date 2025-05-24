import Button from './Button';

export default {
  title: 'Components/CrossPlatformButton',
  component: Button,
};

export const Primary = {
  args: {
    label: 'Click Me',
    onClick: () => alert('Clicked!'),
  },
};
