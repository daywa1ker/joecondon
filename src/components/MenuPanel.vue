<template>
  <div id="menu_panel">
    <ul class="project_list">
      <!-- <transition-group name="nav">
      </transition-group> -->
      <li v-for="project in projects" v-bind:key="project.index" v-bind:class="navClass(project.menuClass)"><span class="menu_num">{{ project.menuNum }}</span>{{ project.title }} / <span class="nav_role">{{ project.role }}</span></li>
    </ul>
    <div id="menu_panel_bg"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuPanel',
  data () {
    return {
      menuOn: this.$store.state.menuOn,
      projects: this.$store.state.projects
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu')
    },
    navClass (index) {
      let val = index % 4

      switch (val) {
        case 1:
          return 'one'
        case 2:
          return 'two'
        case 3:
          return 'three'
        case 0:
          return 'four'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#menu_panel {
  position:absolute;
  z-index:10;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,.8);
  display:grid;
  grid-template-columns:10% 1fr 10%;
  grid-template-rows:20px 20% auto;

  ul {
    color:$white;
    font-family:'mrs-eaves';
    text-transform:uppercase;
    text-align:left;
    grid-column-start:2;
    grid-column-end:2;
    grid-row-start:3;
    column-count:2;

    li {
      height:13%;

      .menu_num {
        width:2em;
        display:inline-block;
      }
    }

    .nav_role {
      font-family:'SweetSans';
      font-size:80%;
    }
  }
}
</style>
