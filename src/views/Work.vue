<template>
  <div class="work">
    <div class="project" v-for="project in processedProjects" v-bind:key="project.id">
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
import axios from 'axios'

export default {
  name: 'Work',
  data () {
    return {
      pageId: 'work',
      projects: [],
      projectArray: []
    }
  },
  created () {
    axios.get('http://joecondon.net/wp/wp-json/wp/v2/projects') // see wp api docs
      .then(response => {
        console.log(response.data)
        this.projects = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  computed: {
    processedProjects () { // strips out the bs in the api response
      let projects = this.projects
      let projectArray = []

      projects.forEach((project) => {
        projectArray.push({
          // 'id': ,
          'title': project.title.rendered,
          'role': project.acf.project_role,
          'image': project.acf.featured_image,
          'agency': project.acf.agency,
          'description': project.acf.project_description,
          'link': project.acf.website_link,
          'awards': project.acf.awards,
          'id': project.id

        })
      })

      projectArray = projectArray.reverse()
      return projectArray
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
