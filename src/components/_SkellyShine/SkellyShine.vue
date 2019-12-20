<template>
  <div
    class="skelly-shine"
    :style="{
      mixBlendMode,
      animationDirection,
      animationDuration,
      animationTimingFunction,
      backgroundImage: `linear-gradient(to right, ${colorStops})`,
    }"
  />
</template>

<script>
import Color from 'color';

export default {
  name: 'SkellyShine',
  props: {
    color: {
      type: String,
      default: '#000000',
    },
    lightMultiplier: {
      type: Number,
      default: 0.5,
    },
    darkMultiplier: {
      type: Number,
      default: 0.5,
    },
    lightOpacity: {
      type: Number,
      default: 0.25,
    },
    darkOpacity: {
      type: Number,
      default: 0.125,
    },
    lightSaturation: {
      type: Number,
      default: 0.75,
    },
    darkSaturation: {
      type: Number,
      default: 0.75,
    },
    mixBlendMode: {
      type: String,
      default: 'soft-light',
    },
    animationDirection: {
      type: String,
      default: 'normal',
    },
    animationTimingFunction: {
      type: String,
      default: 'linear',
    },
    animationDuration: {
      type: String,
      default: '1.5s',
    },
  },
  computed: {
    lightColor() {
      return Color(this.color).lighten(this.lightMultiplier).saturate(this.lightSaturation).rgb();
    },
    darkColor() {
      return Color(this.color).darken(this.darkMultiplier).saturate(this.darkSaturation).rgb();
    },
    colorStops() {
      const lightColorString = this.lightColor.array().join(',');
      const darkColorString = this.darkColor.array().join(',');
      return [
        `rgba(${lightColorString}, 0) 0%`,
        `rgba(${lightColorString}, ${this.lightOpacity * 0.5}) 12.5%`,
        `rgba(${lightColorString}, ${this.lightOpacity}) 25%`,
        `rgba(${lightColorString}, ${this.lightOpacity * 0.5}) 37.5%`,
        `rgba(${lightColorString}, 0) 50%`,
        `rgba(${darkColorString}, 0) 50%`,
        `rgba(${darkColorString}, ${this.darkOpacity * 0.5}) 62.5%`,
        `rgba(${darkColorString}, ${this.darkOpacity}) 75%`,
        `rgba(${darkColorString}, ${this.darkOpacity * 0.5}) 87.5%`,
        `rgba(${darkColorString}, 0) 100%`,
      ].join(',')
    },
  },
}
</script>

<style scoped>
  @keyframes move-right {
    from {
      transform: translateX(-125%);
    }

    to {
      transform: translateX(50%);
    }
  }

  .skelly-shine {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400%;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    will-change: transform;
    animation-name: move-right;
    animation-iteration-count: infinite;
  }
</style>