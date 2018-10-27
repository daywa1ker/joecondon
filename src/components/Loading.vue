<template>
  <div class="hello">
<!--     Loading<span><span>.</span><span>.</span><span>.</span></span>
    <div>{{ percent }}</div> -->
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Loading',
  props: {
    percent: Number
  },
  created () {
    axios.get('http://joecondon.net/wp/wp-json/wp/v2/projects') // see wp api docs
      .then(response => {
        // console.log(response.data)
        let projects = response.data
        let payload = []

        projects.forEach((project) => {
          payload.push({
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

        payload = payload.reverse()

        this.$store.commit('setProjects', payload)
        this.$store.commit('finishLoading')
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

</script>

<style scoped lang="scss">
.hello {
  width:100%;
  height:120vh;
  background-color: #444;
  position:absolute;
  top:0;
}

</style>
