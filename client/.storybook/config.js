/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { setDefaults, withInfo } from '@storybook/addon-info';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import './stories.scss';

// addon-info
setDefaults({
  header: true,
  inline: true,
  source: true,
  propTables: false,
});

addParameters({
  backgrounds: [
    { name: 'light-grey', value: '#D3D3D3', default: true },
    { name: 'grey', value: '#808080' },
    { name: 'white', value: '#FFFFFF' },
    { name: 'mulberry', value: '#6D0839' },
  ],
});

const withInfoConfig = {
  styles: {
    infoBody: { margin: '0', padding: '20px' },
    infoPage: { margin: '0' },
    infoStory: { margin: '0', padding: '20px 0' },
    source: { h1: { margin: '0' } },
  },
};

const globalDecorator = (storyFn, context) =>
  withInfo(withInfoConfig)(storyFn)(context);
  addDecorator(globalDecorator);
  addDecorator(withNotes);

// automatically import all files ending in *.stories.jsx
const req = require.context('../app/stories', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
