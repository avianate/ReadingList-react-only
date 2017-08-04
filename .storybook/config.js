import { configure } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("..", true, /.stories\.js?$/));
  // require('../src/stories');
}

configure(loadStories, module);