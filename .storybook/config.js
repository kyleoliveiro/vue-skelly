import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.stories\.js$/), module);
