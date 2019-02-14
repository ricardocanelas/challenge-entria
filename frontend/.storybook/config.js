import { configure, addParameters, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
  })
);

addParameters({
  options: {
    name: 'Web - Challenge Entria',
    url: 'https://github.com/ricardocanelas/challenge_entria',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonsPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
  },
});

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);


