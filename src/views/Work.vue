<template>
  <div class="work">
    <div class="project" v-for="project in projects" v-bind:key="project.id">
      <h1>{{ project.title }}</h1>
      <img class="project-image" :src="project.image" alt="">
      <p>{{ project.role }}</p>
      <p>{{ project.agency }}</p>
      <p>{{ project.description }}</p>
      <p>{{ project.link }}</p>
      <p>{{ project.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      pageId: 'work',
      projects: this.$store.state.projects
    }
  }
}
</script>

<style lang="scss">
  .work {
    display:grid;
    grid-template-columns: 1fr 500px 1fr
  }

  .project {
    grid-column-start: 2;
    grid-column-end: 2;
  }
</style>
