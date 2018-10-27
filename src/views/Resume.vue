<template>
  <div class="page resume">
    <div class="r-section r-heading animated fadeInLeft">
      <span class="r-section-content">
        <h2 class="r-name">{{ resumeContent.first_name }} {{ resumeContent.last_name }}</h2>
        <a :href="'mailto:' + resumeContent.email ">{{ resumeContent.email }}</a>
        <p>{{ resumeContent.phone }}</p>
      </span>
    </div>
    <div class="r-section experience animated fadeInLeft">
      <span class="r-section-title">experience</span>
      <div class="r-section-content job-list">
        <div class="job" v-for="job in processedJobs" v-bind:key="job.id">
          <span class="job-heading">
            <h3 class="company-name">{{ job.company }}</h3>
            <h4 class="term">{{ job.start }}—{{ job.end }}</h4>
            <h4 class="job-title">{{ job.title }}</h4>
          </span>
          <div class="duties" v-html="job.duties"></div>
        </div>
      </div>
    </div>
    <div class="r-section skills animated fadeInLeft">
      <span class="r-section-title">skills</span>
      <div class="r-section-content" v-html="resumeContent.skills_software"></div>
    </div>
    <div class="r-section education animated fadeInLeft">
      <span class="r-section-title">education</span>
      <div class="r-section-content" v-html="resumeContent.education"></div>
    </div>
    <div class="r-section references animated fadeInLeft">
      <span class="r-section-title">references</span>
      <div class="r-section-content reference-request">Click here to request</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Resume',
  data () {
    return {
      pageId: 'resume',
      resumeContent: [],
      jobs_feed: []
    }
  },
  created () {
    // this.$emit('ProgressStart')

    axios.get('http://joecondon.net/wp/wp-json/acf/v3/pages/484') // see wp api docs
      .then(response => {
        this.resumeContent = response.data.acf
        console.log('still working...')
      })
      .catch(e => {
        this.errors.push(e)
      })

    axios.get('http://joecondon.net/wp/wp-json/wp/v2/jobs')
      .then(response => {
        this.jobs_feed = response.data
        // this.$emit('ProgressFinish')
        console.log("I'm done!")
      })
      .catch(er => {
        this.errors.push(er)
      })
  },
  computed: {
    processedJobs () { // strips out the bs in the api response
      let jobs = this.jobs_feed
      let jobArray = []

      jobs.forEach((job) => {
        jobArray.push({
          // 'id': ,
          'company': job.acf.company,
          'start': job.acf.start_year,
          'end': job.acf.end_year,
          'title': job.acf.title,
          'duties': job.acf.duties
        })
      })

      jobArray = jobArray.reverse()
      return jobArray
    }
  }
}
</script>

<style lang="scss">

.r-section {
  display:grid;
  grid-template-columns: 15% 1fr;
  grid-column-gap:20px;
  margin-bottom:20px;
  max-width:800px;

  &.r-heading {
    text-align: left;

    .r-section-content {
      grid-column-start:2;
    }

    .r-name {
      text-align:left;
      font-size:30px;
      padding-bottom:0;
      margin-bottom:-2px;
    }
  }

  .r-section-title {
    text-align:right;
    height:100%;
    padding-top:0;
    color: $grey-light;
  }

  .r-section-content {
    text-align:left;
    // padding-left:30px;
    width:100%;
    padding-top:0;

    h3 {
      text-align: left;
    }
  }

  &.experience {
    .job-list {

      .job {
        margin-bottom:20px;

        .job-heading {
          text-align:left;

          .company-name {
            float:left;
            margin-right:6px;
            font-weight:500;
          }

          .job-title {
            font-style: italic;
          }
        }

        .duties {
          margin-top:6px;
          padding-left:.5em;
          text-indent:-.5em;

          li:before {
            content:": ";
          }

          li {
            list-style-type:none;
          }
        }
      }
    }
  }

  &.skills {
    margin-bottom:30px;

    ul {
      column-count:3;
      column-width:220px;

      li {
        margin-bottom:6px;

        &:before {
          content: ": ";
        }
      }
    }
  }

  &.education {
    margin-bottom:30px;
  }
}

@media (max-width: $tablet){
  .r-section {
    display:block;

    .r-section-title {
      display:block;
      text-align:left;
      margin-bottom:10px;
    }
  }
}

</style>
