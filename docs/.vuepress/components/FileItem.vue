<template>
  <div class="dir scale-up-center" :class="clicked ? 'effect' : ''" @click="onClick">
    <div class="content">
      <img :src="icon" alt="">
      <div class="dec text-focus-in">{{ name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const clicked = ref(false)
const router = useRouter()

interface IProps {
  name: string
  icon: string,
  link: string,
}

const { name, icon, link } = defineProps<IProps>()

const onClick = () => {
  clicked.value = true
  router.push(link)
}

</script>

<style  scoped>
.dir {
  height: 240px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}

.dir:hover {
  background-color: rgba(198, 225, 241, 0.5);
  transition: .6s;
  border-radius: 20px;
}

.content {
  position: absolute;
}

img {
  width: 120px;
  height: 120px;
}

.dec {
  user-select: none;
  text-align: center;
  font-size: 1.5rem;
}

@media screen and (max-width: 700px) {
  .dir {
    height: 180px;
  }
  img {
    height: 90px;
    width: 90px;
  }
}

@media screen and (max-width: 500px) {
  .dir {
    height: 160px;
  }

  img {
    height: 60px;
    width: 60px;
  }
  .dec{
    font-size: 1.3rem;
    color: aliceblue;
  }
}


@media screen and (max-width: 350px) {
  .dir {
    height: 120px;
  }
  img {
    height: 40px;
    width: 40px;
  }
  .dec{
    font-size: 1rem;
  }
}


.scale-up-center{
  animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s both;
}

.text-focus-in {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530).4s both;
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530).4s both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-4-22 22:2:16
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-focus-in
 * ----------------------------------------
 */
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}


/* ----------------------------------------------
 * Generated by Animista on 2023-4-19 17:58:6
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
/* ----------------------------------------------
 * Generated by Animista on 2023-4-8 23:52:27
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
@keyframes scale-up-center {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>