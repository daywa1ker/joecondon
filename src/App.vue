<template>
  <div id="app">
    <vue-progress-bar />
    <MenuToggle />
    <MenuPanel v-if="this.$store.state.menuOn"/>
    <button class="loading-toggle" @click='loading = !loading'>Toggle Loading</button>
    <transition v-on:leave="leave">
      <Loading v-if="loading" />
    </transition>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/work">Work</router-link>
    </div>
    <router-view v-on:ProgressStart="startProgress" v-on:ProgressFinish="finishProgress"/>
  </div>
</template>

<script>

import Velocity from 'velocity-animate'
import Loading from '@/components/Loading'
import MenuToggle from '@/components/MenuToggle'
import MenuPanel from '@/components/MenuPanel'

export default {
  name: 'App',
  data () {
    return {
      loading: this.$store.state.loading,
      menuOn: this.$store.state.menuOn
    }
  },
  components: {
    Loading,
    MenuToggle,
    MenuPanel
  },
  methods: {
    leave: function (el, done) {
      Velocity(el, { translateY: '-100%' }, { duration: 700, easing: 'easeInOutCubic', queue: false })
      Velocity(el, { skewY: '-4deg' },
        {
          duration: 350,
          easing: 'easeOutCubic',
          queue: false,
          complete: function (el) {
            Velocity(el, { skewY: '0deg' }, { duration: 350, easing: 'easeOutSine'
            })
          }
        })
    },
    startProgress: function (value) {
      this.$Progress.start()
      this.loading = true
    },
    finishProgress: function (value) {
      this.$Progress.finish()
      this.loading = false
    }
  },
  mounted () {
    this.loading = false
  }
}

</script>

<style lang="scss">

// css reset
html {box-sizing: border-box;font-size: 16px;}
*, *:before, *:after {box-sizing: inherit;}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {margin: 0;padding: 0;font-weight: normal;}
ol, ul {list-style: none;}
img {max-width: 100%;height: auto;}
// end reset

#app {
  font-family: 'SweetSans','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.loading-toggle {
  position:absolute;
  top:10px;
  right:10px;
  z-index:100;
}
</style>
