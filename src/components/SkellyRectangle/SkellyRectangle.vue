<template>
  <div
    class="skelly-rectangle"
  >
    <div
      class="skelly-rectangle__shape"
      :style="{
        backgroundColor: color,
        borderRadius: radius,
        width,
        height,
      }"
    >
      <skelly-shine :color="color" />
    </div>
  </div>
</template>

<script>
import ShapeMixin from '../../mixins/ShapeMixin';

export default {
  name: 'SkellyRectangle',
  mixins: [
    ShapeMixin,
  ],
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '12px',
    },
    radius: {
      type: String,
      default: '3px',
    },
  },
}
</script>

<style scoped>
  .skelly-rectangle__shape {  
    position: relative;
    overflow: hidden;
    max-width: 100%;
  }
</style>