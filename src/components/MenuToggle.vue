<template>
  <svg class="menuToggle" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.59 56.59">
    <title>Menu Toggle</title>
    <g id="Layer_1-2" data-name="Layer 1">
      <line class="mt-line" id="mt1" x1="56.29" y1="11.54" x2="0.29" y2="11.54" fill="none" stroke-miterlimit="10"/>
      <line class="mt-line" id="mt2" x1="56.29" y1="45.04" x2="0.29" y2="45.04" fill="none" stroke-miterlimit="10"/>
      <line class="mt-line" id="mt3" x1="56.29" y1="28.29" x2="0.29" y2="28.29" fill="none" stroke-miterlimit="10"/>
      <line v-if="menuOn" class="mt-line" id="mt4" x1="56.17" y1="0.42" x2="0.42" y2="56.17" fill="none" stroke-miterlimit="10"/>
    </g>
  </svg>
</template>

<script>

export default {
  name: 'MenuToggle',
  data () {
    return {
      menuOn: this.$store.state.menuOn
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menuToggle {
  width:40px;
  height:40px;
  position:absolute;
  left:10px;
  top:10px;
  stroke:$dark;
  stroke-width:3px;
}
</style>
