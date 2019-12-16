import SkellyCircle from './SkellyCircle.vue';

export default { title: 'Circle' };

export const fixedSize = () => ({
  components: { SkellyCircle },
  template: `
    <div style="text-align:center;">
      <skelly-circle size="64px" />
    </div>
  `,
});

export const customColor = () => ({
  components: { SkellyCircle },
  template: `
    <skelly-circle size="64px" color="#80cccc" />
  `,
});

export const fullSize = () => ({
  components: { SkellyCircle },
  template: `
    <div style="width: 320px; height: 320px;">
      <skelly-circle />
    </div>
  `,
});
