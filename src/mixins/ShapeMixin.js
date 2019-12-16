import SkellyShine from '../components/_SkellyShine/SkellyShine.vue';

export default {
  name: 'SkellyShape',
  components: {
    SkellyShine,
  },
  props: {
    color: {
      type: String,
      default: '#DFDFDF',
    },
  },
}
