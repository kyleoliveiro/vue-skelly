<template>
  <div
    class="skelly-circle"
    :style="{
      width: size,
      height: size,
    }"
  >
    <div
      class="skelly-circle__shape"
      :style="{
        backgroundColor: color,
      }"
    >
      <skelly-shine :color="color" />
    </div>
  </div>
</template>

<script>
import ShapeMixin from '../../mixins/ShapeMixin';

export default {
  name: 'SkellyCircle',
  mixins: [
    ShapeMixin,
  ],
  props: {
    size: {
      type: String,
      default: '100%',
    },
  },
}
</script>

<style scoped>
  .skelly-circle__shape {
    position: relative;
    border-radius: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
</style>