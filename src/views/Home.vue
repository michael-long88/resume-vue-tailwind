<template>
  <div class="flex lg:h-screen w-full">
    <div class="m-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
      <div>
        <img class="m-auto rounded-md" alt="headshot" src="../assets/Long_Michael_510.jpg">
      </div>
      <div class="m-auto">
        <h2 class="text-2xl pl-2 py-4 lg:text-8xl lg:px-8">Hi, I'm Michael Long, a software developer.</h2>
      </div>
      <div class="lg:col-span-2 mx-auto lg:h-8">
        <p class="text-base lg:text-2xl">
          <a href="mailto:michael.long@mlong.me" target="_blank">Email</a>
          &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/michael-long88/" target="_blank">LinkedIn</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/michael-long88" target="_blank">GitHub</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
