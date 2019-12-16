import SkellyRectangle from './SkellyRectangle.vue';

export default { title: 'Rectangle' };

export const fixedSize = () => ({
  components: { SkellyRectangle },
  template: `
    <skelly-rectangle width="320px" />
  `,
});

export const withRadius = () => ({
  components: { SkellyRectangle },
  template: `
    <skelly-rectangle width="320px" radius="1000px" />
  `,
});

export const customColor = () => ({
  components: { SkellyRectangle },
  template: `
    <skelly-rectangle width="320px" color="#80cccc" />
  `,
});

export const fullSize = () => ({
  components: { SkellyRectangle },
  template: `
    <skelly-rectangle />
  `,
});
