<template>
  <div class="flex-grow overflow-auto max-h-screen w-full dark:text-gray-300">
    <div class="m-auto pt-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
      <div class="m-auto">
        <img class="rounded-md" alt="headshot" src="../assets/Long_Michael_510.jpg">
      </div>
      <div class="m-auto">
        <h2 class="text-2xl pl-2 py-4 text-center lg:text-left lg:text-8xl lg:px-8">Hi, I'm Michael Long, a software developer.</h2>
      </div>
      <div class="lg:col-span-2 mx-auto lg:h-8">
        <p class="text-base text-center lg:text-2xl">
          <a href="mailto:michael.long@mlong.me">Email</a>
          &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/michael-long88/" target="_blank">LinkedIn</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/michael-long88" target="_blank">GitHub</a>
          &nbsp;|&nbsp;
          <a href="/LongMichael_WebResume.pdf" download>Resume</a>
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
