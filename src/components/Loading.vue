<template>
  <div class="hello">
<!--     Loading<span><span>.</span><span>.</span><span>.</span></span>
    <div>{{ percent }}</div> -->
  </div>
</template>

<script>

export default {
  name: 'Loading',
  props: {
    percent: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width:100%;
  height:120vh;
  background-color: #444;
  position:absolute;
  top:0;
}

// .swoop-leave-active {
//   animation: swoops 1s linear;
// }

// @keyframes swoops {
//   0% {
//     transform: translateY(-5%) skewy(-2deg);
//   }
//   10% {
//     transform: translateY(-10%) skewy(-4deg);
//   }
//   20% {
//     transform: translateY(-15%) skewy(-6deg);
//   }
//   30% {
//     transform: translateY(-20%) skewy(-7deg);
//   }
//   40% {
//     transform: translateY(-25%) skewy(-8deg);
//   }
//   50% {
//     transform: translateY(-30%) skewy(-9deg);
//   }
//   60% {
//     transform: translateY(-40%) skewy(-10deg);
//   }
//   70% {
//     transform: translateY(-50%) skewy(-9deg);
//   }
//   80% {
//     transform: translateY(-60%) skewy(-8deg);
//   }
//   90% {
//     transform: translateY(-80%) skewy(-5deg);
//   }
//   100% {
//     transform: translateY(-100%) skewY(0);
//   }
// }

</style>
